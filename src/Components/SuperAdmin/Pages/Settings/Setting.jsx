import * as React from "react";
import { TextField, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Createsetting } from "./Createsetting";
import { Company } from "./CompanyProfile/Company";
import AddressLocRoot from "./AddressLocRoot";

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


  const [compCheck, setCompCheck] = React.useState(false);

  return (
    <>
      {compCheck ? (
        <Createsetting />
      ) : (
        <>
          <div style={{ height: 400, width: "100%" }}>
            {/* <Toolbar /> */}

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
              
            </Tabs>

            
              {/* Company Tab */}
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Company />
              </TabPanel>

              {/* Address Location tab */}
              <TabPanel value={value} index={1} dir={theme.direction}>
               <AddressLocRoot />
              </TabPanel>

              {/* Users */}
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
           
            
          </div>
        </>
      )}
    </>
  );
}
