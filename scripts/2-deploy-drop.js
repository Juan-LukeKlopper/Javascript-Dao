import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x1DF893Ea130c82bBad2B358F8c2B5c2481997c86");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "FreeKnowledgeDAO Membership",
      description: "A DAO for people who think knowledge should be available for free.",
      image: readFileSync("scripts/assets/FreeKnowledge.jpg"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()