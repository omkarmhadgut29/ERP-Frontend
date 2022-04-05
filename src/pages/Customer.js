import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import CustomerTable from "./Customer/CustomerTable";
import AddCustomer from "./Customer/AddCustomer";

const Customer = () => {
  const [addCustomer, setAddCustomer] = React.useState(false);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component={"div"}>
          Customer{" "}
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            onClick={() => {
              setAddCustomer(true);
            }}
          >
            Add Customer
          </Button>
        </Box>
      </Box>
      <br />
      <CustomerTable />
      {addCustomer ? (
        <AddCustomer
          addCustomer={addCustomer}
          setAddCustomer={setAddCustomer}
        />
      ) : null}
    </Box>
  );
};

export default Customer;
