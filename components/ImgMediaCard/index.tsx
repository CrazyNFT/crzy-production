import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
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
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.action}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
