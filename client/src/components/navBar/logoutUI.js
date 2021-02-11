import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { userNamePassword } from "../../redux/action/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const myStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  linkText: {
    textTransform: `uppercase`,
    color: `black`,
    minWidth: "100%",
  },
}));

function Logout() {
  const classes = myStyles();
  const history = useHistory();
  let  userName  = localStorage.getItem('uName')

  function handleInput(e) {
    console.log("event :::", e.target.value);
    if (e.target.value === "Logout") {
      localStorage.removeItem("jwt");
      localStorage.removeItem("uName");
      window.location.reload(false)
      history.push("/")
    }
  }
  return (
    <div style={{ marginBottom: "10px", minWidth: 120 }}>
      <FormControl className={classes.linkText}>
        <InputLabel id="demo-simple-select-label">{userName}</InputLabel>
        <Select
          disableUnderline
          onChange={(e) => {
            handleInput(e);
          }}
        >
          <MenuItem value={"Logout"}>Logout</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Logout;
