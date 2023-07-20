import type { Config } from "@ponder/core";

export const config: Config = {
  networks: [
    { name: "optimism", chainId: 10, rpcUrl: process.env.PONDER_RPC_URL_10 },
  ],
  contracts: [
    {
      name: "Proxy",
      network: "optimism",
      abi: [
        "./abis/Proxy.json",
        "./abis/Optimist_0xf4bf.json",
        "./abis/Optimist_0x7c3b.json",
      ],
      address: "0x2335022c740d17c2837f9C884Bfe4fFdbf0A95D5",
      startBlock: 49670714,
    },
  ],
};
