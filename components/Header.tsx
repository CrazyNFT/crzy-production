import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.secondary,
      padding: theme.spacing(0),
    },
    pageLink: {
      margin: theme.spacing("auto", 2),
      textDecoration: "none",
      color: theme.palette.text.secondary,
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
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
}

export default function Header() {
  const classes = useStyles();

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

  return (
    <div className={classes.root}>
      <AppBar position="relative" elevation={1} className={classes.appBar}>
        <Toolbar>
          <Image
            src="/logo.svg"
            height={80}
            width={160}
            layout="intrinsic"
            priority
          />
          <div style={{ flexGrow: 1 }} />
          {PageLinks.map((link) => (
            <PageLink key={link.label} {...link} />
          ))}
          <div style={{ flexGrow: 1 }} />
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

const PageLinks: PageLinkProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/marketplace",
    label: "Marketplace",
  },
  {
    href: "/sell",
    label: "Sell NFTs",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];
