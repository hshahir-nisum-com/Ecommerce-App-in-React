import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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

export default function SignIn() {
  const classes = MyStyle();
  const [getemail, setgetemail] = useState("");
  const [password, setpassword] = useState("");
  const [credentialErr , setcredentialErr] = useState("")
  const [flag, setflag] = useState();

  async function checkCredential() {
    
    
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
   
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
          email: getemail,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("data :::::::",data)

      
      if(data)
      {if (data.email || data.password) {
        setcredentialErr(data.email? data.email : data.password)
        setflag(true)
      }else(
        setflag(false)
      )}

      if (data.user) {
      localStorage.setItem("jwt",data.jwt)
      localStorage.setItem("uName",data.user.name)
        history.push('/')
      }
    } catch (e) {
      console.log("Err in Post /register :::", e);
    }

  }
  const history = useHistory();

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
            type="text"
            name="text"
            autoComplete="text"
            autoFocus
            variant="outlined"
            onChange={(e) => {
              setgetemail(e.target.value);
            }}
          />
          <div class="name error"></div>

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
          <div class="password error"></div>

          <br />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            className={classes.btn}
            onClick={() => {
              checkCredential();
            }}
          >
            Login
          </Button>

          {
            (flag && (
              <Alert variant="filled" severity="error" className="errTag">
                {" "}
                wrong credentials — { credentialErr}{" "}
              </Alert>
            ))}

          <Grid container>
            <Grid item xs>
              <Link to="/forgetPassword" variant="body2">
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
  );
}
