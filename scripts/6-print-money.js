import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x3a70b9d669Fba0fd7631c533be99bDa08D50e8e6",
);

(async () => {
  try {
    const amount = 100_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();
    
    console.log(
      "✅ Awesome, There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$FREEMIND in circulation!",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();