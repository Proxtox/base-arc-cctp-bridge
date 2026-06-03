const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const CCTPBridgeExample = await hre.ethers.getContractFactory("CCTPBridgeExample");
  const bridge = await CCTPBridgeExample.deploy("0xYourCCTPAddressHere"); // Replace with real CCTP address on Base

  await bridge.deployed();
  console.log("CCTPBridgeExample deployed to:", bridge.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});