import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";

import useAxios from "../../authenticaton/useAxios";

function EditCustomer(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  let api = useAxios();

  const handleClose = () => {
    props.setOpen(false);
  };

  let updateData = async (e) => {
    const postData = {
      id: props.data.id,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      address: document.getElementById("address").value,
    };

    let response = await api.post("/customer/api/update-customer/", postData);
    if (response.status === 200) {
      alert("Customer Updated Successfully");
      window.location.reload();
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth="lg"
      open={props.open}
      onClose={handleClose}
    >
      <DialogTitle>
        Edit Customer
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          alignItems="flex-start"
          spacing={2}
          marginTop={2}
          marginBottom={2}
        >
          <Grid item xs={12}>
            <TextField
              id="name"
              name="name"
              label="Name"
              multiline
              maxRows={4}
              variant="outlined"
              color="secondary"
              defaultValue={props.data.name}
            />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-start"
          spacing={2}
          marginTop={2}
          marginBottom={2}
        >
          <Grid item xs={6}>
            <TextField
              fullWidth={true}
              id="email"
              type="email"
              label="Email"
              multiline
              maxRows={6}
              variant="outlined"
              color="secondary"
              defaultValue={props.data.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth={true}
              id="contact"
              label="Contact Number"
              multiline
              maxRows={4}
              variant="outlined"
              color="secondary"
              defaultValue={props.data.contact}
            />
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="flex-start"
          spacing={2}
          marginTop={2}
          marginBottom={2}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth={true}
              id="address"
              label="Address"
              multiline
              rows={2}
              variant="outlined"
              color="secondary"
              defaultValue={props.data.address}
            />
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="flex-start"
          spacing={2}
          marginTop={2}
          marginBottom={2}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth={true}
              id="salary"
              label="Salary"
              multiline
              rows={2}
              variant="outlined"
              color="secondary"
              defaultValue={props.data.salary}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={updateData} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditCustomer;
