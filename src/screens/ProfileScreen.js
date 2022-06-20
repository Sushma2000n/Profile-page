import React from "react";
import { Helmet } from "react-helmet-async";
import { makeStyles } from "@material-ui/core";
import Profile from "../components/Profile";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      marginTop: "2rem",
      // backgroundColor: "#FF5733",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "10rem",
      // backgroundColor: "#FCFF33",
      // display: "none",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "15rem",
      // backgroundColor: "#33FF33",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "20rem",
      // backgroundColor: "#3352FF ",
    },
    [theme.breakpoints.only("xl")]: {
      marginTop: "25rem",
      // backgroundColor: "#D733FF",
    },
    // [theme.breakpoints.only("sm")]: {
    //   marginTop: "4rem",
    // },
    // [theme.breakpoints.only("xs")]: {
    //   marginTop: "2rem",
    // },
  },
  Visable: {
    [theme.breakpoints.only("md")]: {
      marginTop: "15rem",
      display: "none",
    },
  },
}));

function ProfileScreen() {
  // const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title>Profile Page</title>
      </Helmet>
      {/* <div className={classes.root}>My data </div>
      <div className={classes.Visable}>Hello world</div> */}
      <div>
      <Profile />  
       
    
       
        
      </div>
    </div>
  );
}

export default ProfileScreen;
