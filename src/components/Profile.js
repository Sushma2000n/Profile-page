import React from "react";
import { Typography } from "@material-ui/core";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";


import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


import { makeStyles} from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";


const useStyles = makeStyles((theme) => ({
  Visable: {
    [theme.breakpoints.only("sm")]: {
      marginTop: "15rem",
      display: "none",
    },
  },
}));
function Profile() {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <div className={classes.Visable}>
        <Container maxWidth="lg">
          <Card
            className={classes.root}
            style={{
              maxWidth: "700px",
              height: "400px",
              marginTop: "1px",
              marginLeft: "60px",
            }}
          >
            <CardContent 
          
              style={{ backgroundColor: "#eaeaea", height: "100px" }}
            ></CardContent>
            <CardActions>
              <Avatar alt="Remy " src="3.jpg"
                style={{
                  
                  width: "90px",
                  height: "90px",
                  marginTop: "-210px",
                }}
              />

              <Typography style={{ marginTop: "-30px", marginLeft: "-80px" }}>
                Sushma N
              </Typography>
              <Typography style={{ marginTop: "50px", marginLeft: "-80px" }}>
                Working at the Scontinent technologies
              </Typography>
              <Typography style={{ marginTop: "140px", marginLeft: "-278px" }}>
                Bangalore
              </Typography>
              <Typography
                style={{
                  marginTop: "70px",
                  marginLeft: "-278px",
                  fontColor: "blue",
                }}
              >
                Bangalore
              </Typography>
              
              <Typography style={{ marginTop: "-160px", marginLeft: "530px" }}>
                The Oxford College Of <br></br>Engineering
              </Typography>
              <EditIcon style={{ marginTop: "-230px", marginLeft:'40px' }}></EditIcon>
              <Button variant="contained" color="primary" style={{marginLeft:'-600px',marginTop:'230px', borderRadius:'80px'}}>
  Add Profile Details
</Button>
<Button variant="contained" color="primary" style={{marginLeft:'30px',marginTop:'230px', borderRadius:'80px'}}>
  More About Me
</Button>
            
          

    
    </CardActions>
          </Card>
  
          <Card className={classes.root}
           style={{
            maxWidth: "700px",
            height: "230px",
            marginTop: "40px",
            marginLeft: "60px",
            
          }}>
      <CardContent>
        <Typography>Analytics</Typography>
        <br></br>
        
        <Typography>
        <AccountCircleIcon/>
          4 Profile views
       

        </Typography>
        <Typography style={{fontSize:'12px',marginLeft:'20px'}}>Check views of 
          <br></br>
          your profile</Typography>
          <Typography style={{fontSize:'15px',marginLeft:'190px',marginTop:'-65px'}}>
          <ArticleIcon style={{marginTop:'-5px'}}/>
            20 Post views
          </Typography>
          <Typography style={{fontSize:'12px',marginLeft:'210px'}}>Check who sees 
          <br></br>
          your posts</Typography>
          <Typography style={{fontSize:'15px',marginLeft:'390px',marginTop:'-65px'}}> 
          <SearchIcon/>
          20 searches
          </Typography>
          <Typography style={{fontSize:'12px',marginLeft:'410px'}}>search history for 
          <br></br>
          your profile</Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
         

        </Container>
      </div>
    </div>
  );
}

export default Profile;
