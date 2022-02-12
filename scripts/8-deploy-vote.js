import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x1DF893Ea130c82bBad2B358F8c2B5c2481997c86");

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "FreeKnowledgeDAO's Epic Improvement Proposals",
      votingTokenAddress: "0x3a70b9d669Fba0fd7631c533be99bDa08D50e8e6",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "150",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();