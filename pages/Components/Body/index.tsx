import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';

import { makeStyles, Theme } from "@material-ui/core/styles";
import { CardContent, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    
}));

export default function Body() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
        <Grid container spacing={2}>
            {
                [1,2,3,4,5,6,7,8].map((i,data)=>{
                    return(
                        <Grid item xs={6} sm={6} md={4} lg={3}>
                        <Card key={i} >
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                    )
                })
            }
        </Grid>

  );
}
