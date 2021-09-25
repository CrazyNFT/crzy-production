import React from "react";
import Image from "next/image";
import Link from "next/link";
// Mui-components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
// Mui-icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import MovieFilterRoundedIcon from "@material-ui/icons/MovieFilterRounded";
import ContactSupportRoundedIcon from "@material-ui/icons/ContactSupportRounded";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.secondary,
      padding: theme.spacing(0),
      marginBottom: theme.spacing(4),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.secondary,
    },
    toolbar: {
      [theme.breakpoints.up("md")]: {
        justifyContent: "space-between",
      },
      ...theme.mixins.toolbar,
    },
    pageLink: {
      margin: theme.spacing("auto", 2),
      textDecoration: "none",
      color: theme.palette.text.secondary,
      fontWeight: 500,
      "&:hover": {
        color: theme.palette.primary.dark,
        fontWeight: 600,
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      backgroundColor: alpha(theme.palette.primary.main, 0.06),
      borderRadius: "4px 4px 0px 0px",
      borderBottom: `2px solid ${theme.palette.grey[600]}`,
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        border: "none",
        backgroundColor: "inherit",
        "&:focus": {
          width: "20ch",
          backgroundColor: alpha(theme.palette.primary.main, 0.06),
          borderRadius: "4px 4px 0px 0px",
          borderBottom: `2px solid ${theme.palette.grey[600]}`,
        },
      },
    },
  })
);

interface PageLinkProps {
  label: string;
  href: string;
  icon?: any;
}

interface DrawerProps {
  toggle: () => void;
}

export default function Header() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Link data
  const PageLinks: PageLinkProps[] = [
    {
      href: "/",
      label: "Home",
      icon: <HomeRoundedIcon />,
    },
    {
      href: "/marketplace",
      label: "Marketplace",
      icon: <DashboardRoundedIcon />,
    },
    {
      href: "/sell",
      label: "Sell NFTs",
      icon: <MovieFilterRoundedIcon />,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: <ContactSupportRoundedIcon />,
    },
  ];

  // PageLinks on AppBar
  const PageLink: React.FC<PageLinkProps> = ({ label, href }) => {
    return (
      <Link href={href} passHref>
        <Typography
          variant="subtitle1"
          component="a"
          className={classes.pageLink}
        >
          {label}
        </Typography>
      </Link>
    );
  };

  // Mobile Drawer Component
  const MobileDrawer: React.FC<DrawerProps> = ({ toggle }) => {
    return (
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
              {PageLinks.map(({ label, href, icon }) => (
                <Link href={href} passHref key={label + "-drawer"}>
                  <ListItem button>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                      primary={label}
                      className={classes.pageLink}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
    );
  };

  // Searchbar Component
  const SearchBar = () => (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative" elevation={1} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {/* ICON */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}
          <Image
            src="/logo.svg"
            height={80}
            width={160}
            layout="intrinsic"
            priority
          />

          {/* LINKS */}
          <Hidden smDown implementation="css">
            <div>
              {PageLinks.map((link) => (
                <PageLink key={link.label} {...link} />
              ))}
            </div>
          </Hidden>

          {/* Search */}
          <SearchBar />

          {/* Drawer */}
          <MobileDrawer toggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
// import React from "react";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import { makeStyles, Theme } from "@material-ui/core/styles";
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor:'#EFF4F7',
//     width:'100%',
//     height:120,
//     paddingTop:15,
//     paddingBottom:15,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     color:'#767B7B',
    
//     [theme.breakpoints.up('md')]:{
//       display:'none',
//     }
//   },
//   title: {
//     flexGrow: 1,
//     color:'#767B7B',
//     [theme.breakpoints.up('xs')]:{
//       display:'none',
//     },
    
//     [theme.breakpoints.up('md')]:{
//       display:'flex',
//     }
//   },
//   navbarLogo: {
//     flexGrow:1,
//     marginRight:theme.spacing(2),
//   },
//   socialButton:{
//     background: "rgb(0,192,182)",
//     background: "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('xs')]:{
//       display:'none',
//     },
    
//     [theme.breakpoints.up('md')]:{
//       display:'flex',
//     }
    
//   },
//   launchAppButton:{
//     background: "rgb(0,192,182)",
//     background: "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
//     padding:18,
//     flexGrow:1,
//   },
// }));

// export default function Header() {
//   const classes = useStyles();
//   return (
//   <AppBar position="static" className={classes.root}>
//   <Toolbar>
//     <IconButton 
//    className={classes.navbarLogo} edge="start">
//     <img  src={'./crzyLogo.png'}></img>
//     </IconButton>
//     <Button 
//     className={classes.title}
//     >
//       Home
//     </Button>
//     <Button 
//     className={classes.title}
//     >
//       Marketplace
//     </Button>
//     <Button 
//     className={classes.title}
//     >
//       NFT Blog
//     </Button>
//     <IconButton edge="end" className={classes.socialButton} color="inherit" aria-label="menu">
//       <LinkedInIcon></LinkedInIcon>
//     </IconButton>
//     <IconButton edge="end" className={classes.socialButton} color="inherit" aria-label="menu">
//       <TwitterIcon></TwitterIcon>
//     </IconButton>
//     <IconButton edge="end" className={classes.socialButton} color="inherit" aria-label="menu">
//     <YouTubeIcon></YouTubeIcon>
//     </IconButton>
//     <IconButton edge="end" className={classes.socialButton} color="inherit" aria-label="menu">
//       <YouTubeIcon></YouTubeIcon>
//     </IconButton>
//     <IconButton edge="end" className={classes.menuButton2} color="inherit" aria-label="menu">
//       <SearchIcon></SearchIcon>
//     </IconButton>
//     <Button className={classes.launchAppButton} color="inherit">Launch App</Button>
//     <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
//       <MenuIcon />
//     </IconButton>
//   </Toolbar>
// </AppBar>
//   );
// }

