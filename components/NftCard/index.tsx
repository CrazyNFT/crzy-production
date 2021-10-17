import React from "react";
import router from "next/router";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { useSnackbar } from "notistack";
// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import SeenIcon from "@material-ui/icons/VisibilityRounded";
// Backend Functions
import { redeemNFT } from "../LazyMint";
// Firebase
import { db } from "../../services/firefolder/setup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: {
      display: "flex",
      alignItems: "center",
    },
    flexCol: {
      display: "flex",
      flexDirection: "column",
    },
    marginX: {
      margin: "0px 12px",
    },
    paddedX: {
      padding: "0px 14px",
    },
    cardRoot: {
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
      width: 24,
      height: 24,
      marginRight: 8,
    },
    avatarLarge: {
      width: 44,
      height: 44,
      marginRight: 4,
      border: `2px solid ${theme.palette.primary.main}`,
    },
    imageFull: {
      objectFit: "contain",
      objectPosition: "center",
      height: 300,
      width: 400,
    },
    nftContent: {
      padding: "0px 16px",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
    },
    nftInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 10px",
      width: "100%",
    },
    nftPrice: {
      flexGrow: 1,
    },
    heart: {
      marginRight: 4,
      fontSize: 16,
      color: "#FF7F7F",
    },
  })
);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function ImgMediaCard({ nft }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleBuy = async () => {

    try{
      const res = await redeemNFT(nft.voucher);
      const { id: NftID, ...NftData } = nft;
    // Delete sold NFT
    const deleteRes = await db.collection("CrazyNFT").doc(NftID).delete();
    // Add Sold NFt to SoldNFT collection
    const addRes = await db.collection("SoldNFT").add(NftData);

    if (!!addRes) {
      enqueueSnackbar("Success! NFT Purchased", { variant: "success" });
      setOpen(false);
    } else {
      enqueueSnackbar("Oop! Couldn't buy NFT at the moment", {
        variant: "error",
      });
    }
    } catch(err){
      enqueueSnackbar("Oop! Couldn't buy NFT at the moment", {
        variant: "error",
      });
    }
    
    
  };

  return (
    <div>
      <Card className={classes.cardRoot}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia image={nft.voucher.uri} className={classes.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <strong>{nft.title}</strong>
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Avatar
                className={classes.avatar}
                alt="Remy Sharp"
                src={nft.ownerIcon}
              />
              <Typography variant="body2" color="textSecondary" component="div">
                {nft.createdBy? nft.createdBy.slice(0, 5) + '...' + nft.createdBy.slice(-4): ''}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <div className={classes.nftInfo}>
            <Typography variant="body2" className={classes.nftPrice}>
              {nft.price}
              {" SOL"}
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FavoriteIcon className={classes.heart} />
              {nft.likes}
            </div>
          </div>
        </CardActions>
      </Card>
      <Dialog onClose={handleClose} open={open} maxWidth={"md"} fullWidth>
        <DialogTitle id="nft-dialog" onClose={handleClose}>
          {nft.title}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} style={{ overflow: "hidden" }}>
              <Grid item>
                <img
                  src={nft.voucher.uri}
                  alt={"nft-preview"}
                  className={classes.imageFull}
                  height="inherit"
                  width="inherit"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={6}
              className={classes.nftContent}
            >
              <Grid item className={classes.flex}>
                <ListItem style={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar
                      className={classes.avatarLarge}
                      alt="Author avatar"
                      src={nft.ownerIcon}
                      variant="rounded"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={nft.createdBy}
                    secondary={`Posted on ${
                      nft.createdOn
                        ? new Date(nft.createdOn).toLocaleDateString()
                        : ""
                    }`}
                  />
                </ListItem>
                <div style={{ flexGrow: 1 }} />
                <div className={classes.flex}>
                  <div
                    className={clsx(classes.flexCol, classes.marginX)}
                    style={{ alignItems: "center" }}
                  >
                    <SeenIcon style={{ color: "#4682b4" }} />
                    <span>100</span>
                  </div>
                  <div
                    className={clsx(classes.flexCol, classes.marginX)}
                    style={{ alignItems: "center" }}
                  >
                    <FavoriteIcon style={{ color: "#FF7F7F" }} />
                    <span>50</span>
                  </div>
                </div>
              </Grid>
              <Grid item className={classes.flexCol}>
                {/* TODO: add a read more.. expandable feature */}
                <Typography variant="h6" color="textSecondary">
                  Description
                </Typography>
                {nft.description}
              </Grid>
              <Grid item className={classes.flexCol}>
                <Typography variant="h6" color="textSecondary">
                  Price
                </Typography>
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  {nft.price}
                  {" SOL"}
                </Typography>
              </Grid>
              <Grid item container spacing={2}>
                {/* <Grid item xs={12} sm={6}>
                  <Button variant="outlined" color="primary" fullWidth>
                    CONNECT WALLET
                  </Button>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleBuy()}
                  >
                    BUY NOW
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
