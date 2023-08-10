import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ALCHEMY_TESTNET_RPC_URL, TESTNET_PRIVATE_KEY } from "./config";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    sepolia: {
      url: ALCHEMY_TESTNET_RPC_URL,
      accounts: [TESTNET_PRIVATE_KEY],
    },
  },
};

export default config;
