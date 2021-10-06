import Web3 from "web3";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import Torus from "@toruslabs/torus-embed";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {useState} from "react";

export default function Web3WalletModal() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);
    return {
    get web3Loading() {
    return loading
    },
    async getweb3() {
    setLoading(true);
    let web3Modal;
    let provider;
    let web3;
    let providerOptions;
    providerOptions = {
    metamask: {
    id: "injected",
    name: "MetaMask",
    type: "injected",
    check: "isMetaMask"
    },
    walletconnect: {
    package: WalletConnectProvider, // required
    options: {
    infuraId: "INFURA_ID", // Required
    network: "rinkeby",
    qrcodeModalOptions: {
    mobileLinks: [
    "rainbow",
    "metamask",
    "argent",
    "trust",
    "imtoken",
    "pillar"
    ]
    }
    }
    },
    // Authereum Wallet connection (if required)

    // authereum: {
    // package: Authereum // required
    // },

    // Torus Wallet connection (needs to be setup)

    // torus: {
    //     package: Torus, // required
    //     options: {
    //       networkParams: {
    //         // host: "https://localhost:8545", // optional
    //         // chainId: 1337, // optional
    //         // networkId: 1337 // optional
    //       },
    //       config: {
    //         buildEnv: "development" // optional
    //       }
    //     }
    //   }
    };
    web3Modal = new Web3Modal({
    network: "rinkeby",
    cacheProvider: true,
    providerOptions
    });
    provider = await web3Modal.connect();
    provider.on('error', e => console.error('WS Error', e));
    provider.on('end', e => console.error('WS End', e));
    
    provider.on("disconnect", (error: { code: number; message: string }) => {
    console.log(error);
    });
    provider.on("connect", (info: { chainId: number }) => {
    console.log(info);
    });
    web3 = new Web3(provider);
    setLoading(false);
    return web3;
    },
    }
    }