import { contract_address, contract_abi } from "config";
import { ImportCandidate } from "ipfs-core-types/src/utils";
import { create } from "ipfs-http-client";
import Web3 from "web3";
// Context
import { useCurrency } from "@/context/currencyContext";

// @ts-expect-error
const client = create("https://ipfs.infura.io:5001/api/v0");

export async function getVoucher(
  tokenId: any,
  uri: string,
  minPrice: any,
  signer: any,
  chainID?: BigInteger,
) {
  const domain = {
    name: "CrazyNFT-Voucher",
    version: "0.01",
    verifyingContract: contract_address,
    // chainId: chainID,
  };

  const voucher = { tokenId, uri, minPrice };

  const types = {
    NFTVoucher: [
      { name: "tokenId", type: "uint256" },
      { name: "minPrice", type: "uint256" },
      { name: "uri", type: "string" },
    ],
  };
  const signature = await signer._signTypedData(domain, types, voucher);

  return {
    ...voucher,
    signature,
  };
}

export async function uploadIPFS(file: ImportCandidate) {
  const added = await client.add(file);
  const url = `https://ipfs.infura.io/ipfs/${added.path}`;
  return url;
}

export async function availableToWithdraw(currency) {
  const web3 = new Web3(currency.rpc_url);
  const contract = new web3.eth.Contract(
    // @ts-expect-error
    contract_abi,
    currency.contract_address
  );
  let balance = await contract.methods
    .availableToWithdraw()
    .call({ from: window.ethereum.selectedAddress });
  console.log(balance);
}

// export async function withdrawTokens() {
//   const { currency } = useCurrency();
//   const web3 = new Web3(currency.rpc_url);
//   const contract = new web3.eth.Contract(
//     // @ts-expect-error
//     contract_abi,
//     currency.contract_address
//   );
//   contract.methods.withdraw();
//   const params = {
//     from: window.ethereum.selectedAddress,
//     to: contract.options.address,
//     chainId: currency.chain_id,
//   };
//   // contract.methods.withdraw();
// }

export async function redeemNFT(voucher, currency) {
  console.log("Reached into function");
  console.log(currency.contract_address);
  // const { currency } = useCurrency();
  const web3 = new Web3(currency.rpc_url);
  const contract = new web3.eth.Contract(
    // @ts-expect-error
    contract_abi,
    currency.contract_address
  );
  console.log("Created new Web3 instance");
  const amount = voucher["minPrice"];
  const amountToSend = web3.utils.toWei(amount.toString(), "ether"); // Convert to wei value
  const params = {
    from: window.ethereum.selectedAddress,
    to: contract.options.address,
    value: amountToSend,
    data: contract.methods
      .redeem(window.ethereum.selectedAddress, voucher)
      .encodeABI(),
    // chainId: currency.chain_id,
    // gas: "2100000000",
  };
  let gasAmount = await web3.eth.estimateGas(params);
  console.log("Gas Predicted");
  const res = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [params,{gas:gasAmount}],
  });
  console.log("Done");
  console.log(res);
}
