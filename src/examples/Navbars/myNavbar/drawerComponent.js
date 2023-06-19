import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import makeStyles from "@mui/styled-engine";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/material/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
}));

function DrawerComponent() {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/tarifasMoviles">Tarifas Móviles</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contacto">Contacto</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/politicaPrivacidad">Política de Privacidad</Link>
            </ListItemText>
          </ListItem>
        </List>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
      </Drawer>
    </>
  );
}
export default DrawerComponent;
