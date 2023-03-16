import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: "10px",
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: "80px",
    borderBottom: "1px solid transparent",
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const Portfolio = "<Portfolio/>";

  return (
    <AppBar position="static" style={{ backgroundColor: "#010203" }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          {Portfolio}
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              About Me
            </Link>
            <Link to="/about" className={classes.link}>
              Skills
            </Link>
            <Link to="/contact" className={classes.link}>
              Projects
            </Link>
            <Link to="/faq" className={classes.link}>
              Experiences
            </Link>

            <Link to="/faq" className={classes.link}>
              Contact Me
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
