import React,{useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
 
export default function CartModal({ openModel, setshowModal }) {
  const classes = useStyles();
  const [getCart, setgetCart] = useState([]);

  useEffect(() => {
    async function getCartProducts() {
      const res = await axios.get("http://localhost:8080/getCart", {
        params: {
          user: localStorage.getItem("userID")
        }
      });
      setgetCart(res.data);
    }
    getCartProducts();
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModel}
        onClose={() => setshowModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModel}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>


            <List disablePadding>
            {getCart.length > 0 &&
              getCart[0].products.map(
                ({ name, price, productID, quantity }, ind) => {
                  return (
                    <span key={ind}>
                      <ListItem className={classes.listItem}>
                        Product Name: <ListItemText primary={name} />
                        <Typography variant="body2">{price} $</Typography>
                      </ListItem>

                      <ListItem className={classes.listItem}>
                        <ListItemText primary={`Quantity :  ${quantity}`} />
                        <ListItemText primary={`Total  `} />

                        <Typography
                          variant="subtitle1"
                          className={classes.total}
                        >
                          {parseInt(price) * parseInt(quantity)} $
                        </Typography>
                      </ListItem>
                    </span>
                  );
                }
              )}
          </List>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
