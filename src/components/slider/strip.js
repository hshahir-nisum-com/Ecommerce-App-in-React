import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import StoreIcon from '@material-ui/icons/Store';
import PublicIcon from '@material-ui/icons/Public';
import StyleIcon from '@material-ui/icons/Style';
import GamesIcon from '@material-ui/icons/Games';

const myStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
       width : "14vw",
      borderRadius : "15px",
    },
  }));

export default function strip() {

    const classes = myStyles();
        const itemList = [
            {
            text :'Store Mall',
            icon : <StoreMallDirectoryIcon/>
            }, 
            {
                text :'Store Mart',
                icon : <PublicIcon/>
            },
            { text :'Fashion & Style ',
            icon : <StyleIcon/>
            },
            { text : 'Global Collection',
              icon : <GamesIcon/>
            },
              { text :'Digital Sahulat',
                icon : <StoreMallDirectoryIcon/>
            }]
    return (
        <div>
            {itemList.map(({text,icon})=>{
                return (
                <Button
                    key={text}
                   variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={icon }
                    > {text}
                    </Button>
                )
            })}
        </div>
    )
}
