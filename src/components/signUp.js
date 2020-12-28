import React from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
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
  btn: {
    marginBottom: "20px",
  },
  frgt: {
    marginLeft: "-16vw",
  },
}));

export default function signIn() {
  const classes = MyStyle();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="standard-basic email"
                label="Email"
                type="email"
                name="email"
                autoFocus
                variant="outlined"
              />
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="standard-basic pass"
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                autoFocus
              />
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.btn}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="#" variant="body2">
                  {"Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
