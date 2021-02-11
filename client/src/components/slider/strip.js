import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import {Container} from "@material-ui/core";
import PublicIcon from '@material-ui/icons/Public';
import StyleIcon from '@material-ui/icons/Style';
import GamesIcon from '@material-ui/icons/Games';
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const myStyles = makeStyles(() => ({
  stripCotainer:{
    display :'flex',
    flexDirection :'row',
    width : 'fit-content'
  },
    button: {
      margin: "20px 30px",
      borderRadius : "15px",
    },
    stripCotainerSm :{
      display :'none'
    }
  }));


 function strip(props) {
  
  const stripDisplay = () => {
    let clsValue = isWidthUp("sm" || "lg", props.width)
      ? classes.stripCotainer
      : classes.stripCotainerSm;
    return clsValue;
  };

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
        <Container  className={stripDisplay()}>
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
        </Container>
    )
}

export default withWidth()(strip);