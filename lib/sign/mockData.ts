import { v4 as uuidv4 } from "uuid";
import type { Restaurant, MenuType, MenuItemType } from "./types";

interface StoreItem {
  id: string;
  name: string;
  price: number;
  imgSrc: string;
}

interface StoreData {
  id: string;
  name: string;
  items: StoreItem[];
}

export const createMockDataFromJson = (storeData: StoreData) => {
  const now = Math.floor(Date.now() / 1000);
  const restaurantId = storeData.id;
  const menuId = `${restaurantId}`;

  // Create Restaurant
  const restaurant: Restaurant = {
    id: restaurantId,
    name: storeData.name,
    ensName: "",
    paymentAddress: "0x0000000000000000000000000000000000000000",
    createdAt: now,
    updatedAt: now,
  };

  // Create Menu with predictable ID
  const menu: MenuType = {
    id: menuId,
    menuType: "regular",
    startDate: now,
    endDate: now + 7 * 24 * 60 * 60,
    createdAt: now,
    updatedAt: now,
    restaurantId: restaurantId,
  };

  // Create MenuItems with predictable IDs
  const menuItems: MenuItemType[] = storeData.items.map((item) => ({
    id: `${menuId}_item_${item.id}`,
    name: item.name,
    price: Math.floor(item.price * 1e18),
    isAvailable: true,
    createdAt: now,
    updatedAt: now,
    menuId: menuId,
  }));

  return {
    restaurant,
    menu,
    menuItems,
  };
};
