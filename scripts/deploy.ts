import { ethers } from "hardhat";

async function main() {
  const counter = await ethers.deployContract("Counter");
  await counter.waitForDeployment();

  console.log("Contract Deployed to Address:", await counter.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
