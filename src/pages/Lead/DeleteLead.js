import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import useAxios from "../../authenticaton/useAxios";
import { Typography } from "@mui/material";

function DeleteLead(props) {
  let data = props.data;
  let api = useAxios();

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleDelete = async () => {
    props.setOpen(false);

    let response = await api.post("/lead/api/delete-lead/", data);
    if (response.status === 200) {
      alert("Lead Deleted Successfully");
      window.location.reload();
    }
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteLead;
