import * as React from "react";
import { Toolbar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SelectPopover from "../SelectPopover";
import { CreateBtn } from "../../Buttons";

import { Button } from "@mui/material";
import Vehicles from "./Vehicles";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Createsetting } from "./Createsetting";

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Setting() {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Company", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const [compCheck, setCompCheck] = React.useState(false);

  return (
    <>
      {compCheck ? (
        <Createsetting />
      ) : (
        <>
        <div style={{ height: 400, width: "100%" }}>
        <Toolbar />
  
        <div className="flex  p-3  border-inherit cursor-pointer">
          <h1 className="mb-0 text-sm text-black font-semibold me-3">
            Company Settings
          </h1>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor="inherit"
          variant=""
          aria-label="full width tabs example"
          sx={{
            "& button:hover": { background: "#fff" },
            "& button.Mui-selected": {
              background: "#fff",
              color: "#000",
            },
          }}
        >
          <Tab label="Company" {...a11yProps(0)} />
          <Tab label=" Address Location  " {...a11yProps(1)} />
          <Tab label="Users" {...a11yProps(2)} />
        </Tabs>
  
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="flex justify-end">
              <div className="mr-5">
                <CreateBtn name="Create New" icon={<AddIcon />}  onClick={() => setCompCheck(!compCheck)}/>
              </div>
            </div>
  
            <div
              className="p-3  mt-2"
              style={{
                background: "#F4E9E4",
                boxShadow: "inset 0px -1px 0px #F0F0F0",
              }}
            >
              <h1 className="text-base  mb-0 ml-5">Company</h1>
            </div>
  
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Company name</TableCell>
                    <TableCell>Mobile number</TableCell>
  
                    <TableCell>Commercial Register </TableCell>
                    <TableCell align="center">Address Location</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <p className="mb-0"> Name</p>
                      <p className="mb-0 text-slate-400">Clerk Name</p>
                    </TableCell>
                    <TableCell align="center">ABC 345</TableCell>
                    <TableCell align="center">Owner Name</TableCell>
                    <TableCell align="center">22/May/2022</TableCell>
                    <TableCell align="center">
                      <SelectPopover />
                    </TableCell>
                  </TableRow>
  
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <p className="mb-0"> Name</p>
                      <p className="mb-0 text-slate-400">Clerk Name</p>
                    </TableCell>
                    <TableCell align="center">ABC 345</TableCell>
                    <TableCell align="center">Owner Name</TableCell>
                    <TableCell align="center">22/May/2022</TableCell>
                    <TableCell align="center">
                      <SelectPopover />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <p className="mb-0"> Name</p>
                      <p className="mb-0 text-slate-400">Clerk Name</p>
                    </TableCell>
                    <TableCell align="center">ABC 345</TableCell>
                    <TableCell align="center">Owner Name</TableCell>
                    <TableCell align="center">22/May/2022</TableCell>
                    <TableCell align="center">
                      <SelectPopover />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <p className="mb-0"> Name</p>
                      <p className="mb-0 text-slate-400">Clerk Name</p>
                    </TableCell>
                    <TableCell align="center">ABC 345</TableCell>
                    <TableCell align="center">Owner Name</TableCell>
                    <TableCell align="center">22/May/2022</TableCell>
                    <TableCell align="center">
                      <SelectPopover />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div className="mt-3 flex justify-end">
              <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </div>
      </>
       
        )}
    </>
   
  );
}
