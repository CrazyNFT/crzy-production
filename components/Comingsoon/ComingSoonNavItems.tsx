import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@/components/Link";

const menus = [
  {
    name: "CrazyHOME",
    link: "/comingsoon",
  },
  {
    name: "Marketplace",
    link: "/marketplace",
  },
  {
    name: "Create an NFT",
    link: "/createnft",
  },
  {
    name: "Launch App",
    link: "/",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {},
  menuItems: {
    display: "flex",
    color: "white",
    fontSize: "2em",
    padding: "0.5em",
    transition: "2s",
    cursor: "pointer",
  },
}));

interface ListItemProps {}

export default function ComingSoonNavItems() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.menuItems}>
        <List>
          {menus.map((item, i) => {
            return (
              <Link href={item.link} key={item.name + "-" + i}>
                <ListItem button>{item.name}</ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    </>
  );
}
