import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button, TextField, useMediaQuery } from "@material-ui/core";

import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "./ui/ButtonArrow";


const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7em",
    height: 35,
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  return (
    <Grid container direction="row">
      <Grid item container direction="column" justifyContent="center" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue }}
          >
            We're waiting...
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={phoneIcon}
              alt="phone icon"
              style={{ marginRight: "0.5em" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              (555) 555-5555
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={emailIcon}
              alt="email icon"
              style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              krenaldi@comcast.net
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            value={message}
            id="message"
            onChange={(event) => setMessage(event.target.value)}
            multiline
            rows={10}
          />
        </Grid>
        <Grid item>
          <Button variant="contained">
            Send Message <img src={airplane} alt="paper airplane" />
          </Button>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} alignItems="center" lg={9}>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid container deirection="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Take advantage of the 21st century.
              </Typography>
              <Grid
                container
                justifyContent={matchesSM ? "center" : undefined}
                item
              >
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  // onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            // onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
