import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import useAxios from "../../authenticaton/useAxios";

export default function PredictionalDataTable() {
  const [columnHeaders, setColumnHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  let count = 0;

  let api = useAxios();
  let getEmployees = async () => {
    let response = await api.get("/api/employee/prediction/");
    if (response.status === 200) {
      setColumnHeaders(Object.keys(response.data[0]));
      setRows(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getEmployees();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      {loading ? (
        <Typography
          variant="h6"
          color="red"
          sx={{ marginLeft: 50, marginTop: 10 }}
        >
          {" "}
          Data Not Available........
          <br /> Please Add Data{" "}
        </Typography>
      ) : (
        <Paper sx={{ width: "165vh", overflow: "auto" }}>
          <TableContainer sx={{ maxHeight: 510, minHeight: 510 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columnHeaders.map((column) => (
                    <TableCell key={column} align="right">
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                        component={"div"}
                      >
                        {column.charAt(0).toUpperCase() + column.slice(1)}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * 8, page * 8 + 8).map((row) => {
                  return (
                    <TableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      sx={{ "&:hover": { background: "#f2ffff" } }}
                    >
                      {columnHeaders.map((column) => {
                        let value = row[column];

                        return (
                          <TableCell key={column} align="right">
                            <Typography
                              component={"div"}
                              sx={{
                                fontSize: "15px",
                              }}
                            >
                              {value}
                            </Typography>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </div>
  );
}
