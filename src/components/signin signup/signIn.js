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
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { userNamePassword } from "../../redux/action/action";
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
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [flag, setflag] = useState();
  const [temp, setTemp] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state, shallowEqual);
 

  function checkCredential() {
    console.log("userrrrrrrrrrrrr",data.userList)
    let user = data.userList.userName.find(temp => temp === userName ? true : false)
    let pass = data.userList.pass.find( temp => temp === password ? true : false)
    
    setTemp(true);
    if (
      user !== undefined  &&
      pass !== undefined
    ) {
      setflag(true);
      dispatch(userNamePassword(userName));
      setTimeout(() => {
        history.push("/");
      }, 1000);
    } else {
      setflag(false);
    }
  }
  const history = useHistory();
  console.log("history", history);

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
              checkCredential();
            }}
          >
            Login
          </Button>

          {temp &&
            (flag ? (
              <span>
                <Alert severity="success">Login is successfull</Alert>
              </span>
            ) : (
              <Alert variant="filled" severity="error">
                {" "}
                wrong credentials — check it out!{" "}
              </Alert>
            ))}

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
  );
}
