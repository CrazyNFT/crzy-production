import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

import Link from "next/link";

const menus = [
    {
        name:'CrazyHOME',
        link:'/comingsoon',
    },
    {
        name:'Marketplace',
        link:'/marketplace',
    },
    {
        name:'Create an NFT',
        link:'/createnft',
    },
    {
        name:'Launch App',
        link:'/',
    },
]
const useStyles = makeStyles(theme => ({
    root:{

    },
    menuItems:{
        display:'flex',
        color:'white',
        fontSize:'2em',
        padding:'0.5em',
        transition:'2s',
        cursor:'pointer',
    }
}));
function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }
export default function ComingSoonNavItems(){
    const styles = useStyles();
    return(
        <>
          <div className={styles.menuItems}>
            <List>
                {menus.map((item,i)=>{    
                    return(        
                        // <Link href={item.link}>
                <ListItemLink href={item.link}>
                    {item.name}
                </ListItemLink>
                // </Link>
                    )
                })}
            </List>
          </div>
          </>
        )
}