import { contract_address, chain_id, rpc_url, contract_abi } from "config";
import { ImportCandidate } from "ipfs-core-types/src/utils";
import { create } from "ipfs-http-client";
import Web3 from "web3";
const web3 = new Web3(rpc_url);

// @ts-expect-error
const client = create("https://ipfs.infura.io:5001/api/v0");

export async function getVoucher(
  tokenId: any,
  uri: string,
  minPrice = 0,
  signer: any
) {
  const chainId = chain_id;
  const domain = {
    name: "LazyNFT-Voucher",
    version: "0.01",
    verifyingContract: contract_address,
    chainId,
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

export async function redeemNFT(voucher) {
  // @ts-expect-error
  const contract = new web3.eth.Contract(contract_abi, contract_address);

  const amount = voucher["minPrice"];
  const amountToSend = web3.utils.toWei(amount.toString(), "ether"); // Convert to wei value
  const params = {
    from: window.ethereum.selectedAddress,
    to: contract.options.address,
    value: amountToSend,
    data: contract.methods
      .redeem(window.ethereum.selectedAddress, voucher)
      .encodeABI(),
    chainId: chain_id,
    gas: "2100000000",
  };
  const res = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [params],
  });
  console.log(res);
}
