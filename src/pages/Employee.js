import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import EmpTable from "./Employee/EmpTable";
import AddEmployee from "./Employee/AddEmployee";

const Employee = () => {
  let history = useNavigate();
  const [addEmp, setAddEmp] = React.useState(false);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Employee </Typography>
        {/* <Typography> */}
        {/* <Link to="/add/employee" style={{ textDecoration: "none" }}> */}
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={() => {
            console.log("add employee called ");
            setAddEmp(true);
            // history("/add/employee");
          }}
        >
          Add Employee
        </Button>
        {/* </Link> */}
        {/* </Typography> */}
      </Box>
      <br />
      <EmpTable />
      {addEmp ? <AddEmployee addEmp={addEmp} setAddEmp={setAddEmp} /> : null}
    </Box>
  );
};

export default Employee;
