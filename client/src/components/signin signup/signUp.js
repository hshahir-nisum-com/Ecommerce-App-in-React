import React, { useState } from "react";
import axios from "axios";
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
import { useHistory } from "react-router-dom";

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
  const [fName, setfName] = useState("");
  const [getEmail, setgetEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();


  async function addCredentials() {
    const nameError = document.querySelector(".name.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    emailError.textContent = ""
    passwordError.textContent = ""
    nameError.textContent = ""
    
    try {
      const res = await fetch("http://localhost:8080/register", {
        method: "POST",
        body: JSON.stringify({
          name : fName,
          email: getEmail,
          password: pass,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("data :::::", data);
      if (data.name) {
        nameError.textContent = data.name;
      }
      if (data.email) {
        emailError.textContent = data.email;
      }
      if (data.password) {
        console.log("abc ::::::::",data);
        passwordError.textContent = data.password;
      }
      if (data.user) {
        history.push('/')
      }
    } catch (e) {
      console.log("Err in Post /register :::", e);
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
                  setfName(e.target.value);
                }}
              />
              <div class="name error"></div>
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
                onChange={(e) => {
                  setgetEmail(e.target.value);
                }}
              />
              <div class="email error"></div>
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
              <div class="password error"></div>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.btn}
                onClick={async () => await addCredentials()}
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
