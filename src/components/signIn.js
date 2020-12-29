import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./navBar";
import Footer from "./footer/footer";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { userNamePassword } from "../redux/action/action";

const MyStyle = makeStyles((theme) => ({
  boxOutLine: {
    border: "1px solid black",
  },
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "84px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

const credentials = {
  userName: "shahir",
  password: "123",
};

export default function SignIn() {
  const classes = MyStyle();
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state, shallowEqual);
  console.log("count", data);
  const [flag, setflag]= useState();
  const [temp , setTemp] = useState(false);
  function checkCredential() {
    setTemp(true)
    if (
      credentials.userName === userName &&
      credentials.password === password
    ) {
      setflag(true)
      dispatch( userNamePassword(userName))
    } else {
      setflag(false)
    }
  }

  
  return (
    <div>
      <Navbar />

      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              required
              fullWidth
              id="standard-basic email"
              label="User Name"
              type="text"
              name="text"
              autoComplete="text"
              autoFocus
              variant="outlined"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              required
              fullWidth
              id="standard-basic pass"
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              autoComplete="password"
              autoFocus
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br />
            <br />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              className={classes.btn}
              onClick={() => {
                checkCredential()
              }}
            >
              Login
            </Button>
            
            { temp &&( flag ? 
            <Alert severity="success">Login is successfull</Alert> 
              
            : 
              <Alert variant="filled" severity="error"> wrong credentials — check it out! </Alert>)
            }

            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
