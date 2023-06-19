import React from "react";
import { AppBar, Toolbar, CssBaseline, useTheme, useMediaQuery } from "@mui/material";
import makeStyles from "@mui/styled-engine";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
import DrawerComponent from "./drawerComponent";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function MyNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky">
      <CssBaseline />
      <Toolbar>
        <MKTypography variant="h4" className={classes.logo}>
          Ponwifi
        </MKTypography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/tarifasMoviles" className={classes.link}>
              Tarifas Móviles
            </Link>
            <Link to="/contacto" className={classes.link}>
              Contacto
            </Link>
            <Link to="/politicaPrivacidad" className={classes.link}>
              Política de Privacidad
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default MyNavbar;
