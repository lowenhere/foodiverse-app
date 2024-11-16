import {
  SignProtocolClient,
  SpMode,
  EvmChains,
  IndexService,
  type Address,
} from "@ethsign/sp-sdk";
import type { PrivateKeyAccount, WalletClient } from "viem";
import {
  USER_SCHEMA_ID,
  RESTAURANT_SCHEMA_ID,
  MENU_SCHEMA_ID,
  MENU_ITEM_SCHEMA_ID,
  ORDER_SCHEMA_ID,
  ORDER_ITEM_SCHEMA_ID,
  PAYMENT_SCHEMA_ID,
} from "./constants";
import type {
  UserType,
  Restaurant,
  MenuType,
  MenuItemType,
  OrderType,
  OrderItemType,
  PaymentType,
} from "./types";
import { getShortSchemaId, parseAttestationData } from "./utils";

export class FoodiverseSDK {
  private client: SignProtocolClient;
  private indexService: IndexService;
  private walletClient: WalletClient | undefined;
  private account: PrivateKeyAccount | undefined;

  constructor(account?: PrivateKeyAccount, walletClient?: WalletClient) {
    if (walletClient) {
      this.client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient: walletClient,
      });
      this.walletClient = walletClient;
    } else {
      if (!account) throw new Error("Account is required");
      this.client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        account: account,
      });
      this.account = account;
    }

    this.indexService = new IndexService("testnet");
  }

  getAttester(): Address {
    return (
      (this.account?.address as Address) ||
      (this.walletClient?.account?.address as Address)
    );
  }

  // User Management
  async createUser(user: UserType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(USER_SCHEMA_ID),
      data: user,
      attester: this.getAttester(),
      indexingValue: `foodiverse_user_${user.id}`,
    });
    return result.attestationId;
  }

  // Restaurant Management
  async createRestaurant(restaurant: Restaurant): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(RESTAURANT_SCHEMA_ID),
      data: restaurant,
      attester: this.getAttester(),
      indexingValue: `foodiverse_restaurant_${restaurant.id}`,
    });
    return result.attestationId;
  }

  // Menu Management
  async createMenu(menu: MenuType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(MENU_SCHEMA_ID),
      data: menu,
      attester: this.getAttester(),
      indexingValue: `foodiverse_restaurant_${menu.restaurantId}`,
    });
    return result.attestationId;
  }

  async createMenuItem(menuItem: MenuItemType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(MENU_ITEM_SCHEMA_ID),
      data: menuItem,
      attester: this.getAttester(),
      indexingValue: `foodiverse_menu_${menuItem.menuId}`,
    });
    return result.attestationId;
  }

  // Order Management
  async createOrder(order: OrderType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(ORDER_SCHEMA_ID),
      data: order,
      attester: this.getAttester(),
      indexingValue: `foodiverse_restaurant_orders_${order.restaurantId}`,
    });
    return result.attestationId;
  }

  async createOrderItem(orderItem: OrderItemType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(ORDER_ITEM_SCHEMA_ID),
      data: orderItem,
      attester: this.getAttester(),
      indexingValue: `foodiverse_orderitem_${orderItem.orderId}_${orderItem.id}`,
    });
    return result.attestationId;
  }

  async createPayment(payment: PaymentType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(PAYMENT_SCHEMA_ID),
      data: payment,
      attester: this.getAttester(),
      indexingValue: `foodiverse_payment_${payment.orderId}_${payment.id}`,
    });
    return result.attestationId;
  }

  // Query Methods
  async getUserById(id: string): Promise<UserType | null> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: USER_SCHEMA_ID,
      indexingValue: `foodiverse_user_${id}`,
      page: 1,
    });

    if (!attestations?.rows.length) return null;
    return parseAttestationData(attestations.rows[0]) as UserType;
  }

  async getRestaurantById(id: string): Promise<Restaurant | null> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: RESTAURANT_SCHEMA_ID,
      indexingValue: `foodiverse_restaurant_${id}`,
      page: 1,
    });

    if (!attestations?.rows.length) return null;
    return parseAttestationData(attestations.rows[0]) as Restaurant;
  }

  async getMenusByRestaurantId(restaurantId: string): Promise<MenuType[]> {
    console.log("Getting menus for restaurant:", restaurantId);
    const attestations = await this.indexService.queryAttestationList({
      schemaId: MENU_SCHEMA_ID,
      indexingValue: `foodiverse_restaurant_${restaurantId}`,
      page: 1,
    });

    console.log("Menu attestations:", attestations);

    if (!attestations?.rows) {
      console.log("No menu attestations found");
      return [];
    }

    const menus = attestations.rows.map((attestation) => {
      const menu = parseAttestationData(attestation) as MenuType;
      console.log("Parsed menu:", menu);
      return menu;
    });

    return menus;
  }

  async getMenuItemsByMenuId(menuId: string): Promise<MenuItemType[]> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: MENU_ITEM_SCHEMA_ID,
      indexingValue: `foodiverse_menu_1_menu_1`,
      page: 1,
    });

    console.log("MenuItem attestations:", attestations);

    if (!attestations?.rows) {
      console.log("No menu item attestations found");
      return [];
    }

    const menuItems = attestations.rows.map((attestation) => {
      const item = parseAttestationData(attestation) as MenuItemType;
      console.log("Parsed menu item:", item);
      return item;
    });

    return menuItems;
  }

  async getOrdersByRestaurantId(restaurantId: string): Promise<OrderType[]> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: ORDER_SCHEMA_ID,
      indexingValue: `foodiverse_restaurant_${restaurantId}`,
      page: 1,
    });

    if (!attestations?.rows) return [];
    return attestations.rows.map(
      (attestation) => parseAttestationData(attestation) as OrderType,
    );
  }

  async getOrderItemsByOrderId(orderId: string): Promise<OrderItemType[]> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: ORDER_ITEM_SCHEMA_ID,
      indexingValue: `foodiverse_orderitem_${orderId}`,
      page: 1,
    });

    if (!attestations?.rows) return [];
    return attestations.rows.map(
      (attestation) => parseAttestationData(attestation) as OrderItemType,
    );
  }

  async getPaymentsByRestaurantId(
    restaurantId: string,
  ): Promise<PaymentType[]> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: PAYMENT_SCHEMA_ID,
      indexingValue: `foodiverse_restaurant_${restaurantId}`,
      page: 1,
    });

    if (!attestations?.rows) return [];
    return attestations.rows.map(
      (attestation) => parseAttestationData(attestation) as PaymentType,
    );
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    console.log("getAllRestaurants: Starting query...");
    try {
      const attestations = await this.indexService.queryAttestationList({
        schemaId: RESTAURANT_SCHEMA_ID,
        page: 1,
      });

      console.log("getAllRestaurants: Raw attestations:", attestations);

      if (!attestations?.rows) {
        console.log("getAllRestaurants: No attestations found");
        return [];
      }

      const restaurants = attestations.rows.map((attestation) => {
        console.log("getAllRestaurants: Processing attestation:", attestation);
        return parseAttestationData(attestation) as Restaurant;
      });

      console.log("getAllRestaurants: Processed restaurants:", restaurants);
      return restaurants;
    } catch (error) {
      console.error("getAllRestaurants: Error fetching restaurants:", error);
      throw error;
    }
  }

  async getRestaurantMenus(restaurantId: string): Promise<{
    restaurant: Restaurant;
    menus: MenuType[];
    menuItems: Record<string, MenuItemType[]>;
  }> {
    console.log("Getting restaurant data for:", restaurantId);

    // Get restaurant
    const restaurant = await this.getRestaurantById("1");
    if (!restaurant) {
      console.error("Restaurant not found:", restaurantId);
      throw new Error("Restaurant not found");
    }
    console.log("Found restaurant:", restaurant);

    // Get menus
    const menus = await this.getMenusByRestaurantId(restaurantId);
    console.log("Found menus:", menus);

    // Get menu items for each menu
    const menuItems: Record<string, MenuItemType[]> = {};
    for (const menu of menus) {
      console.log("Getting items for menu:", menu.id);
      menuItems[menu.id] = await this.getMenuItemsByMenuId(menu.id);
      console.log(
        `Found ${menuItems[menu.id].length} items for menu ${menu.id}`,
      );
    }

    return {
      restaurant,
      menus,
      menuItems,
    };
  }

  async getRestaurantOrders(restaurantId: string): Promise<{
    orders: OrderType[];
    orderItems: Record<string, OrderItemType[]>;
    payments: Record<string, PaymentType[]>;
  }> {
    const orders = await this.getOrdersByRestaurantId(restaurantId);
    const orderItems: Record<string, OrderItemType[]> = {};
    const payments: Record<string, PaymentType[]> = {};

    for (const order of orders) {
      orderItems[order.id] = await this.getOrderItemsByOrderId(order.id);
      payments[order.id] = await this.getPaymentsByOrderId(order.id);
    }

    return {
      orders,
      orderItems,
      payments,
    };
  }

  // Status Update Methods
  async updateOrderStatus(
    orderId: string,
    status: OrderType["status"],
  ): Promise<string> {
    const order = await this.getOrderById(orderId);
    if (!order) throw new Error("Order not found");

    const updatedOrder: OrderType = {
      ...order,
      status,
      updatedAt: Math.floor(Date.now() / 1000),
    };

    return this.createOrder(updatedOrder);
  }

  async updatePaymentStatus(
    paymentId: string,
    paymentStatus: PaymentType["paymentStatus"],
  ): Promise<string> {
    const payment = await this.getPaymentById(paymentId);
    if (!payment) throw new Error("Payment not found");

    const updatedPayment: PaymentType = {
      ...payment,
      paymentStatus,
      paymentTime: Math.floor(Date.now() / 1000),
    };

    return this.createPayment(updatedPayment);
  }

  // Helper Methods
  private async getOrderById(id: string): Promise<OrderType | null> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: ORDER_SCHEMA_ID,
      indexingValue: `foodiverse_order_${id}`,
      page: 1,
    });

    if (!attestations?.rows.length) return null;
    return parseAttestationData(attestations.rows[0]) as OrderType;
  }

  private async getPaymentById(id: string): Promise<PaymentType | null> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: PAYMENT_SCHEMA_ID,
      indexingValue: `foodiverse_payment_${id}`,
      page: 1,
    });

    if (!attestations?.rows.length) return null;
    return parseAttestationData(attestations.rows[0]) as PaymentType;
  }
}
