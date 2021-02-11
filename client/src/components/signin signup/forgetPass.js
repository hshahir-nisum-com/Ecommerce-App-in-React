import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const MyStyle = makeStyles((theme) => ({
  boxOutLine: {
    border: "1px solid black",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "200px",
    marginBottom: "84px",
    "@media (max-width: 900px)": {
      marginTop: "150px",
    },
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

export default function ForgetPass() {
  const classes = MyStyle();
  const [getemail, setgetemail] = useState("");
  const [oldPass, setoldPass] = useState("");
  const [newpassword, setnewpassword] = useState("");

  async function updateCredential() {
    const oldPassword = document.querySelector(".oldpassword.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    emailError.textContent = "";
    passwordError.textContent = "";
    oldPassword.textContent = "";

    try {
      const res = await fetch("http://localhost:8080/reset", {
        method: "PUT",
        body: JSON.stringify({
          email: getemail,
          oldPassword: oldPass,
          newpassword,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("data :::::", data);
      if (data.oldPassword) {
        oldPassword.textContent = data.oldPassword;
      }
      if (data.email) {
        emailError.textContent = data.email;
      }
      if (data.password) {
        console.log("abc ::::::::", data);
        passwordError.textContent = data.password;
      }
    } catch (e) {
      console.log("Err in Post /register :::", e);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Forgot Password
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
              setgetemail(e.target.value);
            }}
          />
          <div className="email error"></div>

          <br />
          <TextField
            required
            fullWidth
            id="standard-basic pass"
            label="Old Password"
            type="password"
            variant="outlined"
            name="password"
            autoComplete="password"
            autoFocus
            onChange={(e) => {
                setoldPass(e.target.value);
            }}
          />
          <div className="oldpassword error"></div>

          <br />
          <TextField
            required
            fullWidth
            id="standard-basic pass"
            label="New Password"
            type="password"
            variant="outlined"
            name="password"
            autoComplete="password"
            autoFocus
            onChange={(e) => {
              setnewpassword(e.target.value);
            }}
          />
          <div className="password error"></div>
          <br />

          <Button
            variant="contained"
            fullWidth
            color="primary"
            className={classes.btn}
            onClick={() => {
              updateCredential();
            }}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
