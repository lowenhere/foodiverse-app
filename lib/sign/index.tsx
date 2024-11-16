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
  MERCHANT_SCHEMA_ID,
  RESTAURANT_SCHEMA_ID,
  MENU_SCHEMA_ID,
  MENU_ITEM_SCHEMA_ID,
  ORDER_SCHEMA_ID,
  PAYMENT_SCHEMA_ID,
} from "./constants";
import type {
  UserType,
  MerchantType,
  RestaurantType,
  MenuType,
  MenuItemType,
  OrderType,
  PaymentType,
  WorldIdProof,
} from "./types";
import {
  encodeWorldIdExtraData,
  getShortSchemaId,
  parseAttestationData,
} from "./utils";

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

  // Merchant Management
  async createMerchant(
    merchant: MerchantType,
    proof: WorldIdProof,
  ): Promise<string> {
    const result = await this.client.createAttestation(
      {
        schemaId: getShortSchemaId(MERCHANT_SCHEMA_ID),
        data: merchant,
        attester: this.getAttester(),
        indexingValue: `foodiverse_merchant_${merchant.id}`,
      },
      {
        extraData: encodeWorldIdExtraData(
          proof.root,
          proof.nullifierHash,
          proof.proof,
        ),
      },
    );
    return result.attestationId;
  }

  // Restaurant Management
  async createRestaurant(
    restaurant: RestaurantType,
    proof: WorldIdProof,
  ): Promise<string> {
    const result = await this.client.createAttestation(
      {
        schemaId: getShortSchemaId(RESTAURANT_SCHEMA_ID),
        data: restaurant,
        attester: this.getAttester(),
        indexingValue: `foodiverse_restaurant_${restaurant.id}`,
      },
      {
        extraData: encodeWorldIdExtraData(
          proof.root,
          proof.nullifierHash,
          proof.proof,
        ),
      },
    );
    return result.attestationId;
  }

  // Menu Management
  async createMenu(menu: MenuType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(MENU_SCHEMA_ID),
      data: menu,
      attester: this.getAttester(),
      indexingValue: `foodiverse_menu_${menu.id}`,
    });
    return result.attestationId;
  }

  async createMenuItem(menuItem: MenuItemType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(MENU_ITEM_SCHEMA_ID),
      data: menuItem,
      attester: this.getAttester(),
      indexingValue: `foodiverse_menuitem_${menuItem.id}`,
    });
    return result.attestationId;
  }

  // Order Management
  async createOrder(order: OrderType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(ORDER_SCHEMA_ID),
      data: order,
      attester: this.getAttester(),
      indexingValue: `foodiverse_order_${order.id}`,
    });
    return result.attestationId;
  }

  async createPayment(payment: PaymentType): Promise<string> {
    const result = await this.client.createAttestation({
      schemaId: getShortSchemaId(PAYMENT_SCHEMA_ID),
      data: payment,
      attester: this.getAttester(),
      indexingValue: `foodiverse_payment_${payment.id}`,
    });
    return result.attestationId;
  }

  // Query Methods
  async getRestaurantById(id: string): Promise<RestaurantType | null> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: RESTAURANT_SCHEMA_ID,
      indexingValue: `foodiverse_restaurant_${id}`,
      page: 1,
    });

    if (!attestations?.rows.length) return null;
    return parseAttestationData(attestations.rows[0]) as RestaurantType;
  }

  async getMenuByRestaurantId(
    restaurantId: string,
  ): Promise<MenuType[] | null> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: MENU_SCHEMA_ID,
      indexingValue: `foodiverse_menu_${restaurantId}`,
      page: 1,
    });

    if (!attestations?.rows.length) return null;
    return attestations.rows.map(
      (attestation) => parseAttestationData(attestation) as MenuType,
    );
  }

  async getOrdersByRestaurantId(
    restaurantId: string,
  ): Promise<OrderType[] | null> {
    const attestations = await this.indexService.queryAttestationList({
      schemaId: ORDER_SCHEMA_ID,
      indexingValue: `foodiverse_order_restaurant_${restaurantId}`,
      page: 1,
    });

    if (!attestations?.rows.length) return null;
    return attestations.rows.map(
      (attestation) => parseAttestationData(attestation) as OrderType,
    );
  }
}
