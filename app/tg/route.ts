import { NextRequest } from "next/server";
import { signData } from "@telegram-apps/init-data-node";
import { Bot, webhookCallback } from "grammy";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
const token = process.env.TELEGRAM_BOT_TOKEN ?? "";

const webhookSecret = signData("WebhookTokenString", token);

const bot = new Bot(token);

bot.command("echo", async (ctx) => {
  if (ctx.match.length === 0) {
    return;
  }

  await ctx.reply(ctx.match);
});

let inited = false;
const initTelegram = async () => {
  if (inited) {
    return;
  }

  // telegram set up here
  await bot.api.setMyCommands([
    { command: "echo", description: "Echo the message" },
  ]);

  const webhookUrl = `${baseUrl}/tg`;
  console.log("setting up telegram webhook at", webhookUrl, "...");
  await bot.api.setWebhook(webhookUrl, { secret_token: webhookSecret });

  inited = true;
  return;
};

const callback = webhookCallback(bot, "std/http", {
  secretToken: webhookSecret,
});

export const POST = async (req: NextRequest) => {
  await initTelegram();
  const res = await callback(req);
  return res;
};
