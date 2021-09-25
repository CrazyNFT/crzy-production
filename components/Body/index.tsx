import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import Card from '@material-ui/core/Card';
import ImgMediaCard from "../ImgMediaCard";

import { makeStyles, Theme } from "@material-ui/core/styles";
import { CardContent, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Body() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const nftData = [
    {
      imgurl: "./img.png",
      title: "Lizard",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      imgurl: "./img.png",
      title: "Lizard",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      imgurl: "./img.png",
      title: "Lizard",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      imgurl: "./img.png",
      title: "Lizard",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      imgurl: "./img.png",
      title: "Lizard",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      imgurl: "./img.png",
      title: "Lizard",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ];

  return (
    <Grid container spacing={2}>
      {nftData.map((i, data) => {
        return (
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <ImgMediaCard nft={data} key={i}></ImgMediaCard>
          </Grid>
        );
      })}
    </Grid>
  );
}
