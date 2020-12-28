import React from 'react'
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";



const MyStyle = makeStyles((theme) => ({
  boxOutLine: {
    border: "1px solid black",
  },
  paper: {
    marginTop: theme.spacing(16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  btn :{
      marginBottom : "20px"
  },
  frgt:{    
      marginLeft : "-16vw"
  }
}));

export default function signIn() {
     const classes = MyStyle();

    return (
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
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
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
            />
            <br />
            <br />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              className={classes.btn}
            >
              Login
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2" className={classes.frgt}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="#" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
}
