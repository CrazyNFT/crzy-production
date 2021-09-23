import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, Theme } from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#EFF4F7',
    width:'100%',
    height:120,
    paddingTop:15,
    paddingBottom:15,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'#767B7B',
    
    [theme.breakpoints.up('md')]:{
      display:'none',
    }
  },
  title: {
    flexGrow: 1,
    color:'#767B7B',
    [theme.breakpoints.up('xs')]:{
      display:'none',
    },
    
    [theme.breakpoints.up('md')]:{
      display:'flex',
    }
  },
  navbarLogo: {
    flexGrow:1,
    marginRight:theme.spacing(2),
  },
  socialButton:{
    background: "rgb(0,192,182)",
    background: "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xs')]:{
      display:'none',
    },
    
    [theme.breakpoints.up('md')]:{
      display:'flex',
    }
    
  },
  launchAppButton:{
    background: "rgb(0,192,182)",
    background: "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
    padding:18,
    flexGrow:1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
  <AppBar position="static" className={classes.root}>
  <Toolbar>
    <IconButton 
   className={classes.navbarLogo} edge="start">
    <img  src={'./crzyLogo.png'}></img>
    </IconButton>
    <Button 
    className={classes.title}
    >
      Home
    </Button>
    <Button 
    className={classes.title}
    >
      Marketplace
    </Button>
    <Button 
    className={classes.title}
    >
      NFT Blog
    </Button>
    <IconButton edge="end" className={classes.socialButton} color="inherit" aria-label="menu">
      <LinkedInIcon></LinkedInIcon>
    </IconButton>
    <IconButton edge="end" className={classes.socialButton} color="inherit" aria-label="menu">
      <TwitterIcon></TwitterIcon>
    </IconButton>
    <IconButton edge="end" className={classes.socialButton} color="inherit" aria-label="menu">
    <YouTubeIcon></YouTubeIcon>
    </IconButton>
    <IconButton edge="end" className={classes.socialButton} color="inherit" aria-label="menu">
      <YouTubeIcon></YouTubeIcon>
    </IconButton>
    <IconButton edge="end" className={classes.menuButton2} color="inherit" aria-label="menu">
      <SearchIcon></SearchIcon>
    </IconButton>
    <Button className={classes.launchAppButton} color="inherit">Launch App</Button>
    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
  </Toolbar>
</AppBar>
  );
}
