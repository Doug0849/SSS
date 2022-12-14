import { useAccount, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useFreeMint = (mintCount: number) => {
  const { address } = useAccount();
  const { writeAsync, status: freeMintStatus, data } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: tokenAddress,
    abi: tokenContractAbi,
    functionName: "freeMint",
    chainId: 5,
    args: [address, utils.parseEther(mintCount.toString())],
  });

  return {
    freeMint: writeAsync,
    freeMintStatus,
    data,
  };
};

export default useFreeMint;
