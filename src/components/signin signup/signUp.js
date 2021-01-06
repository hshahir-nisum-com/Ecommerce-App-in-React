import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/action/action";
const MyStyle = makeStyles((theme) => ({
  boxOutLine: {
    border: "1px solid black",
  },
  paper: {
    marginTop: theme.spacing(25),
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
  linkStyle: {
    textDecoration: "none",
  },
}));

export default function SignIn() {
  const classes = MyStyle();
  const [firstName, setFirstName] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  function addCredentials() {
    if (firstName.length > 0 && pass.length > 0) {
      console.log("firstName", firstName);
      console.log("pass", pass);
      dispatch(
        signup({
          name: firstName,
          pass: pass,
        })
      );
    } else {
      alert("email/passowrd is missing");
    }
  }

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
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
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
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Link to="/" className={classes.linkStyle}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  className={classes.btn}
                  onClick={() => addCredentials()}
                >
                  Sign Up
                </Button>
              </Link>
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
