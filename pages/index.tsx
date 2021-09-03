import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "./Components/Header";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Body from "./Components/Body";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.success.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexGrow:1,
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      
      <Header />
      <Container maxWidth="lg" className={classes.root}>
        <Body />
        {/* <Typography variant="h2">Hello Crzy World!</Typography> */}
      </Container>
    </React.Fragment>
  );
}
