import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
  alpha,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Container from "@material-ui/core/Container";

import LinearProgress from '@material-ui/core/LinearProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Input } from '@material-ui/core';
import { getVoucher, redeemNFT, uploadIPFS } from "@/components/LazyMint";


const fetch = require("node-fetch");
const ethers = require('ethers');
const buffer = require('buffer');
const web3 = require('web3');



// IMPORTING SAMPLE NFT CARDS DATA
import { nftData } from "@/components/tempdata/samplenfts.jsx";
import { Button, FormControlLabel, Paper, TextField } from "@material-ui/core";
import { type } from "os";
import Web3 from "web3";
import Web3Modal, { getProviderDescription } from "web3modal";

import NFT from '../services/models/nft'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createitembtn: {
      // background: "rgb(0,192,182)",
      marginTop: 40,
      marginLeft: 5,
      background:
        "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
      padding: 8,
      flexGrow: 1,
    },
    spaceBetween: {
      justifyContent: "space-between",
    },
    justifyCenter: {
      justifyContent: "center",
    },
    select: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      padding: theme.spacing(0, 1, 0, 2),
      borderRadius: "8px",
    },
    selectlabel: {
      fontWeight: 500,
      marginBottom: 2,
      color: theme.palette.primary.main,
    },
    connectWalletButton: {
      border: "0px",
      background:
        "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
      padding: 18,
      flexGrow: 1,
    },
    progressDiv: {
      display: "flex",
      flexDirection: "row",
      flexGrow: 1,
      flexWrap: "nowrap",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    formHeaders: {
      fontWeight: 800,
      fontColor: "#004F4F !important",
      marginTop: 30,
      marginBottom: 20,
      fontSize: "20px",
    },
    formMainHeader: {
      fontWeight: 800,
      fontColor: "#004F4F !important",
      marginTop: 30,
      marginBottom: 20,
      fontSize: 50,
    },
    formParas: {
      fontWeight: 700,
      fontSize: "15px",
      marginBottom: 30,
    },
  })
);
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: "100px",
    boxShadow: "inset 0px 4px 12px 4px rgba(0, 0, 0, 0.25)",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? "#006F6F" : 700],
  },
  bar: {
    borderRadius: "100px",
    backgroundColor: "#00C4BA",
    // margin:4,
  },
}))(LinearProgress);



export default function MarketPlace(props: any) {
  const classes = useStyles();

  const [selectedType, setSelectedType] = React.useState("single");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [externalLink, setExternalLink] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [royalty, setRoyalty] = React.useState(0);

  const [selectedFile, setSelectedFile] = React.useState();
  const [isFilePicked, setIsFilePicked] = React.useState(false);

  const IncrementRoyalty = (e) => {
    if (royalty <= 90) {
      setRoyalty(royalty + 10);
    }
  };
  const DecrementRoyalty = (e) => {
    if (royalty >= 10) {
      setRoyalty(royalty - 10);
    }
  };
  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);

    
  }

  

  const handleSubmission = async () => {
    // STATE VARIABLES TO ACCESS FORM DATA
    // {
    // type,
    // title,
    // description,
    // externalLink,
    // price,
    // royalty,
    // selectedFile,
    // }

    
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    const url = await uploadIPFS(selectedFile);

    let signer = provider.getSigner();
    

    getVoucher(1, url, parseInt(price), signer).then(async function(result){
      const data = {
        'title':title,
        'description':description,
        'url':url,
        'price': price,
        'royalty': royalty,
        'voucher': result,
        }
        let currentDate = new Date()
        data['createdOn'] = currentDate.toString()
        console.log(data);

        try{
          let nft = new NFT()
          let res = await nft.createNFT(data)
          if(res){
            console.log('NFT Data ', res)
            alert('NFT Created!!')
          }
        } catch(err){
          alert('Error! '+err)
        }

      // redeemNFT(result, data.price);
    })

  }



  return (
    <Container>
      <Container>
        <Typography className={classes.formMainHeader}>
          Create a new item
        </Typography>
        <Typography className={classes.formParas}>
          Choose “Single” if you want your collectible to be one of a kind or
          “Multiple” if you want to sell one collectible multiple times
        </Typography>

        <div>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="bottom"
              control={
                <Radio
                  checked={selectedType === "single"}
                  onChange={(e) => setSelectedType(e.target.value)}
                  value="single"
                  name="radio-button-demo"
                />
              }
              label="single"
              labelPlacement="bottom"
            />

            <FormControlLabel
              value="bottom"
              control={
                <Radio
                  checked={selectedType === "multiple"}
                  onChange={(e) => setSelectedType(e.target.value)}
                  value="multiple"
                  name="radio-button-demo"
                />
              }
              label="multiple"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </div>
        <Typography className={classes.formHeaders}>Upload file</Typography>
        <Typography className={classes.formParas}>
          Upload a JPEG, PNG, GIF, WEBP, MP4 or MP3. Max 50mb.
        </Typography>
        <Paper>
          <Input type="file" name="file" onChange={handleFileUpload}></Input>
        </Paper>
        <Typography className={classes.formHeaders}>Title</Typography>
        <TextField
          id="outlined-basic"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          label="Enter title"
          variant="outlined"
        />

        <Typography className={classes.formHeaders}>Description</Typography>
        <TextField
          id="outlined-basic"
          multiline
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
          label="Enter a description of minimum 50 words of your item."
          variant="outlined"
        />
        <Typography className={classes.formHeaders}>External link</Typography>

        <Typography className={classes.formParas}>
          {`CrazyNFT will include a link to this URL on this item's detail page,
          so that users can click to learn more about it. You are welcome to
          link to your own webpage with more details.`}
        </Typography>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Paste URL"
          onChange={(e) => setExternalLink(e.target.value)}
          variant="outlined"
        />

        <Typography className={classes.formHeaders}>Price</Typography>
        <TextField
          id="outlined-basic"
          fullWidth
          onChange={(e) => setPrice(e.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">BNB</InputAdornment>,
          }}
          label="Enter price for a single item"
          variant="outlined"
        />

        <Typography className={classes.formHeaders}>Royalties</Typography>

        <Typography className={classes.formParas}>
          The more the royalty percentage, higher are the chances of your item
          to be placed on the top of the marketplace list.
        </Typography>
        <div className={classes.progressDiv}>
          <Button value={10} onClick={DecrementRoyalty} variant="outlined">
            {"-"}
          </Button>
          <BorderLinearProgress
            variant="determinate"
            value={royalty}
          ></BorderLinearProgress>
          <Button value={10} onClick={IncrementRoyalty} variant="outlined">
            {"+"}
          </Button>
        </div>
        <Button
          className={classes.createitembtn}
          variant="outlined"
          onClick={handleSubmission}
        >
          Create Item
        </Button>
      </Container>
    </Container>
  );
}

const filterOptions = [
  {
    label: "Featured",
    id: "filter-opt-featured",
    value: "Featured",
  },
  {
    label: "Relevance",
    id: "filter-opt-relevance",
    value: "Relevance",
  },
];
