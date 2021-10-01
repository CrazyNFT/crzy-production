import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Modal from '@material-ui/core/Modal';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  img: {
    height: 220,
  },
  action: {
    backgroundColor: "#5E5E5E",
    color: "white",
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  nftInfo: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
  modalImage: {
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(2),
  },
  clickReadMore: {
    fontWeight:900,
    cursor:'pointer',
  },
  paper: {
    position: 'fixed',
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width: "96%",
    marginLeft: "2%",
    padding: theme.spacing(3),
    display: 'flex',
    alignContent: 'center',
    alignItems: "center",
    flexDirection: 'column',
    border: "none",
    [theme.breakpoints.up("md")]: {
      top: '50%',
      left: "50%",
      margin:"0",
      width: "70%",

      flexDirection: 'row',
      transform: "translate(-50%, -50%)",
      padding: theme.spacing(5),
    }
  },
  buynowbtn: {
    // background: "rgb(0,192,182)",
    background: "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
    padding: theme.spacing(1.5),
    margin: theme.spacing(0.5),
    fontSize: theme.spacing(1),
    width: theme.spacing(20),
    height: '80%',
    color: 'white',
    float: 'right',
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),

    }
},
}))

export default function ImgMediaCard({ nft }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [readMore, setreadMore] = React.useState(false);

  console.log(nft);
  const handleModalToggle = () => {
    setOpen(!open);
  }
  const handleReadMoreToggle = () => {
    setreadMore(!readMore)
  }

  const connectWallet = (
    <div className={classes.paper}>
      <div className={classes.modalImage}>
        <img src={nft.imgurl} alt={"nft-preview"} />
      </div>
      <div className={classes.modalContent}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
        }}>
          <Avatar className={classes.avatar} alt="Remy Sharp" src={nft.ownerIcon} />
          &nbsp;
          <Typography
            variant="body2"
            color="textSecondary"
            component="div"
          >
            {nft.owner}
          </Typography>
        </div>

        <div>
          <h2 id="simple-modal-title">Connect Wallet</h2>
          <p id="simple-modal-description">
            Dragon
          </p>
          <h3 id="simple-modal-description">
            Jacob Ragon
          </h3>
          <p>
            Posted on September 8, 2021 at 12:31am IST
          </p>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
        }}>
          <FavoriteIcon /> {"28 Favourites"} &emsp;&emsp; <VisibilityIcon />{"100 Views"}
          &nbsp;
        </div>
        <div>
        <h4>Description</h4>
        {readMore?(        
        <p>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the ...<p className={classes.clickReadMore} onClick={handleReadMoreToggle}>{"read less"}</p></p>
):(
  <p>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs—<p className={classes.clickReadMore} onClick={handleReadMoreToggle}>{"read more..."}</p></p>
)}
</div>
      
<div>
        Price
        <h3>
        <strong>0.02 ETH</strong> &nbsp;&nbsp;
        {"(INR 5,756.66)"}
        </h3>
        </div>
        <Button className={classes.buynowbtn} color="inherit">Buy Now</Button>

      </div>
      
    </div>
  );

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleModalToggle}>
          <CardMedia image={nft.imgurl} className={classes.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {/* {props.nft.title} */}
              <strong>
                &nbsp; {nft.title}
              </strong>
            </Typography>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>&nbsp;&nbsp;
              <Avatar className={classes.avatar} alt="Remy Sharp" src={nft.ownerIcon} />
              &nbsp;
              <Typography
                variant="body2"
                color="textSecondary"
                component="div"
              >
                {nft.owner}
              </Typography>
            </div>

          </CardContent>
        </CardActionArea>

        <CardActions className={classes.action}>
          &nbsp;&nbsp;&emsp;
          <div className={classes.nftInfo}>
            {/* <div> */}
            <Typography
              variant="body2"
              color="primary"
              component="div"
            >
              {nft.cost}{" ETH"}
            </Typography>
            {/* </div> */}
            &emsp;
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FavoriteIcon />
              {nft.likes}
            </div>
          </div>
          &emsp;&nbsp;
        </CardActions>
      </Card>
      <Modal
        onClose={handleModalToggle}
        open={open} >
        {connectWallet}
      </Modal>
    </>
  );
}
