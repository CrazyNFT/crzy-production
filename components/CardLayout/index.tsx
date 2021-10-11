import React from "react";
import NftCard from "@/components/NftCard";
import { nftData } from "@/components/tempdata/samplenfts.jsx";
import Grid from "@material-ui/core/Grid";

export default function CardLayout() {
  return (
    <Grid container spacing={2}>
      {nftData.map((data, i) => {
        return (
          <Grid key={i} item xs={6} sm={6} md={4} lg={3}>
            <NftCard nft={data} key={i} />
          </Grid>
        );
      })}
    </Grid>
  );
}
