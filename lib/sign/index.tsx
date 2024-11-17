import {
  SignProtocolClient,
  SpMode,
  EvmChains,
  IndexService,
  type Address,
} from "@ethsign/sp-sdk";
import {
  encodeAbiParameters,
  type PrivateKeyAccount,
  type WalletClient,
} from "viem";
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
import { v4 as uuidv4 } from "uuid";
import { SmartAccountClient } from "permissionless/clients";
import { privateKeyToAccount } from "viem/accounts";
import { signProtocolAbi, signProtocolAddress } from "../generated";

export class FoodiverseSDK {
  private client: SignProtocolClient;
  private indexService: IndexService;
  private smartAccountClient: SmartAccountClient | undefined;
  private account: PrivateKeyAccount | undefined;
  private isSmartAccount: boolean;

  constructor(
    walletClient: WalletClient | undefined,
    smartAccountClient?: SmartAccountClient,
  ) {
    if (!walletClient) {
      throw new Error("Wallet client is required");
    }
    if (smartAccountClient) {
      this.smartAccountClient = smartAccountClient as SmartAccountClient;
      this.client = new SignProtocolClient(SpMode.OnChain, {
        chain: smartAccountClient.chain as EvmChains,
        account: privateKeyToAccount(
          "0x0000000000000000000000000000000000000000000000000000000000000001",
        ),
      });
      this.isSmartAccount = true;
    } else {
      this.client = new SignProtocolClient(SpMode.OnChain, {
        chain: walletClient.chain as EvmChains,
        walletClient: walletClient as WalletClient,
      });
      this.isSmartAccount = false;
    }

    this.indexService = new IndexService("testnet");
  }

  getAttester(): Address {
    return (
      (this.smartAccountClient?.account?.address as Address) ||
      (this.account?.address as Address)
    );
  }

  // User Management
  async createUser(user: UserType): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const result = await this.client.createAttestation({
        schemaId: getShortSchemaId(USER_SCHEMA_ID),
        data: user,
        attester: this.getAttester(),
        indexingValue: `foodiverse_user_${user.id}`,
      });
      return result.attestationId;
    }
  }

  // Restaurant Management
  async createRestaurant(restaurant: Restaurant): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const result = await this.client.createAttestation({
        schemaId: getShortSchemaId(RESTAURANT_SCHEMA_ID),
        data: restaurant,
        attester: this.getAttester(),
        indexingValue: `foodiverse_restaurant_${restaurant.id}`,
      });
      return result.attestationId;
    }
  }

  // Menu Management
  async createMenu(menu: MenuType): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const result = await this.client.createAttestation({
        schemaId: getShortSchemaId(MENU_SCHEMA_ID),
        data: menu,
        attester: this.getAttester(),
        indexingValue: `foodiverse_restaurant_${menu.restaurantId}`,
      });
      return result.attestationId;
    }
  }

  async createMenuItem(menuItem: MenuItemType): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const result = await this.client.createAttestation({
        schemaId: getShortSchemaId(MENU_ITEM_SCHEMA_ID),
        data: menuItem,
        attester: this.getAttester(),
        indexingValue: `foodiverse_menu_${menuItem.menuId}`,
      });
      return result.attestationId;
    }
  }

  // Order Management
  async createOrder(order: OrderType): Promise<string> {
    console.log("🚀 | FoodiverseSDK | createOrder | order:", order);
    if (this.isSmartAccount) {
      // Encode order data using viem's encodePacked equivalent
      const orderData = {
        id: order.id,
        status: order.status,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        restaurantId: order.restaurantId,
        items: order.items,
        total: order.total,
      };

      const encodedData = encodeAbiParameters(
        [
          { name: "id", type: "string" },
          { name: "status", type: "string" },
          { name: "createdAt", type: "uint256" },
          { name: "updatedAt", type: "uint256" },
          { name: "restaurantId", type: "string" },
          { name: "items", type: "string[]" },
          { name: "total", type: "uint256" },
        ],
        [
          orderData.id,
          orderData.status,
          BigInt(orderData.createdAt),
          BigInt(orderData.updatedAt),
          orderData.restaurantId,
          orderData.items,
          BigInt(orderData.total),
        ],
      );
      let userOperation = await this.smartAccountClient!.sendUserOperation({
        calls: [
          {
            to: signProtocolAddress,
            abi: signProtocolAbi,
            functionName: "attest",
            args: [
              {
                schemaId: BigInt(0x4a3),
                linkedAttestationId: BigInt(0),
                attestTimestamp: BigInt(Math.floor(Date.now() / 1000)),
                revokeTimestamp: BigInt(0),
                attester: this.getAttester(),
                validUntil: BigInt(0),
                dataLocation: 0,
                revoked: false,
                recipients: [] as `0x${string}`[],
                data: encodedData,
              },
              "", // refUID
              "0x", // value
              "0x", // sig
            ],
          },
        ],
      });

      // Wait for the transaction to be mined
      const receipt =
        await this.smartAccountClient!.waitForUserOperationReceipt({
          hash: userOperation,
        });
      console.log("Transaction receipt:", receipt);
    } else {
      const orderData = {
        id: order.id,
        status: order.status,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        restaurantId: order.restaurantId,
        items: order.items,
        total: order.total,
      };

      const result = await this.client.createAttestation({
        schemaId: getShortSchemaId(ORDER_SCHEMA_ID),
        data: orderData,
        attester: this.getAttester(),
        indexingValue: `foodiverse_restaurant_orders_${order.restaurantId}`,
      });
      return result.attestationId;
    }
  }

  async createOrderItem(orderItem: OrderItemType): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const orderItemData = {
        id: orderItem.id,
        orderId: orderItem.orderId,
        menuItemId: orderItem.menuItemId,
        quantity: orderItem.quantity,
        notes: orderItem.notes || "",
        price: orderItem.price,
      };

      const result = await this.client.createAttestation({
        schemaId: getShortSchemaId(ORDER_ITEM_SCHEMA_ID),
        data: orderItemData,
        attester: this.getAttester(),
        indexingValue: `foodiverse_orderitem_${orderItem.orderId}_${orderItem.id}`,
      });
      return result.attestationId;
    }
  }

  async createPayment(payment: PaymentType): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const result = await this.client.createAttestation({
        schemaId: getShortSchemaId(PAYMENT_SCHEMA_ID),
        data: payment,
        attester: this.getAttester(),
        indexingValue: `foodiverse_payment_${payment.orderId}_${payment.id}`,
      });
      return result.attestationId;
    }
  }

  async createOrderWithItems(
    restaurantId: string,
    items: { menuItemId: string; quantity: number; notes?: string }[],
  ): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      console.log("Creating order with items:", { restaurantId, items });

      // Fetch menu items to get prices
      const menuItems = await this.getMenuItemsByMenuId(restaurantId);
      const menuItemsMap = new Map(menuItems.map((item) => [item.id, item]));

      // Calculate total and create order items
      const orderItems: OrderItemType[] = [];
      let total = BigInt(0);
      const itemIds: string[] = [];

      for (const item of items) {
        const menuItem = menuItemsMap.get(item.menuItemId);
        if (!menuItem)
          throw new Error(`Menu item ${item.menuItemId} not found`);
        if (!menuItem.isAvailable)
          throw new Error(`Menu item ${menuItem.name} is not available`);

        // Convert price to BigInt and calculate total
        const itemPrice = BigInt(menuItem.price);
        const quantity = BigInt(item.quantity);
        const itemTotal = itemPrice * quantity;
        total += itemTotal;

        // Store just the menu item ID
        itemIds.push(item.menuItemId);
      }

      // Create order with just the required schema fields
      const order = {
        id: uuidv4(),
        status: "pending",
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000),
        restaurantId,
        items: itemIds,
        total: Number(total),
      };

      console.log("Created order object:", order);

      try {
        // Create single order attestation
        const result = await this.client.createAttestation({
          schemaId: getShortSchemaId(ORDER_SCHEMA_ID),
          data: order,
          attester: this.getAttester(),
          indexingValue: `foodiverse_restaurant_orders_${order.restaurantId}`,
        });

        console.log("Order attestation created:", result);
        return result.attestationId;
      } catch (error) {
        console.error("Error creating order:", error);
        throw error;
      }
    }
  }

  // Query Methods
  async getUserById(id: string): Promise<UserType | null> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const attestations = await this.indexService.queryAttestationList({
        schemaId: USER_SCHEMA_ID,
        indexingValue: `foodiverse_user_${id}`,
        page: 1,
      });

      if (!attestations?.rows.length) return null;
      return parseAttestationData(attestations.rows[0]) as UserType;
    }
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
      return item;
    });

    return menuItems;
  }

  async getOrdersByRestaurantId(restaurantId: string): Promise<OrderType[]> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
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
  }

  async getOrderItemsByOrderId(orderId: string): Promise<OrderItemType[]> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
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
  }

  async getPaymentsByRestaurantId(
    restaurantId: string,
  ): Promise<PaymentType[]> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
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
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
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
          console.log(
            "getAllRestaurants: Processing attestation:",
            attestation,
          );
          return parseAttestationData(attestation) as Restaurant;
        });

        console.log("getAllRestaurants: Processed restaurants:", restaurants);
        return restaurants;
      } catch (error) {
        console.error("getAllRestaurants: Error fetching restaurants:", error);
        throw error;
      }
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
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const orders = await this.getOrdersByRestaurantId(restaurantId);
      const orderItems: Record<string, OrderItemType[]> = {};
      const payments: Record<string, PaymentType[]> = {};

      for (const order of orders) {
        orderItems[order.id] = await this.getOrderItemsByOrderId(order.id);
        payments[order.id] = await this.getPaymentsByRestaurantId(
          order.restaurantId,
        );
      }

      return {
        orders,
        orderItems,
        payments,
      };
    }
  }

  // Status Update Methods
  async updateOrderStatus(
    orderId: string,
    status: OrderType["status"],
  ): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const order = await this.getOrderById(orderId);
      if (!order) throw new Error("Order not found");

      const updatedOrder: OrderType = {
        ...order,
        status,
        updatedAt: Math.floor(Date.now() / 1000),
      };

      return this.createOrder(updatedOrder);
    }
  }

  async updatePaymentStatus(
    paymentId: string,
    paymentStatus: PaymentType["paymentStatus"],
  ): Promise<string> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const payment = await this.getPaymentById(paymentId);
      if (!payment) throw new Error("Payment not found");

      const updatedPayment: PaymentType = {
        ...payment,
        paymentStatus,
        paymentTime: Math.floor(Date.now() / 1000),
      };

      return this.createPayment(updatedPayment);
    }
  }

  // Helper Methods
  private async getOrderById(id: string): Promise<OrderType | null> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const attestations = await this.indexService.queryAttestationList({
        schemaId: ORDER_SCHEMA_ID,
        indexingValue: `foodiverse_order_${id}`,
        page: 1,
      });

      if (!attestations?.rows.length) return null;
      return parseAttestationData(attestations.rows[0]) as OrderType;
    }
  }

  private async getPaymentById(id: string): Promise<PaymentType | null> {
    if (this.isSmartAccount) {
      // TODO: Implement smart account logic
      throw new Error("Smart account not implemented yet");
    } else {
      const attestations = await this.indexService.queryAttestationList({
        schemaId: PAYMENT_SCHEMA_ID,
        indexingValue: `foodiverse_payment_${id}`,
        page: 1,
      });

      if (!attestations?.rows.length) return null;
      return parseAttestationData(attestations.rows[0]) as PaymentType;
    }
  }
}
