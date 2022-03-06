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

import Checkbox from "@mui/material/Checkbox";

import useAxios from "../../authenticaton/useAxios";

export default function StickyHeadTable() {
  const [columnHeaders, setColumnHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  let api = useAxios();
  let getEmployees = async () => {
    let response = await api.get("/employees/");
    if (response.status === 200) {
      let column = Object.keys(response.data[0]);
      column.splice(response.data.indexOf("eimage") - 1, 1);
      setColumnHeaders(column);
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
        <span>loading</span>
      ) : (
        <Paper sx={{ width: "100%", overflow: "auto" }}>
          <TableContainer sx={{ maxHeight: 510 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <Checkbox
                    // checked={checked}
                    // onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    disabled
                  />
                  {columnHeaders.map((column) => (
                    <TableCell key={column} align="right">
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
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
                    <>
                      <TableRow
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        sx={{ "&:hover": { background: "#f2ffff" } }}
                      >
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        {columnHeaders.map((column) => {
                          let value;
                          if (parseInt(row[column])) {
                            value = parseInt(row[column]);
                          } else {
                            value = String(row[column]);
                          }
                          return (
                            <TableCell key={column} align="right">
                              <Typography
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
                    </>
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
