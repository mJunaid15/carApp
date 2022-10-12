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
import SelectPopover from "./SelectPopover";
import { CreateBtn } from "../../../Buttons";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Createsetting } from "./Createsetting";
import { Company } from "../Company/Company";

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

export default function AddressLocRoot() {
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
   
        
          <div style={{ height: 400, width: "100%" }}>
            {/* <Toolbar /> */}

            
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
              <Tab label="Location" {...a11yProps(0)} />
              <Tab label="Number Range" {...a11yProps(1)} />
              
            </Tabs>

            
              {/* Company Tab */}
              <TabPanel value={value} index={0} dir={theme.direction}>
              <div>
                 
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

              {/* Address Location tab */}
              <TabPanel value={value} index={1} dir={theme.direction}>
               
              </TabPanel>

           
            
          </div>
       
  );
}
