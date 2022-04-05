import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";

import PredictionalDataTable from "./Customer/PredictionalDataTable";
import Add_PredictionalData from "./Customer/Add_PredictionalData";

function Customer_PredictionData() {
  const [addEmp, setAddEmp] = React.useState(false);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component={"div"}>
          Predictional Data{" "}
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            startIcon={<DataSaverOnIcon />}
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setAddEmp(true);
            }}
          >
            Add Predictional Data
          </Button>
        </Box>
      </Box>

      <br />
      <PredictionalDataTable />
      {addEmp ? (
        <Add_PredictionalData addEmp={addEmp} setAddEmp={setAddEmp} />
      ) : null}
    </Box>
  );
}

export default Customer_PredictionData;
