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

function Add_PredictionalData(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  let api = useAxios();

  const handleClose = () => {
    props.setAddEmp(false);
  };

  let getData = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const Gender = e.target.Gender.value;
    const SeniorCitizen = e.target.SeniorCitizen.value;
    const Partner = e.target.Partner.value;
    const Dependents = e.target.Dependents.value;
    const Tenure = e.target.Tenure.value;
    const PhoneService = e.target.PhoneService.value;
    const MultipleLines = e.target.MultipleLines.value;
    const InternetService = e.target.InternetService.value;
    const OnlineSecurity = e.target.OnlineSecurity.value;
    const OnlineBackup = e.target.OnlineBackup.value;
    const DeviceProtection = e.target.DeviceProtection.value;
    const TechSupport = e.target.TechSupport.value;
    const StreamingTV = e.target.StreamingTV.value;
    const StreamingMovies = e.target.StreamingMovies.value;
    const Contract = e.target.Contract.value;
    const PaperlessBilling = e.target.PaperlessBilling.value;
    const PaymentMethod = e.target.PaymentMethod.value;
    const MonthlyCharges = e.target.MonthlyCharges.value;
    const TotalCharges = e.target.TotalCharges.value;

    let postData = {
      id: id,
      Gender: Gender,
      SeniorCitizen: SeniorCitizen,
      Partner: Partner,
      Dependents: Dependents,
      Tenure: Tenure,
      PhoneService: PhoneService,
      MultipleLines: MultipleLines,
      InternetService: InternetService,
      OnlineSecurity: OnlineSecurity,
      OnlineBackup: OnlineBackup,
      DeviceProtection: DeviceProtection,
      TechSupport: TechSupport,
      StreamingTV: StreamingTV,
      StreamingMovies: StreamingMovies,
      Contract: Contract,
      PaperlessBilling: PaperlessBilling,
      PaymentMethod: PaymentMethod,
      MonthlyCharges: MonthlyCharges,
      TotalCharges: TotalCharges,
    };

    let response = await api.post(
      "/customer/api/customer/churn/add/",
      postData
    );
    if (response.status === 200) {
      alert("Customer Dataset Added Successfully");
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
        Add Predictional Data
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
                id="id"
                name="id"
                label="id"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Gender"
                name="Gender"
                label="Gender"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="SeniorCitizen"
                name="SeniorCitizen"
                label="SeniorCitizen"
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
            <Grid item xs={4}>
              <TextField
                id="Partner"
                name="Partner"
                label="Partner"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Dependents"
                name="Dependents"
                label="Dependents"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Tenure"
                name="Tenure"
                label="Tenure"
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
            <Grid item xs={4}>
              <TextField
                id="PhoneService"
                name="PhoneService"
                label="PhoneService"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="MultipleLines"
                name="MultipleLines"
                label="MultipleLines"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="InternetService"
                name="InternetService"
                label="InternetService"
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
            <Grid item xs={4}>
              <TextField
                id="OnlineSecurity"
                name="OnlineSecurity"
                label="OnlineSecurity"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="OnlineBackup"
                name="OnlineBackup"
                label="OnlineBackup"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="DeviceProtection"
                name="DeviceProtection"
                label="DeviceProtection"
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
            <Grid item xs={4}>
              <TextField
                id="TechSupport"
                name="TechSupport"
                label="TechSupport"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="StreamingTV"
                name="StreamingTV"
                label="StreamingTV"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="StreamingMovies"
                name="StreamingMovies"
                label="StreamingMovies"
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
            <Grid item xs={4}>
              <TextField
                id="Contract"
                name="Contract"
                label="Contract"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="PaperlessBilling"
                name="PaperlessBilling"
                label="PaperlessBilling"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="PaymentMethod"
                name="PaymentMethod"
                label="PaymentMethod"
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
            <Grid item xs={4}>
              <TextField
                id="MonthlyCharges"
                name="MonthlyCharges"
                label="MonthlyCharges"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="TotalCharges"
                name="TotalCharges"
                label="TotalCharges"
                multiline
                maxRows={4}
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

export default Add_PredictionalData;
