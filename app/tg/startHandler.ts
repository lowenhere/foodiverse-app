import jwt from "jsonwebtoken";
import nodeCrypto from "crypto";

const TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";
const LOGIN_URL = BASE_URL + "/app/tg_login";

const startHandler = async (ctx: any) => {
  const userData = {
    authDate: Math.floor(new Date().getTime()),
    firstName: ctx.update.message.from.first_name,
    lastName: "",
    username: ctx.update.message.from.username,
    id: ctx.update.message.from.id,
    photoURL: "",
  };

  // Generate the hash for Telegram authentication
  const hash = generateTelegramHash(userData);

  // Create JWT with user data and hash
  const telegramAuthToken = jwt.sign(
    {
      ...userData,
      hash,
    },
    TOKEN, // Use the bot token to sign the JWT
    { algorithm: "HS256" },
  );

  let storeId = "1";
  if (ctx.match.length > 0){
    storeId = ctx.match;
  }

  const encodedTelegramAuthToken = encodeURIComponent(telegramAuthToken);
  const encodedReferrer = encodeURIComponent(`/app/store/${storeId}`);

  // Create the inline keyboard with the Mini Web App button
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Enter the Foodiverse 🚀",
            web_app: {
              url: `${LOGIN_URL}/?telegramAuthToken=${encodedTelegramAuthToken}&referrer=${encodedReferrer}`,
            },
          },
        ],
      ],
    },
  };

  // Send a welcome message with the inline keyboard
  ctx.reply("Start the Foodiverse Telegram Mini App", keyboard);
};

const generateTelegramHash = (data: any) => {
  // Prepare the data object with required fields
  const useData = {
    auth_date: String(data.authDate),
    first_name: data.firstName,
    id: String(data.id),
    last_name: data.lastName,
    photo_url: data.photoURL,
    username: data.username,
  };

  // Filter out undefined or empty values from the data object
  const filteredUseData = Object.entries(useData).reduce(
    (acc: { [key: string]: any }, [key, value]) => {
      if (value) acc[key] = value;
      return acc;
    },
    {} as { [key: string]: any },
  );

  // Sort the entries and create the data check string
  const dataCheckArr = Object.entries(filteredUseData)
    .map(([key, value]) => `${key}=${String(value)}`)
    .sort((a, b) => a.localeCompare(b))
    .join("\n");

  // Create SHA-256 hash from the bot token
  const TELEGRAM_SECRET = nodeCrypto
    .createHash("sha256")
    .update(TOKEN)
    .digest();

  // Generate HMAC-SHA256 hash from the data check string
  return nodeCrypto
    .createHmac("sha256", TELEGRAM_SECRET)
    .update(dataCheckArr)
    .digest("hex");
};

export default startHandler;