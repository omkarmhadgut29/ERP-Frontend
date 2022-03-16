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

function EditEmployee() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  let api = useAxios();

  const handleClose = () => {
    props.setAddEmp(false);
  };

  let getData = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const middleName = e.target.middleName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const contact = e.target.contact.value;
    const address = e.target.address.value;
    const salary = e.target.salary.value;

    let postData = {
      name: firstName + " " + middleName + " " + lastName,
      email: email,
      contact: contact,
      address: address,
      salary: salary,
    };

    let response = await api.post("/api/employee/add/", postData);
    if (response.status === 200) {
      alert("Employee Added Successfully");
      window.location.reload();
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth="lg"
      open={props.addEmp}
      onClose={handleClose}
    >
      <DialogTitle>
        Add Employee
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
      <form onSubmit={getData}>
        <DialogContent>
          <Grid
            container
            alignItems="flex-start"
            spacing={2}
            marginTop={2}
            marginBottom={2}
          >
            <Grid item xs={4}>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="middleName"
                label="Middle Name"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="lastName"
                label="Last Name"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
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
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EditEmployee;
