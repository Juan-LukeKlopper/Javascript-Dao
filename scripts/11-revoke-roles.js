import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x3a70b9d669Fba0fd7631c533be99bDa08D50e8e6",
);

(async () => {
  try {
    console.log(
      "👀 Roles that exist right now:",
      await tokenModule.getAllRoleMembers()
    );
    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "🎉 Roles after revoking ourselves",
      await tokenModule.getAllRoleMembers()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();