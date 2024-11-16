import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// foodiRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const foodiRegistrarAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_registry',
        internalType: 'contract IL2Registry',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'available',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'label', internalType: 'string', type: 'string' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetRegistry',
    outputs: [
      { name: '', internalType: 'contract IL2Registry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'label', internalType: 'string', type: 'string', indexed: true },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NameRegistered',
  },
] as const

export const foodiRegistrarAddress =
  '0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d' as const

export const foodiRegistrarConfig = {
  address: foodiRegistrarAddress,
  abi: foodiRegistrarAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// foodiverseRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const foodiverseRegistrarAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_registry',
        internalType: 'contract IL2Registry',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'available',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'label', internalType: 'string', type: 'string' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetRegistry',
    outputs: [
      { name: '', internalType: 'contract IL2Registry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'label', internalType: 'string', type: 'string', indexed: true },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NameRegistered',
  },
] as const

export const foodiverseRegistrarAddress =
  '0xCa556332723D2aB7b6a23440908e2cED85578AB6' as const

export const foodiverseRegistrarConfig = {
  address: foodiverseRegistrarAddress,
  abi: foodiverseRegistrarAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// reverseRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reverseRegistrarAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'ensAddr', internalType: 'contract ENS', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'controller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ControllerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'contract NameResolver',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DefaultResolverChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address', indexed: true },
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'ReverseClaimed',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'claim',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
    ],
    name: 'claimForAddr',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
    ],
    name: 'claimWithResolver',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'controllers',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultResolver',
    outputs: [
      { name: '', internalType: 'contract NameResolver', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ens',
    outputs: [{ name: '', internalType: 'contract ENS', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'node',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'controller', internalType: 'address', type: 'address' },
      { name: 'enabled', internalType: 'bool', type: 'bool' },
    ],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'resolver', internalType: 'address', type: 'address' }],
    name: 'setDefaultResolver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'setName',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' },
    ],
    name: 'setNameForAddr',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const reverseRegistrarAddress =
  '0xCF75B92126B02C9811d8c632144288a3eb84afC8' as const

export const reverseRegistrarConfig = {
  address: reverseRegistrarAddress,
  abi: reverseRegistrarAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiRegistrarAbi}__
 */
export const readFoodiRegistrar = /*#__PURE__*/ createReadContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `functionName` set to `"available"`
 */
export const readFoodiRegistrarAvailable = /*#__PURE__*/ createReadContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
  functionName: 'available',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `functionName` set to `"targetRegistry"`
 */
export const readFoodiRegistrarTargetRegistry =
  /*#__PURE__*/ createReadContract({
    abi: foodiRegistrarAbi,
    address: foodiRegistrarAddress,
    functionName: 'targetRegistry',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiRegistrarAbi}__
 */
export const writeFoodiRegistrar = /*#__PURE__*/ createWriteContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const writeFoodiRegistrarRegister = /*#__PURE__*/ createWriteContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
  functionName: 'register',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiRegistrarAbi}__
 */
export const simulateFoodiRegistrar = /*#__PURE__*/ createSimulateContract({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const simulateFoodiRegistrarRegister =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiRegistrarAbi,
    address: foodiRegistrarAddress,
    functionName: 'register',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiRegistrarAbi}__
 */
export const watchFoodiRegistrarEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: foodiRegistrarAbi,
  address: foodiRegistrarAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiRegistrarAbi}__ and `eventName` set to `"NameRegistered"`
 */
export const watchFoodiRegistrarNameRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiRegistrarAbi,
    address: foodiRegistrarAddress,
    eventName: 'NameRegistered',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__
 */
export const readFoodiverseRegistrar = /*#__PURE__*/ createReadContract({
  abi: foodiverseRegistrarAbi,
  address: foodiverseRegistrarAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `functionName` set to `"available"`
 */
export const readFoodiverseRegistrarAvailable =
  /*#__PURE__*/ createReadContract({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    functionName: 'available',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `functionName` set to `"targetRegistry"`
 */
export const readFoodiverseRegistrarTargetRegistry =
  /*#__PURE__*/ createReadContract({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    functionName: 'targetRegistry',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__
 */
export const writeFoodiverseRegistrar = /*#__PURE__*/ createWriteContract({
  abi: foodiverseRegistrarAbi,
  address: foodiverseRegistrarAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const writeFoodiverseRegistrarRegister =
  /*#__PURE__*/ createWriteContract({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    functionName: 'register',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__
 */
export const simulateFoodiverseRegistrar = /*#__PURE__*/ createSimulateContract(
  { abi: foodiverseRegistrarAbi, address: foodiverseRegistrarAddress },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const simulateFoodiverseRegistrarRegister =
  /*#__PURE__*/ createSimulateContract({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    functionName: 'register',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiverseRegistrarAbi}__
 */
export const watchFoodiverseRegistrarEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link foodiverseRegistrarAbi}__ and `eventName` set to `"NameRegistered"`
 */
export const watchFoodiverseRegistrarNameRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: foodiverseRegistrarAbi,
    address: foodiverseRegistrarAddress,
    eventName: 'NameRegistered',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const readReverseRegistrar = /*#__PURE__*/ createReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"controllers"`
 */
export const readReverseRegistrarControllers = /*#__PURE__*/ createReadContract(
  {
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'controllers',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"defaultResolver"`
 */
export const readReverseRegistrarDefaultResolver =
  /*#__PURE__*/ createReadContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'defaultResolver',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"ens"`
 */
export const readReverseRegistrarEns = /*#__PURE__*/ createReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: 'ens',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"node"`
 */
export const readReverseRegistrarNode = /*#__PURE__*/ createReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: 'node',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"owner"`
 */
export const readReverseRegistrarOwner = /*#__PURE__*/ createReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const writeReverseRegistrar = /*#__PURE__*/ createWriteContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claim"`
 */
export const writeReverseRegistrarClaim = /*#__PURE__*/ createWriteContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: 'claim',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimForAddr"`
 */
export const writeReverseRegistrarClaimForAddr =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claimForAddr',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimWithResolver"`
 */
export const writeReverseRegistrarClaimWithResolver =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claimWithResolver',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeReverseRegistrarRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setController"`
 */
export const writeReverseRegistrarSetController =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setController',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setDefaultResolver"`
 */
export const writeReverseRegistrarSetDefaultResolver =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setDefaultResolver',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setName"`
 */
export const writeReverseRegistrarSetName = /*#__PURE__*/ createWriteContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: 'setName',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setNameForAddr"`
 */
export const writeReverseRegistrarSetNameForAddr =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setNameForAddr',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeReverseRegistrarTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const simulateReverseRegistrar = /*#__PURE__*/ createSimulateContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claim"`
 */
export const simulateReverseRegistrarClaim =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claim',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimForAddr"`
 */
export const simulateReverseRegistrarClaimForAddr =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claimForAddr',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimWithResolver"`
 */
export const simulateReverseRegistrarClaimWithResolver =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claimWithResolver',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateReverseRegistrarRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setController"`
 */
export const simulateReverseRegistrarSetController =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setController',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setDefaultResolver"`
 */
export const simulateReverseRegistrarSetDefaultResolver =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setDefaultResolver',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setName"`
 */
export const simulateReverseRegistrarSetName =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setName',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setNameForAddr"`
 */
export const simulateReverseRegistrarSetNameForAddr =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setNameForAddr',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateReverseRegistrarTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const watchReverseRegistrarEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"ControllerChanged"`
 */
export const watchReverseRegistrarControllerChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'ControllerChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"DefaultResolverChanged"`
 */
export const watchReverseRegistrarDefaultResolverChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'DefaultResolverChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchReverseRegistrarOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"ReverseClaimed"`
 */
export const watchReverseRegistrarReverseClaimedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'ReverseClaimed',
  })
