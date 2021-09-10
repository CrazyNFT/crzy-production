import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import clsx from "clsx";
// Mui-components
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// Mui-icons
import InstagramIcon from "@material-ui/icons/Instagram";
import FaceBookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.light,
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
    },
    greyText: {
      color: theme.palette.grey[700],
    },
    logo: {
      [theme.breakpoints.up("sm")]: {
        transform: "translateX(-28px)",
      },
    },
    footerTitle: {
      fontWeight: 400,
      fontSize: "1.4rem",
      marginBottom: theme.spacing(2),
    },
    footerLink: {
      fontWeight: 400,
    },
    footerTopContainer: {
      padding: theme.spacing(2),
      justifyContent: "center",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "space-between",
        padding: theme.spacing(1, 5),
      },
    },
    footerBottomContainer: {
      padding: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(1, 5),
      },
    },
    divider: {
      height: "6px",
      width: "98%",
      margin: "auto",
      borderRadius: "6px",
      backgroundColor: theme.palette.primary.dark,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    listItem: {
      marginTop: theme.spacing(1),
    },
    socialIconContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        maxWidth: 260,
        margin: "auto",
      },
    },
    socialLabel: {
      fontWeight: 400,
      fontSize: "1.125rem",
      marginLeft: "4px",
      marginBottom: "8px",
    },
    copyrights: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(1),
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.grey[300],
    },
  })
);

interface FooterLinks {
  title: string;
  description: string[];
}

interface SocialButtonProps {
  icon: any;
  href: string;
  key: string;
}

export default function Footer() {
  const classes = useStyles();

  const SocialButton: React.FC<SocialButtonProps> = ({ icon, href }) => (
    <NextLink href={href} passHref>
      <IconButton edge="end">{icon}</IconButton>
    </NextLink>
  );

  return (
    <Container
      maxWidth={false}
      disableGutters
      component="footer"
      className={classes.footer}
    >
      <Container maxWidth="lg">
        <Grid container className={classes.footerTopContainer}>
          <Grid item>
            <Image
              src="/logo.svg"
              height={80}
              width={160}
              layout="intrinsic"
              className={classes.logo}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            container
            direction="column"
            justifyContent="center"
          >
            <Grid item>
              <Hidden smDown>
                <Typography
                  className={clsx(classes.socialLabel, classes.greyText)}
                >
                  Connect with us
                </Typography>
              </Hidden>
            </Grid>
            <Grid item container className={classes.socialIconContainer}>
              {socials.map((link: SocialButtonProps) => (
                <SocialButton {...link} />
              ))}
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.divider} />
        <Grid container spacing={4} className={classes.footerBottomContainer}>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography
                className={clsx(classes.footerTitle, classes.greyText)}
                gutterBottom
              >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item} className={classes.listItem}>
                    <Link href="#" className={classes.footerLink}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box className={classes.copyrights}>
        <Typography variant="body2" color="inherit" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://www.crazynft.tech/">
            CrazyNFT
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  );
}

const socials: SocialButtonProps[] = [
  { icon: <FaceBookIcon />, href: "#", key: "ajska" },
  { icon: <LinkedInIcon />, href: "#", key: " laosma" },
  { icon: <InstagramIcon />, href: "#", key: "lapsla" },
  { icon: <GithubIcon />, href: "#", key: "tayhs" },
];

const footers: FooterLinks[] = [
  {
    title: "CrazyNFT",
    description: ["NFT Blog", "FAQs", "Chat with us", "Create NFTs"],
  },
  {
    title: "NFTs",
    description: [
      "Art NFT",
      "Game NFT",
      "Photography NFT",
      "Video NFT",
      "Music NFT",
    ],
  },
  {
    title: "Information",
    description: ["Terms of service", "Privacy Policy"],
  },
];
