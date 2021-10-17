import React, { useEffect, useState } from "react";
import NftCard from "@/components/NftCard";
import Grid from "@material-ui/core/Grid";
import NFT from "../../services/models/nft";

export default function CardLayout() {
  const [nftData, setNftData] = useState([]);

  useEffect(() => {
    const getNFT = async () => {
      try {
        let nft = new NFT();
        let data = await nft.getAll();
        if (data) {
          setNftData(data);
        }
      } catch (err) {
        alert("Error! " + err);
      }
    };

    getNFT();
  }, []);

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
