import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  alpha,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Select from "@/components/Select";
import Pagination from "@/components/Pagination";
import CardLayout from "@/components/CardLayout";

// IMPORTING SAMPLE NFT CARDS DATA
import { nftData } from "@/components/tempdata/samplenfts.jsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spaceBetween: {
      justifyContent: "space-between",
    },
    justifyCenter: {
      justifyContent: "center",
    },
    select: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      padding: theme.spacing(0, 1, 0, 2),
      borderRadius: "8px",
    },
    selectlabel: {
      fontWeight: 500,
      marginBottom: 2,
      color: theme.palette.primary.main,
    },
    connectWalletButton: {
      // background: "rgb(0,192,182)",
      background:
        "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
      padding: 18,
      flexGrow: 1,
    },
  })
);

export default function MarketPlace(props: any) {
  const classes = useStyles();
  const [filterBy, setFilterBy] = React.useState("none");
  return (
    <Container>
      <Toolbar className={classes.spaceBetween}>
        <Typography variant="body1">
          <b>Art | </b>
          {nftData.length}
        </Typography>
        <div className={classes.select}>
          <Typography variant="body1" className={classes.selectlabel}>
            {"Sort By: "}
          </Typography>
          <Select
            selectVal={filterBy}
            setSelectVal={setFilterBy}
            options={filterOptions}
          />
        </div>
      </Toolbar>
      <Container>
        <CardLayout />
      </Container>
      <Toolbar className={classes.justifyCenter}>
        <Pagination />
      </Toolbar>
    </Container>
  );
}

const filterOptions = [
  {
    label: "Featured",
    id: "filter-opt-featured",
    value: "Featured",
  },
  {
    label: "Relevance",
    id: "filter-opt-relevance",
    value: "Relevance",
  },
];
