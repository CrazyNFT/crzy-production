import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  root: {
    backgroundColor: theme.palette.success.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}
