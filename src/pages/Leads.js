import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import LeadTable from "./Lead/LeadTable";
import AddLead from "./Lead/AddLead";

export default function Leads() {
  const [addLead, setAddLead] = React.useState(false);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component={"div"}>
          Leads{" "}
        </Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={() => {
            setAddLead(true);
          }}
        >
          Add Lead
        </Button>
      </Box>
      <br />
      <LeadTable />
      {addLead ? <AddLead addLead={addLead} setAddLead={setAddLead} /> : null}
    </Box>
  );
}
