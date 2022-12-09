import { useAccount, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress } from "../../constants";
import ethers from "ethers"

const usePaidMint = (amount: number) => {
  const { address } = useAccount();
  const paidETH = amount * 0.1
  const {
    writeAsync,
    status: paidMintStatus,
    data,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: tokenAddress,
    abi: tokenContractAbi,
    functionName: "paidMint",
    chainId: 5,
    args: [address, amount],
    overrides: {
      value: utils.parseEther(paidETH.toString()),
    },
  });

  return {
    paidiMint: writeAsync,
    paidMintStatus,
    data,
  };
};

export default usePaidMint;
