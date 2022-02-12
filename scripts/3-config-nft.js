import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x75F9FCcb8A035B56b48Ac916aFdE5b1D3E74AA73",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Graduate cap token",
        description: "This NFT will give you access to FreeKnowledgeDAO!",
        image: readFileSync("scripts/assets/FreeKnowledgeMemberToken.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()