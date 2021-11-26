import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  primaryColor: {
    color: theme.palette.primary.dark,
  },
  pageContainer: {
    marginTop: theme.spacing(8),
  },
  root: {
    backgroundColor: theme.palette.success.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexGrow: 1,
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  h3: {
    marginBottom: theme.spacing(3),
  },
  paragraph: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(2),
  },
  banner: {
    minHeight: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      (
      <Container className={classes.pageContainer}>
        <Typography
          variant="h3"
          align="center"
          className={clsx(classes.h3, classes.primaryColor)}
        >
          CrazyNFT (Beta-1.0.0)
        </Typography>
        <Typography paragraph align="center" className={classes.paragraph}>
          {"This version of CrazyNFT runs on top of all EVM supported chains"}
          <br />
          {
            "Make sure your wallet is connected to the right chain as selected before interacting with the application"
          }
        </Typography>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            className={clsx(classes.h3, classes.primaryColor)}
          ></Typography>
        </Container>
      </Container>
      <div className={classes.banner}>
        <Container>
          <Typography variant="h3" align="center" className={classes.h3}>
            Get your Testnet Tokens before starting!
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}
