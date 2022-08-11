import * as React from "react";
import { TextField, Toolbar } from "@mui/material";
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

            <div className="flex  p-3     border-inherit cursor-pointer">
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
              <Tab label="PROFILE" {...a11yProps(3)} />
            </Tabs>

            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <div className="flex justify-end">
                  <div className="mr-5">
                    <CreateBtn
                      name="Create New"
                      icon={<AddIcon />}
                      onClick={() => setCompCheck(!compCheck)}
                    />
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
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-base text-bold mb-0 ml-5">
                      Address Location
                    </h1>
                    <div className="mr-5"></div>
                  </div>

                  <div className="locset d-flex mt-5">
                    <div className="company">
                      <p>Location</p>
                    </div>

                    <div className="Number Range ps-5">
                      <p>Number Range</p>
                    </div>
                  </div>

                  <hr />

                  <div className="generl">
                    <p>General</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="company">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Company Name
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your name"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="managing">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Managing Director
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your Position"
                          id="0317258963"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="contact">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Contact person
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your name"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Commerical">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Commerical Register
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your text"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mt-5">
                      <div className="Tax">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Tax number
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your company"
                          id="0317258963"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="Contactcent mt-5">
                    <p>Contact</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="E-mail">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          E-mail
                        </p>

                        <TextField
                          fullWidth
                          label="example@gmail.com"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Homepage">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Homepage
                        </p>

                        <TextField fullWidth label="http:/" id="0317258963" />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Telephone">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Telephone
                        </p>

                        <TextField
                          fullWidth
                          label="0317258963"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Homepage">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Mobile
                        </p>

                        <TextField
                          fullWidth
                          label="0317258963"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mt-5">
                      <div className="Fax">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Fax
                        </p>

                        <TextField fullWidth label="000000" id="0317258963" />
                      </div>
                    </div>
                  </div>

                  <div className="Address mt-5">
                    <p>Address</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="country">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Country
                        </p>
                        <TextField
                          fullWidth
                          label="Country name"
                          id="Country name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="ZIP / City">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          ZIP / City
                        </p>

                        <TextField fullWidth label="City" id="City" />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Street Number">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Street Number
                        </p>

                        <TextField
                          fullWidth
                          label="Street No*"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Mail">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Mailbox
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your mail box"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-8">
                      <div className="previ">
                        <button>Previous</button>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="nextbtn">
                        <button> Save </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-base text-bold mb-0 ml-5">
                      List Of Users
                    </h1>
                    <div className="mr-5"></div>
                  </div>

                  <div className="generl mt-4">
                    <p>General</p>
                  </div>

                  <div className="col-lg-6 mt-5">
                    <div className="Mail">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Main Location
                      </p>

                      <TextField
                        fullWidth
                        label="Select your option"
                        id="Enter your mail box"
                      />
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="First Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          First Name
                        </p>

                        <TextField
                          fullWidth
                          label="Ali"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Last Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Last Name
                        </p>

                        <TextField
                          fullWidth
                          label="Ahmed"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Salution">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Salution
                        </p>

                        <TextField
                          fullWidth
                          label="Hi"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Title">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Title
                        </p>

                        <TextField
                          fullWidth
                          label="Expert"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Birthday">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Birthday
                        </p>

                        <TextField
                          fullWidth
                          label="22-10-1994"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Password">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Password
                        </p>

                        <TextField
                          fullWidth
                          label="*******"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="STATUS d-flex mt-5">
                    <p>Status: </p>

                    <div class="form-check form-check-inline ps-5">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Active
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Not Active
                      </label>
                    </div>
                  </div>

                  <div className="Contactcent mt-5">
                    <p>Contact</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="E-mail">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          E-mail
                        </p>

                        <TextField
                          fullWidth
                          label="example@gmail.com"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Homepage">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Homepage
                        </p>

                        <TextField fullWidth label="http:/" id="0317258963" />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Telephone">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Telephone
                        </p>

                        <TextField
                          fullWidth
                          label="0317258963"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Homepage">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Mobile
                        </p>

                        <TextField
                          fullWidth
                          label="0317258963"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mt-5">
                      <div className="Fax">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Fax
                        </p>

                        <TextField fullWidth label="000000" id="0317258963" />
                      </div>
                    </div>
                  </div>

                  <div className="Address mt-5">
                    <p>Address</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="country">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Country
                        </p>
                        <TextField
                          fullWidth
                          label="Country name"
                          id="Country name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="ZIP / City">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          ZIP / City
                        </p>

                        <TextField fullWidth label="City" id="City" />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Street Number">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Street Number
                        </p>

                        <TextField
                          fullWidth
                          label="Street No*"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Mail">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Mailbox
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your mail box"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-8">
                      <div className="previ">
                        <button>Previous</button>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="nextbtn">
                        <button> Next </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-5">
                    <h1 className="text-base text-bold mb-0 ml-5">
                      Permissions
                    </h1>
                    <div className="mr-5"></div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Company
                      </p>
                      <div className="slct">
                        <select
                          class="form-select form-select-lg mb-0 w-100"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Select your option</option>
                          <option value="1">Experts</option>
                          <option value="2">Clerks</option>
                          <option value="3">Company Admin</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Role
                      </p>
                      <div className="slct">
                        <select
                          class="form-select form-select-lg mb-0 w-100"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Select your option</option>
                          <option value="1">Experts</option>
                          <option value="2">Clerks</option>
                          <option value="3">Company Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>General</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Administrator
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Sachverstandiger
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Sachbearbeiter
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Change Location
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Vehicle Management</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Manage Addresses</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Dossier</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Protocol / Logging</p>
                  </div>

                  <div className="col-lg-3">
                    <div class="form-check mt-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Read
                      </label>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-8">
                      <div className="previ">
                        <button>Previous</button>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="nextbtn">
                        <button> Next </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
                <div>
                  <div className="flex justify-between mt-5">
                    <h1 className="text-base text-bold mb-0 ml-5">
                      Permissions
                    </h1>
                    <div className="mr-5"></div>
                  </div>

                  <div className="generl mt-5">
                    <p>General</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Profile Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Profile Name
                        </p>

                        <TextField
                          fullWidth
                          label="Country name"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Location">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Location
                        </p>

                        <TextField
                          fullWidth
                          label="  "
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Design</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Letterfoot">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Letterfoot
                        </p>

                        <TextField fullWidth label="Upload" id="Street No*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Letterfoot">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Letterfoot
                        </p>

                        <TextField fullWidth label="Upload" id="Upload" />
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Sender</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Letterfoot">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Sender Address
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your address"
                          id="Street No*"
                        />
                        <TextField fullWidth label="  " id="Street No*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Sender Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Sender Name
                        </p>

                        <TextField fullWidth label="Enter name" id="Upload" />
                        <TextField fullWidth label="  " id="Upload" />
                      </div>
                    </div>

                    <div className="col-lg-6 mt-5">
                      <div className="Sender Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          
                          Contact Details
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your contact details"
                          id="Upload"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Signature</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="upload">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Signature
                        </p>

                        <TextField fullWidth label="upload" id="Street No*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Rubber Stamp">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Rubber Stamp
                        </p>

                        <TextField
                          fullWidth
                          label="upload"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Email</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Stmp Server">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Stmp Server
                        </p>

                        <TextField
                          fullWidth
                          label="Enter Server"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Stmp Port">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Stmp Port
                        </p>

                        <TextField
                          fullWidth
                          label="Enter port"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="User Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Enter your name
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your name"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Password">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Password
                        </p>

                        <TextField
                          fullWidth
                          label="********"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="add mt-5">
                        <button> Test Connection </button>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Signature and Imprint">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Signature and Imprint
                        </p>

                        <TextField
                          fullWidth
                          label="Enter name"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-5">
                    <h1 className="text-base text-bold mb-0 ml-5"></h1>
                    <div className="mr-5"></div>
                  </div>

                  <div className="edbutn text-end">
                    <button
                      style={{
                        background: "#5A4A42",
                        color: "white",
                        padding: "10px",
                        width: "120px",
                        borderRadius: "10px",
                        height: "50px",
                      }}
                    >
                      
                      Edit 
                    </button>
                  </div>

                  <div className="generl mt-5">
                    <p>General</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Profile Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Profile Name
                        </p>

                        <TextField
                          fullWidth
                          label="Country name"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Location">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Location
                        </p>

                        <TextField
                          fullWidth
                          label="  "
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Design</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Letterfoot">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Letterfoot
                        </p>

                        <TextField fullWidth label="Upload" id="Street No*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Letterfoot">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Letterfoot
                        </p>

                        <TextField fullWidth label="Upload" id="Upload" />
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Sender</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Letterfoot">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Sender Address
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your address"
                          id="Street No*"
                        />
                        <TextField fullWidth label="  " id="Street No*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Sender Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Sender Name
                        </p>

                        <TextField fullWidth label="Enter name" id="Upload" />
                        <TextField fullWidth label="  " id="Upload" />
                      </div>
                    </div>

                    <div className="col-lg-6 mt-5">
                      <div className="Sender Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          
                          Contact Details
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your contact details"
                          id="Upload"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Signature</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="upload">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Signature
                        </p>

                        <TextField fullWidth label="upload" id="Street No*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Rubber Stamp">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Rubber Stamp
                        </p>

                        <TextField
                          fullWidth
                          label="upload"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Email</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Stmp Server">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Stmp Server
                        </p>

                        <TextField
                          fullWidth
                          label="Enter Server"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Stmp Port">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Stmp Port
                        </p>

                        <TextField
                          fullWidth
                          label="Enter port"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="User Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Enter your name
                        </p>

                        <TextField
                          fullWidth
                          label="Enter your name"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Password">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Password
                        </p>

                        <TextField
                          fullWidth
                          label="********"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="add mt-5">
                        <button> Test Connection </button>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Signature and Imprint">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Signature and Imprint
                        </p>

                        <TextField
                          fullWidth
                          label="Enter name"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
