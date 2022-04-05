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
    const Satisfaction_level = e.target.Satisfaction_level.value;
    const Last_evaluation = e.target.Last_evaluation.value;
    const Salary = e.target.Salary.value;
    const Department = e.target.Department.value;
    const Number_project = e.target.Number_project.value;
    const Average_montly_hours = e.target.Average_montly_hours.value;
    const Time_spend_company = e.target.Time_spend_company.value;
    const Work_accident = e.target.Work_accident.value;
    const Promotion_last_5years = e.target.Promotion_last_5years.value;

    let postData = {
      id: id,
      satisfaction_level: Satisfaction_level,
      last_evaluation: Last_evaluation,
      salary: Salary,
      department: Department,
      number_project: Number_project,
      average_montly_hours: Average_montly_hours,
      time_spend_company: Time_spend_company,
      work_accident: Work_accident,
      promotion_last_5years: Promotion_last_5years,
    };

    let response = await api.post("/api/employee/prediction/add/", postData);
    if (response.status === 200) {
      alert("Employee Dataset Added Successfully");
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
        Add Additional Data
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
                id="Satisfaction_level"
                name="Satisfaction_level"
                label="Satisfaction_level"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Last_evaluation"
                name="Last_evaluation"
                label="Last_evaluation"
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
                id="Salary"
                name="Salary"
                label="Salary"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Department"
                name="Department"
                label="Department"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Number_project"
                name="Number_project"
                label="Number_project"
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
                id="Average_montly_hours"
                name="Average_montly_hours"
                label="Average_montly_hours"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Time_spend_company"
                name="Time_spend_company"
                label="Time_spend_company"
                multiline
                maxRows={4}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="Work_accident"
                name="Work_accident"
                label="Work_accident"
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
                id="Promotion_last_5years"
                name="Promotion_last_5years"
                label="Promotion_last_5years"
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
