import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x1DF893Ea130c82bBad2B358F8c2B5c2481997c86");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "FreeKnowledgeDAO Governance Token",
      symbol: "FREEMIND",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();