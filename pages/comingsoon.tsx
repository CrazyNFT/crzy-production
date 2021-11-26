import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import ComingSoonNavItems from "@/components/Comingsoon/ComingSoonNavItems";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    // opacity: 0.5,
    width: "100%",
    height: "100vh",
    position: "absolute",
    backgroundColor: "#01BEB4",
    top: 0,
    zIndex: 9999,
  },
  sidebar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    padding: "20px",
    height: "10%",

    [theme.breakpoints.up("md")]: {
      backgroundColor: "#000000cc",
      width: "10%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      alignContent: "center",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      padding: "50px",
      height: "100vh",
    },
  },
  overlayContent: {
    backgroundColor: "#000000cc",
    height: "100vh",
    // margin:'10px 10px 10px 21%',
    marginLeft: "0%",
    padding: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius:'3em',
    [theme.breakpoints.up("md")]: {
      width: "40%",
      marginLeft: "10%",
      padding: "50px",
      display: "flex",
    },
  },
  navigation: {
    // writingMode: 'vertical-rl',
    listStyle: "none",
    color: "white",
  },
  navigationItem: {
    height: "100%",
    transform: "rotate(-90deg)",
    padding: "5%",
  },
  logo: {
    zoom: "0.6",
  },
  hamburgerMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
      color: "white",
    },

    color: "white",
  },

  hamburgerPc: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    alignSelf: "flex-start",
    color: "white",
    top: 0,
    position: "absolute",
    marginTop: "70px",
    justifySelf: "center",
  },
  navigationSocialIcons: {
    marginBottom: "40px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  triangle: {
    position: "absolute",
    width: 0,
    height: 0,
    borderWidth: "100vh 400px 0 0",
    borderStyle: "solid",
    display: "block",
    animationName: "$rotate",
    animationDirection: "normal",
    animationDuration: "3s",
    animationTimingFunction: "cubic-bezier",
    animationIterationCount: "1",
    top: 0.1,
    marginLeft: "50.0%",

    borderColor: "#000000cc transparent transparent transparent",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  "@keyframes rotate": {
    "0%": {
      opacity: 0.9,
      borderWidth: "100vh 700px 0 0",
      // borderRadius:'100%',
      borderColor: "#01BEB4 transparent transparent transparent",
    },
    "100%": {
      borderWidth: "100vh 400px 0 0",
      opacity: 1,
    },
  },
}));

export default function ComingSoon() {
  const styles = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <img className={styles.logo} src="/crzyLogo.png"></img>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained primary button group"
          variant="text"
        >
          <InstagramIcon className={styles.navigationSocialIcons} />
          <FacebookIcon className={styles.navigationSocialIcons} />
          <LinkedInIcon className={styles.navigationSocialIcons} />
        </ButtonGroup>
        <IconButton
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.hamburgerMobile}
        >
          {menuOpen ? <ClearIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <div className={styles.overlayContent}>
        <IconButton
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.hamburgerPc}
        >
          {menuOpen ? <ClearIcon /> : <MenuIcon />}
        </IconButton>
        {menuOpen ? (
          <Slide>
            <ComingSoonNavItems />
          </Slide>
        ) : (
          <>
            <Typography
              variant="h4"
              component="h4"
              style={{ color: "#ffffffd1", fontWeight: 900 }}
              gutterBottom
            >
              CRZY marketplace for your CRZY Nfts.
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              style={{
                color: "#ffffff73",
                paddingTop: "1em",
                fontWeight: 100,
              }}
              gutterBottom
            >
              We are working on creating a free, fair, easy and a less
              intimidating NFT Marketplace, so that the layman may open thyself
              up to new ventures
            </Typography>
          </>
        )}
      </div>
      <div className={styles.triangle}></div>
    </div>
  );
}
