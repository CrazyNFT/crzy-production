import { MouseEvent, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { profile } from '../../services/profile'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnRoot: {
      padding: "6px 12px",
      background:
        "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
    },
  })
);

const providerOptions = {
  // Example with injected providers
  injected: {
    display: {
      logo: "",
      name: "Injected",
      description: "Connect with the provider in your Browser",
    },
    package: null,
  },
  // Example with WalletConnect provider
  walletconnect: {
    display: {
      logo: "data:image/gif;base64,INSERT_BASE64_STRING",
      name: "Mobile",
      description: "Scan qrcode with your mobile wallet",
    },
    package: WalletConnectProvider,
    options: {
      infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // required
    },
  },
};

const web3Modal = new Web3Modal({
  network: "rinkeby", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

export default function WalletModal() {
  const classes = useStyles();

  const [userVerified, setUserVerified] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const showWeb3Modal = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const provider = await web3Modal.connect();
      const WebThree = new Web3(provider);
      const accounts = await WebThree.eth.getAccounts();

      if (accounts[0]) {
        setWalletConnected(true)
        let data = await profile.init(accounts[0])
        if (data.email && data.emailVerified) {
          setUserVerified(true)
          console.log('User Data ', data)
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyUser = async () => {
    try{
      let res = await profile.gmail_login()
      if(res) setUserVerified(true)
    } catch(err){
      alert('Profile Verification Error! '+err)
    }
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.btnRoot}
        onClick={showWeb3Modal}
        size="small"
      >
        {walletConnected ? `WALLET CONNECTED ${userVerified ? '( VERIFIED )' : ''}` : 'CONNECT TO WALLET'}
      </Button>
      {
        walletConnected && !userVerified?(
          <Button
          variant="contained"
          color="primary"
          className={classes.btnRoot}
          onClick={verifyUser}
          size="small"
        >
          VERIFY
        </Button>
        ): null
      }
    </>
  );
}
