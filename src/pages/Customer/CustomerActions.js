import { Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import DeleteCustomer from "./DeleteCustomer";
import EditCustomer from "./EditCustomer";

const options = ["Edit Details", "Delete"];

const CustomerActions = (props) => {
  const [deleteBox, setDeleteBox] = React.useState(false);
  const [editBox, setEditBox] = React.useState(false);

  const handleClickdeleteBox = () => {
    setDeleteBox(true);
  };

  const handleClickEditBox = () => {
    setEditBox(true);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuItemClick = (event, index) => {
    setOpen(false);
    if (options[index] === "Edit Details") {
      handleClickEditBox();
    } else if (options[index] === "Delete") {
      handleClickdeleteBox();
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <Box>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button onClick={handleToggle}>
          Actions <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        // role={undefined}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {deleteBox ? (
        <DeleteCustomer
          open={deleteBox}
          setOpen={setDeleteBox}
          data={props.data}
        />
      ) : null}
      {editBox ? (
        <EditCustomer open={editBox} setOpen={setEditBox} data={props.data} />
      ) : null}
    </Box>
  );
};

export default CustomerActions;
