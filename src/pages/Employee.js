import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import EmpTable from "./Employee/EmpTable";
import AddEmployee from "./Employee/AddEmployee";

const Employee = () => {
  const [addEmp, setAddEmp] = React.useState(false);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Employee </Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={() => {
            setAddEmp(true);
          }}
        >
          Add Employee
        </Button>
      </Box>
      <br />
      <EmpTable />
      {addEmp ? <AddEmployee addEmp={addEmp} setAddEmp={setAddEmp} /> : null}
    </Box>
  );
};

export default Employee;
