import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";

import EmpTable from "./Employee/EmpTable";
import AddEmployee from "./Employee/AddEmployee";
import AdditionalData from "./Employee/AdditionalData";

const Employee = () => {
  const [addEmp, setAddEmp] = React.useState(false);
  const [additionalBtn, setAdditionalBtn] = React.useState(false);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component={"div"}>
          Employee{" "}
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            startIcon={<DataSaverOnIcon />}
            style={{ marginRight: "10px" }}
            onClick={() => {
              setAdditionalBtn(true);
            }}
          >
            Additional Data
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setAddEmp(true);
            }}
          >
            Add Employee
          </Button>
        </Box>
      </Box>

      <br />
      <EmpTable />
      {addEmp ? <AddEmployee addEmp={addEmp} setAddEmp={setAddEmp} /> : null}
      {additionalBtn ? (
        <AdditionalData
          additionalBtn={additionalBtn}
          setAdditionalBtn={setAdditionalBtn}
        />
      ) : null}
    </Box>
  );
};

export default Employee;
