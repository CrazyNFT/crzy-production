import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
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
// Custom
import Select from "@/components/Select";
// Context
import { useCurrency, currencyOptions } from "@/context/currencyContext";
// Mui-icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import MovieFilterRoundedIcon from "@material-ui/icons/MovieFilterRounded";
import ContactSupportRoundedIcon from "@material-ui/icons/ContactSupportRounded";

const drawerWidth = 240;

const ConnectButton = dynamic(
  () => import("@/components/Wallet/ConnectButton"),
  {
    ssr: false,
  }
);

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
      "&:hover": {
        color: theme.palette.primary.dark,
        fontWeight: 500,
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
    selectStyles: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      padding: "6px 16px 6px 12px",
      minHeight: 35,
      borderRadius: 4,
      marginTop: 1,
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
  const { currency, setCurrency } = useCurrency();

  console.log(currency);

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
      href: "/createnft",
      label: "Create NFTs",
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src="/logo.svg"
            height={80}
            width={160}
            layout="intrinsic"
            priority
          />
          <Hidden smDown implementation="css">
            <div>
              {PageLinks.map((link) => (
                <PageLink key={link.label} {...link} />
              ))}
            </div>
          </Hidden>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <SearchBar />
            <Select
              options={currencyOptions}
              selectVal={currency.value}
              customClass={classes.selectStyles}
              setCurrency={setCurrency}
            />
            <ConnectButton />
          </div>
          <MobileDrawer toggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
