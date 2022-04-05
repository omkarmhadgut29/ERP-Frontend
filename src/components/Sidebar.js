import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { styled, useTheme } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";

import Appbar from "./Appbar";
import GlobalVar from "../context/GlobalVar";
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/Customer";
import Employee from "../pages/Employee";
import Employee_PredictionalData from "../pages/Employee_PredictionalData";
import Customer_PredictionData from "../pages/Customer_PredictionData";
import Leads from "../pages/Leads";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ classes }) {
  let history = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  let { setCurrentPage } = useContext(GlobalVar);

  const object = {
    Dashboard: <DashboardIcon />,
    Employees: <PersonIcon />,
    "Employee Statistics": <DataSaverOnIcon />,
    Customers: <GroupIcon />,
    "Customer Churn": <DataSaverOnIcon />,
    Leads: <PeopleOutlineIcon />,
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listClick = (currentPage) => {
    setCurrentPage(currentPage);
    if (currentPage === "dashboard") {
      history("/");
    } else if (currentPage === "employee statistics") {
      history("/employees/prediction");
    } else if (currentPage === "customer churn") {
      history("/customer/churn");
    } else {
      history(`/${currentPage}`);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* /**
       * * Appbar
       */}
      <Appbar open={open} setOpen={setOpen} />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {Object.entries(object).map(([key, value]) => (
            <ListItem
              button
              key={key}
              onClick={() => listClick(key.toLowerCase())}
            >
              <ListItemIcon>{value}</ListItemIcon>
              <ListItemText primary={key} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Routes>
          <Route element={<Dashboard />} path="/" exact />
          <Route element={<Customer />} path="/customers" />
          <Route element={<Employee />} path="/employees" />
          <Route
            element={<Employee_PredictionalData />}
            path="/employees/prediction"
          />
          <Route element={<Customer_PredictionData />} path="/customer/churn" />
          <Route element={<Leads />} path="/leads" />
        </Routes>
      </Box>
    </Box>
  );
}
