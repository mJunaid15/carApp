import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import Vehicles from "../Vehicles/Vehicles"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fdm from "./Fdm";
import { CreateBtn } from "../../../Buttons";
import { Createvehicle } from "../Vehicles/Createvehicle";
// import "./QuestionButton.css"
import kuhl from '../../../img/kuhl.png'
import CloudUploadIcon from  "@mui/icons-material/CloudUpload";
// import { QsAns } from "./QsAns";







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
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

const CreateFdm = () => {


    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    
  const [fdmCheck, setFdmCheck] = useState(false);

  return (
    <>
      {fdmCheck ? (
        <Fdm />
      ) : (
        <div>
          <Toolbar />
       
      
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
          <Tab label="General data" {...a11yProps(0)} />
          <Tab label=" Vehicles  " {...a11yProps(1)} />
          <Tab label="Vehicles Inspection" {...a11yProps(2)} />
          <Tab label="Photos" {...a11yProps(3)} />
          
        </Tabs>
       
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >


          {/* General */}
        <TabPanel value={value} index={0} dir={theme.direction}>

        <div>
          {/* Identification */}
        <div className="generl">
          <p>Overview</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                License plate
              </p>

              <TextField fullWidth label="Enter license plate no" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Vehicle manufacturer
              </p>

              <TextField
                fullWidth
                label="Enter your position"
                id=""
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-3">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Vehicle mode
            </p>

            <TextField
              fullWidth
              label="Enter Vehicle Model"
              id=""
            />
          </div>
        </div>


        <div className="generl mt-5">
          <p>Owner Details</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Owner Name              </p>

              <TextField fullWidth label="Country name" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                State / City              </p>

              <TextField
                fullWidth
                label="Enter your state with city "
                id=""
              />
            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Country               </p>

              <TextField fullWidth label="Select Country" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Email              </p>

              <TextField
                fullWidth
                label="Enter your email address"
                id=""
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-3">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Contact No            </p>

            <TextField
              fullWidth
              label="Contact no"
              id=""
            />
          </div>
        </div>


        <div className="generl mt-5">
          <p>General</p>
        </div>

        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Order date              </p>

              <TextField
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Inspection date              </p>

              <TextField
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Name of the expert              </p>

              <TextField
                fullWidth
                label="example"
                id=""
              />
            </div>
          </div>
        </div>



        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Clerk              </p>
              <TextField
                fullWidth
                label="example"
                id=""
              />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                order placement              </p>
              <TextField
                fullWidth
                label="Enter date"
                id=""
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                VAT rate              </p>

              <TextField
                fullWidth
                label="Enter date"
                id=""
              />
            </div>
          </div>
        </div>

        <div className="generl mt-5">
          <p>Address</p>
        </div>

        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Country               </p>

              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: "darkgray", }}>
                <option selected>Select Country</option>
                <option value="1">Pakistan</option>
                <option value="2">Iran</option>
                <option value="3">China</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                ZIP / City              </p>
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: "darkgray", }}>
                <option selected>Select City</option>
                <option value="1">Pakistan</option>
                <option value="2">Iran</option>
                <option value="3">China</option>
              </select>

            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="Street Number">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Street no               </p>

              <TextField fullWidth label="Select Country" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Mailbox              </p>

              <TextField
                fullWidth
                label="Enter your mail box"
                id=""
              />
            </div>
          </div>
        </div>


        <div className="flex justify-between mt-5 my-6">

          <CreateBtn
            // onClick={() => setCompanyCheck(!companyCheck)}
            style={{
              color: "gray",
              padding: "6px 22px",
              diplay: "flex",
              alignItems: "center",
            }}
            name="Cancel"
          />
          <div className="mr-5">
            <CreateBtn
              // onClick={() => setCompanyCheck(!companyCheck)}
              style={{
                color: "#000",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Next"
            />
          </div>
        </div>
        </div>

        </TabPanel>


        {/* Vehicle */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Createvehicle />
        </TabPanel>

        {/* Vehicle Inspection */}
        <TabPanel value={value} index={2} dir={theme.direction}>
       <div>
       <div className="Address mt-5">
          <p>Inspection</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Ort/Firma              </p>

              <TextField fullWidth label="Enter" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="Manufacturer">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Address              </p>

              <TextField fullWidth label="example" id="0317258963" />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                From              </p>

              <TextField
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                To           </p>

              <TextField
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-5">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Expert               </p>

              <TextField fullWidth label="Enter Expert name" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="Manufacturer">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Participator               </p>

              <TextField fullWidth label="example" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-2 mt-5">
            <div className="ZIP / City h-100 items-center justify-center flex">
              <Button
                // onClick={() => setCompanyCheck(!companyCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >Add New Item +
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between my-6 mt-5">

          <CreateBtn
            // onClick={() => setCompanyCheck(!companyCheck)}
            style={{
              color: "gray",
              padding: "6px 22px",
              diplay: "flex",
              alignItems: "center",
            }}
            name="Previous"
          />
          <div className="mr-5">
            <CreateBtn
              // onClick={() => setCompanyCheck(!companyCheck)}
              style={{
                color: "#000",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Next"
            />
          </div>
        </div>

       </div>
        </TabPanel>

        {/* Photos */}
        <TabPanel value={value} index={3} dir={theme.direction}>
        <div>
        <div className="flex justify-between border-slate-400">
            <h1 className="text-base text-bold mb-0 ml-5">Photos</h1>
            
          </div>

          <hr />

          
          <div className="generl">
            <p>Upload Photos</p>
          </div>

          <div className="flex items-center justify-center  p-5">
          <div className="flex flex-col items-center justify-center  p-5 space-y-1.5 border-gray-300 border-1">
            <CloudUploadIcon /> 
            <p className="text-center">Drag and Drop here</p>
            <p className="text-center">or</p>
            <CreateBtn name="Upload" />

           
          </div>
          </div>
         
          

          <div className="flex justify-between my-6">
            
                <CreateBtn
                  onClick={() => setFdmCheck(!fdmCheck)}
                  style={{
                    color: "#000",
                    padding: "6px 22px",
                    diplay: "flex",
                    alignItems: "center",
                  }}
                  name="Cancel"
                />
                <div className="mr-5">
                  <CreateBtn
                    onClick={() => setFdmCheck(!fdmCheck)}
                    style={{
                      color: "#000",
                      padding: "6px 22px",
                      diplay: "flex",
                      alignItems: "center",
                    }}
                    name="Next"
                  />
                  
                </div>
              </div>
          </div>
        </TabPanel>

    
      </SwipeableViews>
 
          

        
        </div>
      )}
    </>
  );
};

export default CreateFdm;
