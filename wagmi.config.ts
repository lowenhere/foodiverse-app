import { defineConfig } from "@wagmi/cli";
import { actions } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "lib/generated.ts",
  contracts: [
    {
      name: "foodiRegistrar",
      address: "0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_registry",
              type: "address",
              internalType: "contract IL2Registry",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "available",
          inputs: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "register",
          inputs: [
            { name: "label", type: "string", internalType: "string" },
            { name: "owner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "targetRegistry",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IL2Registry",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "NameRegistered",
          inputs: [
            {
              name: "label",
              type: "string",
              indexed: true,
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
      ],
    },
    {
      name: "foodiverseRegistrar",
      address: "0xCa556332723D2aB7b6a23440908e2cED85578AB6",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_registry",
              type: "address",
              internalType: "contract IL2Registry",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "available",
          inputs: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "register",
          inputs: [
            { name: "label", type: "string", internalType: "string" },
            { name: "owner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "targetRegistry",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IL2Registry",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "NameRegistered",
          inputs: [
            {
              name: "label",
              type: "string",
              indexed: true,
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
      ],
    },
    {
      name: "reverseRegistrar",
      address: "0xCF75B92126B02C9811d8c632144288a3eb84afC8",
      abi: [
        {
          inputs: [
            { internalType: "contract ENS", name: "ensAddr", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "controller",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "enabled",
              type: "bool",
            },
          ],
          name: "ControllerChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract NameResolver",
              name: "resolver",
              type: "address",
            },
          ],
          name: "DefaultResolverChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "addr",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
          ],
          name: "ReverseClaimed",
          type: "event",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "claim",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "addr", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "resolver", type: "address" },
          ],
          name: "claimForAddr",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "resolver", type: "address" },
          ],
          name: "claimWithResolver",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "controllers",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "defaultResolver",
          outputs: [
            {
              internalType: "contract NameResolver",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ens",
          outputs: [
            { internalType: "contract ENS", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "addr", type: "address" }],
          name: "node",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "controller", type: "address" },
            { internalType: "bool", name: "enabled", type: "bool" },
          ],
          name: "setController",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "resolver", type: "address" },
          ],
          name: "setDefaultResolver",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "string", name: "name", type: "string" }],
          name: "setName",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "addr", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "resolver", type: "address" },
            { internalType: "string", name: "name", type: "string" },
          ],
          name: "setNameForAddr",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    {
      name: "signProtocol",
      address: "0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD",
      abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          inputs: [
            { internalType: "address", name: "target", type: "address" },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        { inputs: [], name: "AttestationAlreadyRevoked", type: "error" },
        { inputs: [], name: "AttestationInvalidDuration", type: "error" },
        { inputs: [], name: "AttestationIrrevocable", type: "error" },
        { inputs: [], name: "AttestationNonexistent", type: "error" },
        { inputs: [], name: "AttestationWrongAttester", type: "error" },
        {
          inputs: [
            {
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "ERC1967InvalidImplementation",
          type: "error",
        },
        { inputs: [], name: "ERC1967NonPayable", type: "error" },
        { inputs: [], name: "FailedInnerCall", type: "error" },
        { inputs: [], name: "InvalidDelegateSignature", type: "error" },
        { inputs: [], name: "InvalidInitialization", type: "error" },
        { inputs: [], name: "LegacySPRequired", type: "error" },
        { inputs: [], name: "NotInitializing", type: "error" },
        {
          inputs: [],
          name: "OffchainAttestationAlreadyRevoked",
          type: "error",
        },
        { inputs: [], name: "OffchainAttestationExists", type: "error" },
        { inputs: [], name: "OffchainAttestationNonexistent", type: "error" },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        { inputs: [], name: "Paused", type: "error" },
        { inputs: [], name: "SchemaNonexistent", type: "error" },
        { inputs: [], name: "SchemaWrongRegistrant", type: "error" },
        { inputs: [], name: "UUPSUnauthorizedCallContext", type: "error" },
        {
          inputs: [{ internalType: "bytes32", name: "slot", type: "bytes32" }],
          name: "UUPSUnsupportedProxiableUUID",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint64",
              name: "attestationId",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "string",
              name: "indexingKey",
              type: "string",
            },
          ],
          name: "AttestationMade",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint64",
              name: "attestationId",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "string",
              name: "reason",
              type: "string",
            },
          ],
          name: "AttestationRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint64",
              name: "version",
              type: "uint64",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "attestationId",
              type: "string",
            },
          ],
          name: "OffchainAttestationMade",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "attestationId",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "reason",
              type: "string",
            },
          ],
          name: "OffchainAttestationRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint64",
              name: "schemaId",
              type: "uint64",
            },
          ],
          name: "SchemaRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_INTERFACE_VERSION",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation",
              name: "attestation",
              type: "tuple",
            },
            {
              internalType: "contract IERC20",
              name: "resolverFeesERC20Token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "resolverFeesERC20Amount",
              type: "uint256",
            },
            { internalType: "string", name: "indexingKey", type: "string" },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "attest",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation",
              name: "attestation",
              type: "tuple",
            },
            { internalType: "string", name: "indexingKey", type: "string" },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "attest",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation",
              name: "attestation",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "resolverFeesETH",
              type: "uint256",
            },
            { internalType: "string", name: "indexingKey", type: "string" },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "attest",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation[]",
              name: "attestations",
              type: "tuple[]",
            },
            {
              internalType: "uint256[]",
              name: "resolverFeesETH",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "indexingKeys",
              type: "string[]",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "attestBatch",
          outputs: [
            {
              internalType: "uint64[]",
              name: "attestationIds",
              type: "uint64[]",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation[]",
              name: "attestations",
              type: "tuple[]",
            },
            {
              internalType: "contract IERC20[]",
              name: "resolverFeesERC20Tokens",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "resolverFeesERC20Amount",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "indexingKeys",
              type: "string[]",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "attestBatch",
          outputs: [
            {
              internalType: "uint64[]",
              name: "attestationIds",
              type: "uint64[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation[]",
              name: "attestations",
              type: "tuple[]",
            },
            {
              internalType: "string[]",
              name: "indexingKeys",
              type: "string[]",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "attestBatch",
          outputs: [
            {
              internalType: "uint64[]",
              name: "attestationIds",
              type: "uint64[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "offchainAttestationId",
              type: "string",
            },
            {
              internalType: "address",
              name: "delegateAttester",
              type: "address",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
          ],
          name: "attestOffchain",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string[]",
              name: "attestationIds",
              type: "string[]",
            },
            {
              internalType: "address",
              name: "delegateAttester",
              type: "address",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
          ],
          name: "attestOffchainBatch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "attestationCounter",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint64", name: "attestationId", type: "uint64" },
          ],
          name: "getAttestation",
          outputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation[]",
              name: "attestations",
              type: "tuple[]",
            },
          ],
          name: "getDelegatedAttestBatchHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint64", name: "schemaId", type: "uint64" },
                {
                  internalType: "uint64",
                  name: "linkedAttestationId",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "attestTimestamp",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "revokeTimestamp",
                  type: "uint64",
                },
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "validUntil", type: "uint64" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "bool", name: "revoked", type: "bool" },
                {
                  internalType: "bytes[]",
                  name: "recipients",
                  type: "bytes[]",
                },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Attestation",
              name: "attestation",
              type: "tuple",
            },
          ],
          name: "getDelegatedAttestHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string[]",
              name: "offchainAttestationIds",
              type: "string[]",
            },
          ],
          name: "getDelegatedOffchainAttestBatchHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "offchainAttestationId",
              type: "string",
            },
          ],
          name: "getDelegatedOffchainAttestHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string[]",
              name: "offchainAttestationIds",
              type: "string[]",
            },
            { internalType: "string[]", name: "reasons", type: "string[]" },
          ],
          name: "getDelegatedOffchainRevokeBatchHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "offchainAttestationId",
              type: "string",
            },
            { internalType: "string", name: "reason", type: "string" },
          ],
          name: "getDelegatedOffchainRevokeHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "registrant",
                  type: "address",
                },
                { internalType: "bool", name: "revocable", type: "bool" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "uint64", name: "maxValidFor", type: "uint64" },
                {
                  internalType: "contract ISPHook",
                  name: "hook",
                  type: "address",
                },
                { internalType: "uint64", name: "timestamp", type: "uint64" },
                { internalType: "string", name: "data", type: "string" },
              ],
              internalType: "struct Schema[]",
              name: "schemas",
              type: "tuple[]",
            },
          ],
          name: "getDelegatedRegisterBatchHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "registrant",
                  type: "address",
                },
                { internalType: "bool", name: "revocable", type: "bool" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "uint64", name: "maxValidFor", type: "uint64" },
                {
                  internalType: "contract ISPHook",
                  name: "hook",
                  type: "address",
                },
                { internalType: "uint64", name: "timestamp", type: "uint64" },
                { internalType: "string", name: "data", type: "string" },
              ],
              internalType: "struct Schema",
              name: "schema",
              type: "tuple",
            },
          ],
          name: "getDelegatedRegisterHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint64[]",
              name: "attestationIds",
              type: "uint64[]",
            },
            { internalType: "string[]", name: "reasons", type: "string[]" },
          ],
          name: "getDelegatedRevokeBatchHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint64", name: "attestationId", type: "uint64" },
            { internalType: "string", name: "reason", type: "string" },
          ],
          name: "getDelegatedRevokeHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "offchainAttestationId",
              type: "string",
            },
          ],
          name: "getOffchainAttestation",
          outputs: [
            {
              components: [
                { internalType: "address", name: "attester", type: "address" },
                { internalType: "uint64", name: "timestamp", type: "uint64" },
              ],
              internalType: "struct OffchainAttestation",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint64", name: "schemaId", type: "uint64" },
          ],
          name: "getSchema",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "registrant",
                  type: "address",
                },
                { internalType: "bool", name: "revocable", type: "bool" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "uint64", name: "maxValidFor", type: "uint64" },
                {
                  internalType: "contract ISPHook",
                  name: "hook",
                  type: "address",
                },
                { internalType: "uint64", name: "timestamp", type: "uint64" },
                { internalType: "string", name: "data", type: "string" },
              ],
              internalType: "struct Schema",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint64", name: "schemaCounter_", type: "uint64" },
            {
              internalType: "uint64",
              name: "attestationCounter_",
              type: "uint64",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "registrant",
                  type: "address",
                },
                { internalType: "bool", name: "revocable", type: "bool" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "uint64", name: "maxValidFor", type: "uint64" },
                {
                  internalType: "contract ISPHook",
                  name: "hook",
                  type: "address",
                },
                { internalType: "uint64", name: "timestamp", type: "uint64" },
                { internalType: "string", name: "data", type: "string" },
              ],
              internalType: "struct Schema",
              name: "schema",
              type: "tuple",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
          ],
          name: "register",
          outputs: [
            { internalType: "uint64", name: "schemaId", type: "uint64" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "registrant",
                  type: "address",
                },
                { internalType: "bool", name: "revocable", type: "bool" },
                {
                  internalType: "enum DataLocation",
                  name: "dataLocation",
                  type: "uint8",
                },
                { internalType: "uint64", name: "maxValidFor", type: "uint64" },
                {
                  internalType: "contract ISPHook",
                  name: "hook",
                  type: "address",
                },
                { internalType: "uint64", name: "timestamp", type: "uint64" },
                { internalType: "string", name: "data", type: "string" },
              ],
              internalType: "struct Schema[]",
              name: "schemas",
              type: "tuple[]",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
          ],
          name: "registerBatch",
          outputs: [
            { internalType: "uint64[]", name: "schemaIds", type: "uint64[]" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint64", name: "attestationId", type: "uint64" },
            { internalType: "string", name: "reason", type: "string" },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint64", name: "attestationId", type: "uint64" },
            { internalType: "string", name: "reason", type: "string" },
            {
              internalType: "contract IERC20",
              name: "resolverFeesERC20Token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "resolverFeesERC20Amount",
              type: "uint256",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint64", name: "attestationId", type: "uint64" },
            { internalType: "string", name: "reason", type: "string" },
            {
              internalType: "uint256",
              name: "resolverFeesETH",
              type: "uint256",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint64[]",
              name: "attestationIds",
              type: "uint64[]",
            },
            { internalType: "string[]", name: "reasons", type: "string[]" },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "revokeBatch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint64[]",
              name: "attestationIds",
              type: "uint64[]",
            },
            { internalType: "string[]", name: "reasons", type: "string[]" },
            {
              internalType: "uint256[]",
              name: "resolverFeesETH",
              type: "uint256[]",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "revokeBatch",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint64[]",
              name: "attestationIds",
              type: "uint64[]",
            },
            { internalType: "string[]", name: "reasons", type: "string[]" },
            {
              internalType: "contract IERC20[]",
              name: "resolverFeesERC20Tokens",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "resolverFeesERC20Amount",
              type: "uint256[]",
            },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
            { internalType: "bytes", name: "extraData", type: "bytes" },
          ],
          name: "revokeBatch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "offchainAttestationId",
              type: "string",
            },
            { internalType: "string", name: "reason", type: "string" },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
          ],
          name: "revokeOffchain",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string[]",
              name: "offchainAttestationIds",
              type: "string[]",
            },
            { internalType: "string[]", name: "reasons", type: "string[]" },
            { internalType: "bytes", name: "delegateSignature", type: "bytes" },
          ],
          name: "revokeOffchainBatch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "schemaCounter",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "hook", type: "address" }],
          name: "setGlobalHook",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "paused", type: "bool" }],
          name: "setPause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "version",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
      ],
    },
    {
      name: "USDC",
      abi: [
        { type: "constructor", inputs: [], stateMutability: "nonpayable" },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "spender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ERC20InsufficientAllowance",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "allowance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InsufficientBalance",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
            { name: "balance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidApprover",
          inputs: [
            { name: "approver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidReceiver",
          inputs: [
            { name: "receiver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSender",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSpender",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
        },
      ],
      address: {
        534351: "0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915",
        84532: "0xfD4aC8071991423e79971BEC2fcfEb78d28B3789",
        80002: "0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d",
        48899: "0x5da0c2ed4EcC08915B2490Fc9d9cF8B861e9a7b9",
        2810: "0x483EC90D0DCf0C808c9ddfcCc3011DE80f1e5915",
      },
    },
    {
      name: "Foodiverse Points",
      abi: [
        { type: "constructor", inputs: [], stateMutability: "nonpayable" },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "spender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ERC20InsufficientAllowance",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "allowance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InsufficientBalance",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
            { name: "balance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidApprover",
          inputs: [
            { name: "approver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidReceiver",
          inputs: [
            { name: "receiver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSender",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSpender",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
        },
      ],
      address: {
        534351: "0x814200754D0C6672ca20fC74c066A2b9AD47018d",
        84532: "0xBFa7034670eA7d69E369569eC8216a1EEae74bCa",
        80002: "0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d",
        48899: "0xD1eA89F676763b6238951adc2D5521D0e0Cddb4d",
        2810: "0xf2Fb39bBfA77D9beF88b319360BF963Ea208a0f2",
      },
    },
    {
      name: "PaymentGateway",
      abi: [
        { type: "constructor", inputs: [], stateMutability: "nonpayable" },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "spender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ERC20InsufficientAllowance",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "allowance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InsufficientBalance",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
            { name: "balance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidApprover",
          inputs: [
            { name: "approver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidReceiver",
          inputs: [
            { name: "receiver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSender",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSpender",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
        },
      ],
      address: {
        534351: "0x814200754D0C6672ca20fC74c066A2b9AD47018d",
        84532: "0x06b2C86164f7398355fFB382BC812b299bBd9477",
        80002: "0x814200754D0C6672ca20fC74c066A2b9AD47018d",
        48899: "0x814200754D0C6672ca20fC74c066A2b9AD47018d",
        2810: "0x805CFDCc0638C2B1aB2B2A3fDC057207BB3222f5",
      },
    },
  ],
  plugins: [actions()],
});
