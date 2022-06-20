import React from "react";
import { Typography } from "@material-ui/core";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HelpIcon from "@material-ui/icons/Help";
import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles((theme) => ({
  Visable: {
    [theme.breakpoints.only("sm")]: {
      marginTop: "15rem",
      display: "none",
    },
  },
}));
function Cards() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.Visable}>
        <Container maxWidth="lg">
          <Card
            className={classes.root}
            style={{
              maxWidth: "350px",
              height: "150px",
              marginTop: "-650px",
              marginLeft: "850px",
            }}
          >
            <CardContent></CardContent>
            <CardActions>
              <Typography style={{marginTop:'-70px'}}>
               
                Edit Profile
                <EditIcon style={{marginLeft:'180px',marginTop:'-20px'}}/>
             
             </Typography>
             <Typography style={{marginLeft:'-290px',marginTop:'60px'}}>
              Profile Language
              <HelpIcon style={{marginLeft:'140px',marginTop:'-50px'}}/>
              </Typography>
            </CardActions>
          </Card>

          <Card
            className={classes.root}
            style={{
              maxWidth: "350px",
              height: "400px",
              marginTop: "30px",
              marginLeft: "850px",
            }}
          >
            <CardContent></CardContent>
            <CardActions>
              <Typography style={{ marginTop: "-160px", marginLeft: "25px" }}>
                Connections
                <br></br>
                <Avatar
                  src="3.jpg"
                  style={{
                    backgroundColor: "whitesmoke",
                    width: "40px",
                    height: "40px",
                    marginTop: "10px",
                  }}
                />
              </Typography>
              <Typography style={{ marginTop: "-100px", marginLeft: "-25px" }}>
                sangee
                <br></br>
                working at TCS
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginLeft: "-150px",
                  marginTop: "-10px",
                  borderRadius: "80px",
                }}
              >
                Message
              </Button>

              <Typography>
                <Avatar
                  src="3.jpg"
                  style={{
                    backgroundColor: "whitesmoke",
                    width: "40px",
                    height: "40px",
                    marginTop: "90px",
                    marginLeft: "-140px",
                  }}
                />
              </Typography>
              <Typography style={{ marginTop: "110px", marginLeft: "-75px" }}>
                sushma
                <br></br>
                working at sconti
              </Typography>
              <br></br>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginLeft: "-160px",
                  marginTop: "190px",
                  borderRadius: "80px",
                }}
              >
                Message
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default Cards;
