import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from "@wagmi/core/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Foodiverse Points
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const foodiversePointsAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
] as const;

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const foodiversePointsAddress = {
  2810: "0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2",
  48899: "0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d",
  80002: "0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d",
  84532: "0xBFa7034670eA7d69E369569eC8216a1EEae74bCa",
  534351: "0x814200754D0C6672ca20fC74c066A2b9AD47018d",
} as const;

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const foodiversePointsConfig = {
  address: foodiversePointsAddress,
  abi: foodiversePointsAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PaymentGateway
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const paymentGatewayAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
] as const;

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const paymentGatewayAddress = {
  2810: "0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5",
  48899: "0x814200754D0C6672ca20fC74c066A2b9AD47018d",
  80002: "0x814200754D0C6672ca20fC74c066A2b9AD47018d",
  84532: "0x06b2C86164f7398355fFB382BC812b299bBd9477",
  534351: "0x814200754D0C6672ca20fC74c066A2b9AD47018d",
} as const;

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const paymentGatewayConfig = {
  address: paymentGatewayAddress,
  abi: paymentGatewayAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDC
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const usdcAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
] as const;

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const usdcAddress = {
  2810: "0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915",
  48899: "0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9",
  80002: "0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d",
  84532: "0xfD4aC8071991423e79971BEC2fcfEb78d28B3789",
  534351: "0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915",
} as const;

/**
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const usdcConfig = { address: usdcAddress, abi: usdcAbi } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// foodiRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const foodiRegistrarAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_registry",
        internalType: "contract IL2Registry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "available",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "label", internalType: "string", type: "string" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "targetRegistry",
    outputs: [
      { name: "", internalType: "contract IL2Registry", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "label", internalType: "string", type: "string", indexed: true },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "NameRegistered",
  },
] as const;

export const foodiRegistrarAddress =
  "0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d" as const;

export const foodiRegistrarConfig = {
  address: foodiRegistrarAddress,
  abi: foodiRegistrarAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// foodiverseRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const foodiverseRegistrarAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_registry",
        internalType: "contract IL2Registry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "available",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "label", internalType: "string", type: "string" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "targetRegistry",
    outputs: [
      { name: "", internalType: "contract IL2Registry", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "label", internalType: "string", type: "string", indexed: true },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "NameRegistered",
  },
] as const;

export const foodiverseRegistrarAddress =
  "0xCa556332723D2aB7b6a23440908e2cED85578AB6" as const;

export const foodiverseRegistrarConfig = {
  address: foodiverseRegistrarAddress,
  abi: foodiverseRegistrarAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// reverseRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reverseRegistrarAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "ensAddr", internalType: "contract ENS", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "controller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "enabled", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ControllerChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "resolver",
        internalType: "contract NameResolver",
        type: "address",
        indexed: true,
      },
    ],
    name: "DefaultResolverChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "addr", internalType: "address", type: "address", indexed: true },
      { name: "node", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "ReverseClaimed",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "claim",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "addr", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "resolver", internalType: "address", type: "address" },
    ],
    name: "claimForAddr",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "resolver", internalType: "address", type: "address" },
    ],
    name: "claimWithResolver",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "controllers",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "defaultResolver",
    outputs: [
      { name: "", internalType: "contract NameResolver", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "ens",
    outputs: [{ name: "", internalType: "contract ENS", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "addr", internalType: "address", type: "address" }],
    name: "node",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "controller", internalType: "address", type: "address" },
      { name: "enabled", internalType: "bool", type: "bool" },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "resolver", internalType: "address", type: "address" }],
    name: "setDefaultResolver",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "name", internalType: "string", type: "string" }],
    name: "setName",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "addr", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "resolver", internalType: "address", type: "address" },
      { name: "name", internalType: "string", type: "string" },
    ],
    name: "setNameForAddr",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export const reverseRegistrarAddress =
  "0xCF75B92126B02C9811d8c632144288a3eb84afC8" as const;

export const reverseRegistrarConfig = {
  address: reverseRegistrarAddress,
  abi: reverseRegistrarAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// signProtocol
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const signProtocolAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "error",
    inputs: [{ name: "target", internalType: "address", type: "address" }],
    name: "AddressEmptyCode",
  },
  { type: "error", inputs: [], name: "AttestationAlreadyRevoked" },
  { type: "error", inputs: [], name: "AttestationInvalidDuration" },
  { type: "error", inputs: [], name: "AttestationIrrevocable" },
  { type: "error", inputs: [], name: "AttestationNonexistent" },
  { type: "error", inputs: [], name: "AttestationWrongAttester" },
  {
    type: "error",
    inputs: [
      { name: "implementation", internalType: "address", type: "address" },
    ],
    name: "ERC1967InvalidImplementation",
  },
  { type: "error", inputs: [], name: "ERC1967NonPayable" },
  { type: "error", inputs: [], name: "FailedInnerCall" },
  { type: "error", inputs: [], name: "InvalidDelegateSignature" },
  { type: "error", inputs: [], name: "InvalidInitialization" },
  { type: "error", inputs: [], name: "LegacySPRequired" },
  { type: "error", inputs: [], name: "NotInitializing" },
  { type: "error", inputs: [], name: "OffchainAttestationAlreadyRevoked" },
  { type: "error", inputs: [], name: "OffchainAttestationExists" },
  { type: "error", inputs: [], name: "OffchainAttestationNonexistent" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
  { type: "error", inputs: [], name: "Paused" },
  { type: "error", inputs: [], name: "SchemaNonexistent" },
  { type: "error", inputs: [], name: "SchemaWrongRegistrant" },
  { type: "error", inputs: [], name: "UUPSUnauthorizedCallContext" },
  {
    type: "error",
    inputs: [{ name: "slot", internalType: "bytes32", type: "bytes32" }],
    name: "UUPSUnsupportedProxiableUUID",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "attestationId",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
      {
        name: "indexingKey",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "AttestationMade",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "attestationId",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
      {
        name: "reason",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "AttestationRevoked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "version",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
    ],
    name: "Initialized",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "attestationId",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "OffchainAttestationMade",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "attestationId",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "reason",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "OffchainAttestationRevoked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "schemaId",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
    ],
    name: "SchemaRegistered",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Upgraded",
  },
  {
    type: "function",
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "attestation",
        internalType: "struct Attestation",
        type: "tuple",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "resolverFeesERC20Token",
        internalType: "contract IERC20",
        type: "address",
      },
      {
        name: "resolverFeesERC20Amount",
        internalType: "uint256",
        type: "uint256",
      },
      { name: "indexingKey", internalType: "string", type: "string" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "attest",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "attestation",
        internalType: "struct Attestation",
        type: "tuple",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "indexingKey", internalType: "string", type: "string" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "attest",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "attestation",
        internalType: "struct Attestation",
        type: "tuple",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "resolverFeesETH", internalType: "uint256", type: "uint256" },
      { name: "indexingKey", internalType: "string", type: "string" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "attest",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "attestations",
        internalType: "struct Attestation[]",
        type: "tuple[]",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "resolverFeesETH", internalType: "uint256[]", type: "uint256[]" },
      { name: "indexingKeys", internalType: "string[]", type: "string[]" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "attestBatch",
    outputs: [
      { name: "attestationIds", internalType: "uint64[]", type: "uint64[]" },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "attestations",
        internalType: "struct Attestation[]",
        type: "tuple[]",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "resolverFeesERC20Tokens",
        internalType: "contract IERC20[]",
        type: "address[]",
      },
      {
        name: "resolverFeesERC20Amount",
        internalType: "uint256[]",
        type: "uint256[]",
      },
      { name: "indexingKeys", internalType: "string[]", type: "string[]" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "attestBatch",
    outputs: [
      { name: "attestationIds", internalType: "uint64[]", type: "uint64[]" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "attestations",
        internalType: "struct Attestation[]",
        type: "tuple[]",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "indexingKeys", internalType: "string[]", type: "string[]" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "attestBatch",
    outputs: [
      { name: "attestationIds", internalType: "uint64[]", type: "uint64[]" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "offchainAttestationId", internalType: "string", type: "string" },
      { name: "delegateAttester", internalType: "address", type: "address" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
    ],
    name: "attestOffchain",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationIds", internalType: "string[]", type: "string[]" },
      { name: "delegateAttester", internalType: "address", type: "address" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
    ],
    name: "attestOffchainBatch",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "attestationCounter",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "attestationId", internalType: "uint64", type: "uint64" }],
    name: "getAttestation",
    outputs: [
      {
        name: "",
        internalType: "struct Attestation",
        type: "tuple",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "attestations",
        internalType: "struct Attestation[]",
        type: "tuple[]",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "getDelegatedAttestBatchHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      {
        name: "attestation",
        internalType: "struct Attestation",
        type: "tuple",
        components: [
          { name: "schemaId", internalType: "uint64", type: "uint64" },
          {
            name: "linkedAttestationId",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "attestTimestamp", internalType: "uint64", type: "uint64" },
          { name: "revokeTimestamp", internalType: "uint64", type: "uint64" },
          { name: "attester", internalType: "address", type: "address" },
          { name: "validUntil", internalType: "uint64", type: "uint64" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "revoked", internalType: "bool", type: "bool" },
          { name: "recipients", internalType: "bytes[]", type: "bytes[]" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "getDelegatedAttestHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      {
        name: "offchainAttestationIds",
        internalType: "string[]",
        type: "string[]",
      },
    ],
    name: "getDelegatedOffchainAttestBatchHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "offchainAttestationId", internalType: "string", type: "string" },
    ],
    name: "getDelegatedOffchainAttestHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      {
        name: "offchainAttestationIds",
        internalType: "string[]",
        type: "string[]",
      },
      { name: "reasons", internalType: "string[]", type: "string[]" },
    ],
    name: "getDelegatedOffchainRevokeBatchHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "offchainAttestationId", internalType: "string", type: "string" },
      { name: "reason", internalType: "string", type: "string" },
    ],
    name: "getDelegatedOffchainRevokeHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      {
        name: "schemas",
        internalType: "struct Schema[]",
        type: "tuple[]",
        components: [
          { name: "registrant", internalType: "address", type: "address" },
          { name: "revocable", internalType: "bool", type: "bool" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "maxValidFor", internalType: "uint64", type: "uint64" },
          { name: "hook", internalType: "contract ISPHook", type: "address" },
          { name: "timestamp", internalType: "uint64", type: "uint64" },
          { name: "data", internalType: "string", type: "string" },
        ],
      },
    ],
    name: "getDelegatedRegisterBatchHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      {
        name: "schema",
        internalType: "struct Schema",
        type: "tuple",
        components: [
          { name: "registrant", internalType: "address", type: "address" },
          { name: "revocable", internalType: "bool", type: "bool" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "maxValidFor", internalType: "uint64", type: "uint64" },
          { name: "hook", internalType: "contract ISPHook", type: "address" },
          { name: "timestamp", internalType: "uint64", type: "uint64" },
          { name: "data", internalType: "string", type: "string" },
        ],
      },
    ],
    name: "getDelegatedRegisterHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationIds", internalType: "uint64[]", type: "uint64[]" },
      { name: "reasons", internalType: "string[]", type: "string[]" },
    ],
    name: "getDelegatedRevokeBatchHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationId", internalType: "uint64", type: "uint64" },
      { name: "reason", internalType: "string", type: "string" },
    ],
    name: "getDelegatedRevokeHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "offchainAttestationId", internalType: "string", type: "string" },
    ],
    name: "getOffchainAttestation",
    outputs: [
      {
        name: "",
        internalType: "struct OffchainAttestation",
        type: "tuple",
        components: [
          { name: "attester", internalType: "address", type: "address" },
          { name: "timestamp", internalType: "uint64", type: "uint64" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "schemaId", internalType: "uint64", type: "uint64" }],
    name: "getSchema",
    outputs: [
      {
        name: "",
        internalType: "struct Schema",
        type: "tuple",
        components: [
          { name: "registrant", internalType: "address", type: "address" },
          { name: "revocable", internalType: "bool", type: "bool" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "maxValidFor", internalType: "uint64", type: "uint64" },
          { name: "hook", internalType: "contract ISPHook", type: "address" },
          { name: "timestamp", internalType: "uint64", type: "uint64" },
          { name: "data", internalType: "string", type: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "schemaCounter_", internalType: "uint64", type: "uint64" },
      { name: "attestationCounter_", internalType: "uint64", type: "uint64" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "schema",
        internalType: "struct Schema",
        type: "tuple",
        components: [
          { name: "registrant", internalType: "address", type: "address" },
          { name: "revocable", internalType: "bool", type: "bool" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "maxValidFor", internalType: "uint64", type: "uint64" },
          { name: "hook", internalType: "contract ISPHook", type: "address" },
          { name: "timestamp", internalType: "uint64", type: "uint64" },
          { name: "data", internalType: "string", type: "string" },
        ],
      },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
    ],
    name: "register",
    outputs: [{ name: "schemaId", internalType: "uint64", type: "uint64" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "schemas",
        internalType: "struct Schema[]",
        type: "tuple[]",
        components: [
          { name: "registrant", internalType: "address", type: "address" },
          { name: "revocable", internalType: "bool", type: "bool" },
          {
            name: "dataLocation",
            internalType: "enum DataLocation",
            type: "uint8",
          },
          { name: "maxValidFor", internalType: "uint64", type: "uint64" },
          { name: "hook", internalType: "contract ISPHook", type: "address" },
          { name: "timestamp", internalType: "uint64", type: "uint64" },
          { name: "data", internalType: "string", type: "string" },
        ],
      },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
    ],
    name: "registerBatch",
    outputs: [
      { name: "schemaIds", internalType: "uint64[]", type: "uint64[]" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationId", internalType: "uint64", type: "uint64" },
      { name: "reason", internalType: "string", type: "string" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationId", internalType: "uint64", type: "uint64" },
      { name: "reason", internalType: "string", type: "string" },
      {
        name: "resolverFeesERC20Token",
        internalType: "contract IERC20",
        type: "address",
      },
      {
        name: "resolverFeesERC20Amount",
        internalType: "uint256",
        type: "uint256",
      },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationId", internalType: "uint64", type: "uint64" },
      { name: "reason", internalType: "string", type: "string" },
      { name: "resolverFeesETH", internalType: "uint256", type: "uint256" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationIds", internalType: "uint64[]", type: "uint64[]" },
      { name: "reasons", internalType: "string[]", type: "string[]" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "revokeBatch",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationIds", internalType: "uint64[]", type: "uint64[]" },
      { name: "reasons", internalType: "string[]", type: "string[]" },
      { name: "resolverFeesETH", internalType: "uint256[]", type: "uint256[]" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "revokeBatch",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "attestationIds", internalType: "uint64[]", type: "uint64[]" },
      { name: "reasons", internalType: "string[]", type: "string[]" },
      {
        name: "resolverFeesERC20Tokens",
        internalType: "contract IERC20[]",
        type: "address[]",
      },
      {
        name: "resolverFeesERC20Amount",
        internalType: "uint256[]",
        type: "uint256[]",
      },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
      { name: "extraData", internalType: "bytes", type: "bytes" },
    ],
    name: "revokeBatch",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "offchainAttestationId", internalType: "string", type: "string" },
      { name: "reason", internalType: "string", type: "string" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
    ],
    name: "revokeOffchain",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "offchainAttestationIds",
        internalType: "string[]",
        type: "string[]",
      },
      { name: "reasons", internalType: "string[]", type: "string[]" },
      { name: "delegateSignature", internalType: "bytes", type: "bytes" },
    ],
    name: "revokeOffchainBatch",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "schemaCounter",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "hook", internalType: "address", type: "address" }],
    name: "setGlobalHook",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "paused", internalType: "bool", type: "bool" }],
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "newImplementation", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [],
    name: "version",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "pure",
  },
] as const;

export const signProtocolAddress =
  "0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD" as const;

export const signProtocolConfig = {
  address: signProtocolAddress,
  abi: signProtocolAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiversePointsAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readFoodiversePoints = /*#__PURE__*/ createReadContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readFoodiversePointsAllowance = /*#__PURE__*/ createReadContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "allowance",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readFoodiversePointsBalanceOf = /*#__PURE__*/ createReadContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readFoodiversePointsDecimals = /*#__PURE__*/ createReadContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "decimals",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readFoodiversePointsName = /*#__PURE__*/ createReadContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "name",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readFoodiversePointsOwner = /*#__PURE__*/ createReadContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readFoodiversePointsSymbol = /*#__PURE__*/ createReadContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readFoodiversePointsTotalSupply = /*#__PURE__*/ createReadContract(
  {
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "totalSupply",
  },
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiversePointsAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writeFoodiversePoints = /*#__PURE__*/ createWriteContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writeFoodiversePointsApprove = /*#__PURE__*/ createWriteContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writeFoodiversePointsMint = /*#__PURE__*/ createWriteContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writeFoodiversePointsRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writeFoodiversePointsTransfer = /*#__PURE__*/ createWriteContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writeFoodiversePointsTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writeFoodiversePointsTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiversePointsAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulateFoodiversePoints = /*#__PURE__*/ createSimulateContract({
  abi: foodiversePointsAbi,
  address: foodiversePointsAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulateFoodiversePointsApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulateFoodiversePointsMint =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "mint",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulateFoodiversePointsRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulateFoodiversePointsTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "transfer",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulateFoodiversePointsTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiversePointsAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulateFoodiversePointsTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiversePointsAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const watchFoodiversePointsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiversePointsAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const watchFoodiversePointsApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    eventName: "Approval",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiversePointsAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const watchFoodiversePointsOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiversePointsAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xBFa7034670eA7d69E369569eC8216a1EEae74bCa)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const watchFoodiversePointsTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiversePointsAbi,
    address: foodiversePointsAddress,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link paymentGatewayAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readPaymentGateway = /*#__PURE__*/ createReadContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readPaymentGatewayAllowance = /*#__PURE__*/ createReadContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "allowance",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readPaymentGatewayBalanceOf = /*#__PURE__*/ createReadContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readPaymentGatewayDecimals = /*#__PURE__*/ createReadContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "decimals",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readPaymentGatewayName = /*#__PURE__*/ createReadContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "name",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readPaymentGatewayOwner = /*#__PURE__*/ createReadContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readPaymentGatewaySymbol = /*#__PURE__*/ createReadContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const readPaymentGatewayTotalSupply = /*#__PURE__*/ createReadContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link paymentGatewayAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writePaymentGateway = /*#__PURE__*/ createWriteContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writePaymentGatewayApprove = /*#__PURE__*/ createWriteContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writePaymentGatewayMint = /*#__PURE__*/ createWriteContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writePaymentGatewayRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writePaymentGatewayTransfer = /*#__PURE__*/ createWriteContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writePaymentGatewayTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const writePaymentGatewayTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link paymentGatewayAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulatePaymentGateway = /*#__PURE__*/ createSimulateContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulatePaymentGatewayApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulatePaymentGatewayMint = /*#__PURE__*/ createSimulateContract({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulatePaymentGatewayRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulatePaymentGatewayTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    functionName: "transfer",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulatePaymentGatewayTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link paymentGatewayAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const simulatePaymentGatewayTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link paymentGatewayAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const watchPaymentGatewayEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: paymentGatewayAbi,
  address: paymentGatewayAddress,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link paymentGatewayAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const watchPaymentGatewayApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    eventName: "Approval",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link paymentGatewayAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const watchPaymentGatewayOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link paymentGatewayAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x06b2C86164f7398355fFB382BC812b299bBd9477)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x814200754D0C6672ca20fC74c066A2b9AD47018d)
 */
export const watchPaymentGatewayTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: paymentGatewayAbi,
    address: paymentGatewayAddress,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const readUsdc = /*#__PURE__*/ createReadContract({
  abi: usdcAbi,
  address: usdcAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const readUsdcAllowance = /*#__PURE__*/ createReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "allowance",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const readUsdcBalanceOf = /*#__PURE__*/ createReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const readUsdcDecimals = /*#__PURE__*/ createReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "decimals",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const readUsdcName = /*#__PURE__*/ createReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "name",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const readUsdcOwner = /*#__PURE__*/ createReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const readUsdcSymbol = /*#__PURE__*/ createReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const readUsdcTotalSupply = /*#__PURE__*/ createReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const writeUsdc = /*#__PURE__*/ createWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const writeUsdcApprove = /*#__PURE__*/ createWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const writeUsdcMint = /*#__PURE__*/ createWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const writeUsdcRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "renounceOwnership",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const writeUsdcTransfer = /*#__PURE__*/ createWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const writeUsdcTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const writeUsdcTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "transferOwnership",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link usdcAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const simulateUsdc = /*#__PURE__*/ createSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const simulateUsdcApprove = /*#__PURE__*/ createSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const simulateUsdcMint = /*#__PURE__*/ createSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const simulateUsdcRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const simulateUsdcTransfer = /*#__PURE__*/ createSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const simulateUsdcTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const simulateUsdcTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link usdcAbi}__
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const watchUsdcEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: usdcAbi,
  address: usdcAddress,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const watchUsdcApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: usdcAbi,
  address: usdcAddress,
  eventName: "Approval",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const watchUsdcOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Morph Holesky Morph Holesky Explorer__](https://explorer-holesky.morphl2.io/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9)
 * - [__View Contract on Polygon Amoy Polygon Scan__](https://amoy.polygonscan.com/address/0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xfD4aC8071991423e79971BEC2fcfEb78d28B3789)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915)
 */
export const watchUsdcTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: usdcAbi,
  address: usdcAddress,
  eventName: "Transfer",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiRegistrarAbi}__
 */
export const readFoodiRegistrar = /*#__PURE__*/ createReadContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `functionName` set to `"available"`
 */
export const readFoodiRegistrarAvailable = /*#__PURE__*/ createReadContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
  functionName: "available",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `functionName` set to `"targetRegistry"`
 */
export const readFoodiRegistrarTargetRegistry =
  /*#__PURE__*/ createReadContract({
    abi: foodiRegistrarAbi,
    address: foodiRegistrarAddress,
    functionName: "targetRegistry",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiRegistrarAbi}__
 */
export const writeFoodiRegistrar = /*#__PURE__*/ createWriteContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const writeFoodiRegistrarRegister = /*#__PURE__*/ createWriteContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
  functionName: "register",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiRegistrarAbi}__
 */
export const simulateFoodiRegistrar = /*#__PURE__*/ createSimulateContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const simulateFoodiRegistrarRegister =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiRegistrarAbi,
    address: foodiRegistrarAddress,
    functionName: "register",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiRegistrarAbi}__
 */
export const watchFoodiRegistrarEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `eventName` set to `"NameRegistered"`
 */
export const watchFoodiRegistrarNameRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiRegistrarAbi,
    address: foodiRegistrarAddress,
    eventName: "NameRegistered",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__
 */
export const readFoodiverseRegistrar = /*#__PURE__*/ createReadContract({
  abi: foodiverseRegistrarAbi,
  address: foodiverseRegistrarAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `functionName` set to `"available"`
 */
export const readFoodiverseRegistrarAvailable =
  /*#__PURE__*/ createReadContract({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    functionName: "available",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `functionName` set to `"targetRegistry"`
 */
export const readFoodiverseRegistrarTargetRegistry =
  /*#__PURE__*/ createReadContract({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    functionName: "targetRegistry",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__
 */
export const writeFoodiverseRegistrar = /*#__PURE__*/ createWriteContract({
  abi: foodiverseRegistrarAbi,
  address: foodiverseRegistrarAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const writeFoodiverseRegistrarRegister =
  /*#__PURE__*/ createWriteContract({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    functionName: "register",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__
 */
export const simulateFoodiverseRegistrar = /*#__PURE__*/ createSimulateContract(
  { abi: foodiverseRegistrarAbi, address: foodiverseRegistrarAddress },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const simulateFoodiverseRegistrarRegister =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    functionName: "register",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiverseRegistrarAbi}__
 */
export const watchFoodiverseRegistrarEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `eventName` set to `"NameRegistered"`
 */
export const watchFoodiverseRegistrarNameRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    eventName: "NameRegistered",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const readReverseRegistrar = /*#__PURE__*/ createReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"controllers"`
 */
export const readReverseRegistrarControllers = /*#__PURE__*/ createReadContract(
  {
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "controllers",
  },
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"defaultResolver"`
 */
export const readReverseRegistrarDefaultResolver =
  /*#__PURE__*/ createReadContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "defaultResolver",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"ens"`
 */
export const readReverseRegistrarEns = /*#__PURE__*/ createReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: "ens",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"node"`
 */
export const readReverseRegistrarNode = /*#__PURE__*/ createReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: "node",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"owner"`
 */
export const readReverseRegistrarOwner = /*#__PURE__*/ createReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const writeReverseRegistrar = /*#__PURE__*/ createWriteContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claim"`
 */
export const writeReverseRegistrarClaim = /*#__PURE__*/ createWriteContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: "claim",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimForAddr"`
 */
export const writeReverseRegistrarClaimForAddr =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "claimForAddr",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimWithResolver"`
 */
export const writeReverseRegistrarClaimWithResolver =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "claimWithResolver",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeReverseRegistrarRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setController"`
 */
export const writeReverseRegistrarSetController =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "setController",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setDefaultResolver"`
 */
export const writeReverseRegistrarSetDefaultResolver =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "setDefaultResolver",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setName"`
 */
export const writeReverseRegistrarSetName = /*#__PURE__*/ createWriteContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: "setName",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setNameForAddr"`
 */
export const writeReverseRegistrarSetNameForAddr =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "setNameForAddr",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeReverseRegistrarTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const simulateReverseRegistrar = /*#__PURE__*/ createSimulateContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claim"`
 */
export const simulateReverseRegistrarClaim =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "claim",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimForAddr"`
 */
export const simulateReverseRegistrarClaimForAddr =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "claimForAddr",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimWithResolver"`
 */
export const simulateReverseRegistrarClaimWithResolver =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "claimWithResolver",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateReverseRegistrarRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setController"`
 */
export const simulateReverseRegistrarSetController =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "setController",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setDefaultResolver"`
 */
export const simulateReverseRegistrarSetDefaultResolver =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "setDefaultResolver",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setName"`
 */
export const simulateReverseRegistrarSetName =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "setName",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setNameForAddr"`
 */
export const simulateReverseRegistrarSetNameForAddr =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "setNameForAddr",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateReverseRegistrarTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const watchReverseRegistrarEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"ControllerChanged"`
 */
export const watchReverseRegistrarControllerChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: "ControllerChanged",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"DefaultResolverChanged"`
 */
export const watchReverseRegistrarDefaultResolverChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: "DefaultResolverChanged",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchReverseRegistrarOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"ReverseClaimed"`
 */
export const watchReverseRegistrarReverseClaimedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: "ReverseClaimed",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__
 */
export const readSignProtocol = /*#__PURE__*/ createReadContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 */
export const readSignProtocolUpgradeInterfaceVersion =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "UPGRADE_INTERFACE_VERSION",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attestationCounter"`
 */
export const readSignProtocolAttestationCounter =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "attestationCounter",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getAttestation"`
 */
export const readSignProtocolGetAttestation = /*#__PURE__*/ createReadContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "getAttestation",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedAttestBatchHash"`
 */
export const readSignProtocolGetDelegatedAttestBatchHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedAttestBatchHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedAttestHash"`
 */
export const readSignProtocolGetDelegatedAttestHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedAttestHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedOffchainAttestBatchHash"`
 */
export const readSignProtocolGetDelegatedOffchainAttestBatchHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedOffchainAttestBatchHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedOffchainAttestHash"`
 */
export const readSignProtocolGetDelegatedOffchainAttestHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedOffchainAttestHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedOffchainRevokeBatchHash"`
 */
export const readSignProtocolGetDelegatedOffchainRevokeBatchHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedOffchainRevokeBatchHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedOffchainRevokeHash"`
 */
export const readSignProtocolGetDelegatedOffchainRevokeHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedOffchainRevokeHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedRegisterBatchHash"`
 */
export const readSignProtocolGetDelegatedRegisterBatchHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedRegisterBatchHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedRegisterHash"`
 */
export const readSignProtocolGetDelegatedRegisterHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedRegisterHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedRevokeBatchHash"`
 */
export const readSignProtocolGetDelegatedRevokeBatchHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedRevokeBatchHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getDelegatedRevokeHash"`
 */
export const readSignProtocolGetDelegatedRevokeHash =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getDelegatedRevokeHash",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getOffchainAttestation"`
 */
export const readSignProtocolGetOffchainAttestation =
  /*#__PURE__*/ createReadContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "getOffchainAttestation",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"getSchema"`
 */
export const readSignProtocolGetSchema = /*#__PURE__*/ createReadContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "getSchema",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"owner"`
 */
export const readSignProtocolOwner = /*#__PURE__*/ createReadContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const readSignProtocolProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "proxiableUUID",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"schemaCounter"`
 */
export const readSignProtocolSchemaCounter = /*#__PURE__*/ createReadContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "schemaCounter",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"version"`
 */
export const readSignProtocolVersion = /*#__PURE__*/ createReadContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "version",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__
 */
export const writeSignProtocol = /*#__PURE__*/ createWriteContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attest"`
 */
export const writeSignProtocolAttest = /*#__PURE__*/ createWriteContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "attest",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attestBatch"`
 */
export const writeSignProtocolAttestBatch = /*#__PURE__*/ createWriteContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "attestBatch",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attestOffchain"`
 */
export const writeSignProtocolAttestOffchain =
  /*#__PURE__*/ createWriteContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "attestOffchain",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attestOffchainBatch"`
 */
export const writeSignProtocolAttestOffchainBatch =
  /*#__PURE__*/ createWriteContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "attestOffchainBatch",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"initialize"`
 */
export const writeSignProtocolInitialize = /*#__PURE__*/ createWriteContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "initialize",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"register"`
 */
export const writeSignProtocolRegister = /*#__PURE__*/ createWriteContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "register",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"registerBatch"`
 */
export const writeSignProtocolRegisterBatch = /*#__PURE__*/ createWriteContract(
  {
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "registerBatch",
  },
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeSignProtocolRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"revoke"`
 */
export const writeSignProtocolRevoke = /*#__PURE__*/ createWriteContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "revoke",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"revokeBatch"`
 */
export const writeSignProtocolRevokeBatch = /*#__PURE__*/ createWriteContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "revokeBatch",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"revokeOffchain"`
 */
export const writeSignProtocolRevokeOffchain =
  /*#__PURE__*/ createWriteContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "revokeOffchain",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"revokeOffchainBatch"`
 */
export const writeSignProtocolRevokeOffchainBatch =
  /*#__PURE__*/ createWriteContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "revokeOffchainBatch",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"setGlobalHook"`
 */
export const writeSignProtocolSetGlobalHook = /*#__PURE__*/ createWriteContract(
  {
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "setGlobalHook",
  },
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"setPause"`
 */
export const writeSignProtocolSetPause = /*#__PURE__*/ createWriteContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "setPause",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeSignProtocolTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const writeSignProtocolUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "upgradeToAndCall",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__
 */
export const simulateSignProtocol = /*#__PURE__*/ createSimulateContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attest"`
 */
export const simulateSignProtocolAttest = /*#__PURE__*/ createSimulateContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "attest",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attestBatch"`
 */
export const simulateSignProtocolAttestBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "attestBatch",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attestOffchain"`
 */
export const simulateSignProtocolAttestOffchain =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "attestOffchain",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"attestOffchainBatch"`
 */
export const simulateSignProtocolAttestOffchainBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "attestOffchainBatch",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateSignProtocolInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "initialize",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"register"`
 */
export const simulateSignProtocolRegister =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "register",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"registerBatch"`
 */
export const simulateSignProtocolRegisterBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "registerBatch",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateSignProtocolRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"revoke"`
 */
export const simulateSignProtocolRevoke = /*#__PURE__*/ createSimulateContract({
  abi: signProtocolAbi,
  address: signProtocolAddress,
  functionName: "revoke",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"revokeBatch"`
 */
export const simulateSignProtocolRevokeBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "revokeBatch",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"revokeOffchain"`
 */
export const simulateSignProtocolRevokeOffchain =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "revokeOffchain",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"revokeOffchainBatch"`
 */
export const simulateSignProtocolRevokeOffchainBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "revokeOffchainBatch",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"setGlobalHook"`
 */
export const simulateSignProtocolSetGlobalHook =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "setGlobalHook",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"setPause"`
 */
export const simulateSignProtocolSetPause =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "setPause",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateSignProtocolTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link signProtocolAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const simulateSignProtocolUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    functionName: "upgradeToAndCall",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__
 */
export const watchSignProtocolEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: signProtocolAbi,
  address: signProtocolAddress,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__ and `eventName` set to `"AttestationMade"`
 */
export const watchSignProtocolAttestationMadeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    eventName: "AttestationMade",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__ and `eventName` set to `"AttestationRevoked"`
 */
export const watchSignProtocolAttestationRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    eventName: "AttestationRevoked",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchSignProtocolInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    eventName: "Initialized",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__ and `eventName` set to `"OffchainAttestationMade"`
 */
export const watchSignProtocolOffchainAttestationMadeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    eventName: "OffchainAttestationMade",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__ and `eventName` set to `"OffchainAttestationRevoked"`
 */
export const watchSignProtocolOffchainAttestationRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    eventName: "OffchainAttestationRevoked",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchSignProtocolOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__ and `eventName` set to `"SchemaRegistered"`
 */
export const watchSignProtocolSchemaRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    eventName: "SchemaRegistered",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link signProtocolAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchSignProtocolUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: signProtocolAbi,
    address: signProtocolAddress,
    eventName: "Upgraded",
  });
