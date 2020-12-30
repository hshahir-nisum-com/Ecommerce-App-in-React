import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  Paper,
  Container,
  TextField,
  Grid,
} from "@material-ui/core";
import { Home} from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon  from "@material-ui/icons/Search";
import { shallowEqual ,useSelector} from 'react-redux';


const MyStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing * 3,
    overflowX: "auto",
    zIndex : '-1'
  },
  navDisplayFlex: {
    display: `flex`,
    "flex-direction": "row",
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  divForSpan :{
    position : 'relative',
  },
  span: {
    position : 'absolute',
    // marginRight : "20px"
    marginLeft : '40px'
    
  },
  cart:{
    padding : 10,
    position : 'absolute'
  },
  sticky : {
  width :'100%',  
   position : 'fixed',
  //  top:0,
  },
  header :{
    backgroundColor: "black",
    color: "white",
    margin: 'auto',
    padding: "10px",
    textAlign: "center",
    fontSize: 'small',
    width : '100%'
  },
  appbar :{
  },
  mySticky :{
    marginTop : '0px',
    position : 'sticky'
  }
}));


export default function NavBar() {
    const navLinks = [
      { title: "Electronic Devices", path: "/electronicDevices" }, 
      { title: "Groceries", path: "/groceries" },
      {title : 'Fashions', path : '/fashions'},
      {title : 'Contact Us', path :'/contactus'},
      {title : 'Login / Signup' , path : '/login'},
    ];

    const [status, setStatus] = useState(false)  
    const data = useSelector(state => state, shallowEqual);
    console.log("data",data.userName.length)
    useEffect(() => {
      const header = document.getElementById("myHeader");
      const sticky = header.offsetTop;
      console.log("header Offset",sticky)

      const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky) {
          // header.className.add("sticky");
          setStatus(true)
         
        } else {
          header.classList.remove("sticky");
          setStatus(false)
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
  

  const classes = MyStyle();

      console.log("status",status)
    return (
      
      <AppBar   id='myHeader' className={status?classes.sticky: classes.mySticky} >
      <div  >
      
        <header className={classes.header}>
        Groceries delivery in Karachi / Mobile phones, Cosmetics, Toys &
        Electronics nationwide
      </header>

     
          <Toolbar>
            <Container className={classes.navDisplayFlex}>
              <IconButton edge="start" color="inherit" aria-label="home">
                <Link to="/" style={{textDecoration:'none',
                  color:'white'}}>
                  <Home fontSize="large" />{" "}
                </Link>
              </IconButton>

              <List component="nav" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => {
              if(title !== navLinks[4].title){
                return (   <ListItem button key={title}>
                    <Link to={path} className={classes.linkText}>
                      {title}
                    </Link>
                  </ListItem>)
                  } 
                  else {
                  return (
                    <ListItem button key={title}>
                      <Link to={path} className={classes.linkText}>
                        {console.log("1",data.userName)}
                        {data.userName.length > 0 ? data.userName : title}
                      </Link>
                    </ListItem>
                  );
                  }
                })}
              </List>
            </Container>
          </Toolbar>
          

        <Paper >
          <Grid container spacing={1}>
            <Grid item xs={2} sm={3}>
              <Paper></Paper>
            </Grid>
            <Grid item xs={5} sm={5}>
              <TextField
                id="filled-search"
                label="Search in Store"
                type="search"
                fullWidth
              />
            </Grid>

            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>

            <Grid item xs={1} sm={3}>
              <div className={classes.divForSpan}>
                <ShoppingCartOutlinedIcon
                  fontSize="large"
                  className={classes.cart}
                />
                <span className={classes.span}>0</span>
              </div>
            </Grid>
          </Grid>
        </Paper>
      
      </div>
      
      </AppBar>
    );
}
