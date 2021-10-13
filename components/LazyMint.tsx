import { contract_address, chain_id, rpc_url, contract_abi } from "config";
const buffer = require('buffer');
import { create } from 'ipfs-http-client'
import Web3 from "web3";                                                                             import { ethers } from "ethers";
const web3 = new Web3(rpc_url);  
                                                                            const provider = new ethers.providers.JsonRpcProvider(rpc_url);
const client = create('https://ipfs.infura.io:5001/api/v0') 


export async function getVoucher(tokenId, uri, minPrice = 0, signer) {
    const chainId = chain_id;
    const domain = {
      name: "LazyNFT-Voucher",
      version: "1",
      verifyingContract: contract_address,
      chainId,
    }

    var test = "Test";


    const voucher = { tokenId, uri, minPrice }

    const types = {
      NFTVoucher: [
        { name: "tokenId", type: "uint256" },
        { name: "minPrice", type: "uint256" },
        { name: "uri", type: "string" },
      ]
    }
    const signature = await signer._signTypedData(domain, types, voucher)

    return {
      ...voucher,
      signature,
    }

  }


export async function uploadIPFS(file){
  const added = await client.add(file);
  const url  = `https://ipfs.infura.io/ipfs/${added.path}`;
  return url;
  
        }

export async function redeemNFT(voucher, price){
  console.log(window.ethereum.selectedAddress);


    const contract = new web3.eth.Contract(contract_abi, contract_address);
    
    const amount = "13"; 
  //const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
  web3.eth.sendTransaction({ 
    from: window.ethereum.selectedAddress,
    to: contract.options.address, 
    value: price,
    data: contract.methods.redeem(window.ethereum.selectedAddress, voucher).encodeABI(),
  }).then( function(tx) { 
  console.log("Transaction: ", tx); 
  });
  
}
            


