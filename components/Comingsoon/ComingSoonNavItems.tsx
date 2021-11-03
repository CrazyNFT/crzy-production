import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';


const menus = [
    {
        name:'CrazyHOME',
        link:'__blank',
    },
    {
        name:'CrazyTEAM',
        link:'__blank',
    },
    {
        name:'CrazyBLOG',
        link:'__blank',
    },
    {
        name:'LaunchApp',
        link:'__blank',
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
    }
}));

export default function ComingSoonNavItems(){
    const styles = useStyles();
    return(
        <>
          <div className={styles.menuItems}>
            <List>
                {menus.map((item,i)=>{    
                    return(        
                <ListItem key={i}>
                    {item.name}
                </ListItem>
                    )
                })}
            </List>
          </div>
          </>
        )
}