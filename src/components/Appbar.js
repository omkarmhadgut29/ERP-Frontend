import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import AuthContext from "../authenticaton/AuthContext";

export default function Appbar(props) {
  const handleDrawerOpen = () => {
    props.setOpen(true);
  };

  let { logoutUser } = useContext(AuthContext);

  const theme = useTheme();

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: 240,
      width: `calc(100% - 240px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar position="fixed" open={props.open}>
      <Toolbar
        style={{ display: "flex !important", justifyContent: "space-between" }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "36px",
            ...(props.open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component={"div"}>
          Employee Relationship Management
        </Typography>
        <Button
          variant="contained"
          color="success"
          style={{ marginLeft: "10px" }}
          onClick={logoutUser}
        >
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
}
