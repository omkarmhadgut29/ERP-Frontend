import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import useAxios from "../../authenticaton/useAxios";
import { Typography } from "@mui/material";

function DeleteEmployee(props) {
  let data = props.data;
  const items = ["name", "email", "address", "contact"];

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Do you wonted to delete the record?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="h6" component={"span"}>
            Name: {data.name} <br />
          </Typography>
          <Typography variant="h6" component={"span"}>
            Email: {data.email} <br />
          </Typography>
          <Typography variant="h6" component={"span"}>
            Contact: {data.contact} <br />
          </Typography>
          <Typography variant="h6" component={"span"}>
            Address: {data.address} <br />
          </Typography>
        </DialogContentText>
        {console.log(props.data)}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteEmployee;
