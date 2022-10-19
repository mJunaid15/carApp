import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import Vehicles from "./Vehicles";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fdm from "./Fdm";
import { CreateBtn } from "../../Buttons";
import { Createvehicle } from "./Createvehicle";
import "./QuestionButton.css"
import kuhl from '../../img/kuhl.png'
import CloudUploadIcon from  "@mui/icons-material/CloudUpload";
import { QsAns } from "./QsAns";





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
  

export const CreateFdm = () => {


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
          <Tab label="Questions" {...a11yProps(4)} />
        </Tabs>
       
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >


          {/* General */}
        <TabPanel value={value} index={0} dir={theme.direction}>

          <div>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">General Data</h1>
            <div className="mr-5">
              <Button
                onClick={() => setFdmCheck(!fdmCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                back
              </Button>
            </div>
          </div>

          <hr />

          
          <div className="generl">
            <p>Overview</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company Name
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Managing Director
                </p>

                <TextField
                  fullWidth
                  label="Enter your position"
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

                <TextField fullWidth label="Enter your name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField fullWidth label="Enter your tax" id="0317258963" />
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
            <p>Owner Details</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="E-mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                <TextField fullWidth label="exam@gmail.com" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

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

                <TextField fullWidth label="0317258963" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>

                <TextField fullWidth label="0317258963" id="0317258963" />
              </div>
            </div>
          </div>

          <div className="Address mt-5">
            <p>General</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="country">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>

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
                  ZIP / City
                </p>

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
                  ZIP / City
                </p>

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


          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="country">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>

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
                  ZIP / City
                </p>

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
                  ZIP / City
                </p>

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

          

          

          <div className="Address mt-5">
            <p>Address</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="country">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>

                <TextField fullWidth label="Country name" id="Country name" />
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

                <TextField fullWidth label="Street No*" id="Street No*" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

                <TextField
                  fullWidth
                  label="Enter your mail box"
                  id="Enter your mail box"
                />
              </div>
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


        {/* Vehicle */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Createvehicle />
        </TabPanel>

        {/* Vehicle Inspection */}
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Vehicle Inspection</h1>
            <div className="mr-5">
              <Button
                onClick={() => setFdmCheck(!fdmCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                back
              </Button>
            </div>
          </div>

          <hr />

          
          <div className="generl">
            <p>Inspection</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company Name
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Managing Director
                </p>

                <TextField
                  fullWidth
                  label="Enter your position"
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
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

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

          <div className="row mt-5">
            <div className="col-lg-5">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company Name
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Managing Director
                </p>

                <TextField
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-2 flex justify-center items-end">
              <div className="managing">
                

                <div className=" ">
              <Button
                onClick={() => setFdmCheck(!fdmCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                  height: '55px'
                }}
              >
                
                Add New Field +
              </Button>
              </div>
              </div>
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

        {/* Questions */}
        <TabPanel value={value} index={4} dir={theme.direction}>
          
          <div>

          <div className="flex justify-between border-slate-400">
            <h1 className="text-base text-bold mb-0 ml-5">Questions</h1>
            
          </div>

          <hr />

          
          <div className="generl">
            <p>Questions</p>
          </div>

          <div className="row ">
            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

           
          </div>


          <div className="row ">
            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

           
          </div>



          <div className="row ">
            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
            </div>

            <div className="col-lg-3 col-md-6 mt-5">
            <button type="button" className="button2">
            <span className="button__icon">
                2
            </span>
           

            
            <span className="button__text ">
            <img src={kuhl} alt="kuhl" className="mr-2"/>
                
                Kühlsystem</span>
            
            </button>
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
                  name="previous"
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
                    name="FINSIH convert PDF"
                  />
                  
                </div>
              </div>


              </div>

              {/* <QsAns /> */}

       

        </TabPanel>
      </SwipeableViews>
 
          

        
        </div>
      )}
    </>
  );
};
