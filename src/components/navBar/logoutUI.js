import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { userNamePassword } from "../../redux/action/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: "10px", minWidth: 120 }}>
      <FormControl className={classes.linkText}>
        <InputLabel
          id="demo-simple-select-label"
          
        >
          Shahir
        </InputLabel>
        <Select
          disableUnderline
          onClick={() => {
            dispatch(userNamePassword(""));
            setTimeout(() => {
              history.push("/");
            }, 1000);
          }}
        >
          <MenuItem value={10}>Logout</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Logout;
 