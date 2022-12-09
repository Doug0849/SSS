import { useAccount, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress } from "../../constants";

const usePaidMint = (amount: number) => {
  const { address } = useAccount();
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
    args: [address, utils.parseEther("1")],
    overrides: {
      value: utils.parseEther("0.1"),
    },
  });

  return {
    paidiMint: writeAsync,
    paidMintStatus,
    data,
  };
};

export default usePaidMint;
