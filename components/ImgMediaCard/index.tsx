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

const useStyles = makeStyles((theme)=>({
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
    width:theme.spacing(3),
    height:theme.spacing(3),
  },
  nftInfo:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%',
    justifyContent:'space-between',
  }
}))

export default function ImgMediaCard({nft}) {
  const classes = useStyles();
  console.log(nft);
  return (
    <Card className={classes.root}>
      <CardActionArea>
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
                color="white"
                component="div"
              >
                {nft.cost}{" ETH"}
              </Typography>
      {/* </div> */}
      &emsp;
          <div style={{display:'flex',alignItems:'center'}}>
          <FavoriteIcon />
          {nft.likes}
          </div>
          </div>
          &emsp;&nbsp;
      </CardActions>
    </Card>
  );
}
