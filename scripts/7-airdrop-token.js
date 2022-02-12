import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule(
  "0x75F9FCcb8A035B56b48Ac916aFdE5b1D3E74AA73",
);

const tokenModule = sdk.getTokenModule(
  "0x3a70b9d669Fba0fd7631c533be99bDa08D50e8e6",
);

(async () => {
  try {
    const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");
  
    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
      );
      process.exit(0);
    }
    
    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(Math.random() * (100000 - 100000 + 1) + 100000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);
      
      const airdropTarget = {
        address,
        amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
      };
  
      return airdropTarget;
    });
    
    console.log("🌈 Starting airdrop...")
    await tokenModule.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();