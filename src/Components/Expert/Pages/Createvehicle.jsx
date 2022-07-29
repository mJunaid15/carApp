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
import SearchIcon from "@mui/icons-material/Search";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { CreateBtn } from "../../Buttons";


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
  

export const Createvehicle = () => {

 
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    
  const [companyCheck, setCompanyCheck] = useState(false);

  return (
    <>
      {companyCheck ? (
        <Vehicles />
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
          <Tab label="Creating vehicle" {...a11yProps(0)} />
          <Tab label=" Equipment  " {...a11yProps(1)} />
          <Tab label="Tries" {...a11yProps(2)} />
         
        </Tabs>
       
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>

          <div>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Create Vehicle</h1>
            
            <div className="flex">
            <div class="mainSearchInput items-center justify-center flex mr-3 pl-4 w-150">
          
            <input

              className=" bg-transparent "
              type="text"
              name="search"
              placeholder="Search Vehicles"
            />
          </div>
            <div className="mr-5">
              <Button
                onClick={() => setCompanyCheck(!companyCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                Search
              </Button>
            </div>
            </div>
          </div>

          <hr />

          
          {/* Identification */}
          <div className="generl">
            <p>Identification</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company Name
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
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


            <div className="col-lg-4">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Managing Director
                </p>

                <div className="row ">
                  <div className="col-lg-6 pr-0">
                  <TextField
                  fullWidth
                  label="example text"
                  id="0317258963"
                />
                  </div>
                  <div className="col-lg-6 ps-0 ">
                  <TextField
                  fullWidth
                  label="example text"
                  id="0317258963"
                />
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact person
                </p>

                <TextField fullWidth label="Enter your name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField fullWidth label="Enter your tax" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4 ">
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


          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact person
                </p>

                <TextField fullWidth label="Enter your name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField fullWidth label="Enter your tax" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4 ">
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


          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact person
                </p>

                <TextField fullWidth label="Enter your name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField fullWidth label="Enter your tax" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4 ">
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


          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Logo/Width/height
                </p>

                <div className="row ">
                  <div className="col-lg-4 pr-0">
                  <TextField
                  fullWidth
                  label="example text"
                  id="0317258963"
                />
                  </div>
                  <div className="col-lg-4 ps-0 ">
                  <TextField
                  fullWidth
                  label="example text"
                  id="0317258963"
                />
                  </div>

                  <div className="col-lg-4 ps-0 ">
                  <TextField
                  fullWidth
                  label="example text"
                  id="0317258963"
                />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField fullWidth label="Enter your tax" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4 ">
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


          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact person
                </p>

                <TextField fullWidth label="Enter your name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField fullWidth label="Enter your tax" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4 ">
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



          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact person
                </p>

                <TextField fullWidth label="Enter your name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField fullWidth label="Enter your tax" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4 ">
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
            <div className=" mt-5">
              <Button
                onClick={() => setCompanyCheck(!companyCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                
                Add New Field +
              </Button>
              </div>
          </div>

                  {/* General */}
          <div className="Contactcent mt-5">
            <p>General</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="E-mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                <TextField fullWidth label="exam@gmail.com" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField fullWidth label="http:/" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField fullWidth label="http:/" id="0317258963" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="E-mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                <TextField fullWidth label="exam@gmail.com" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField fullWidth label="http:/" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField fullWidth label="http:/" id="0317258963" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-5">
              <div className="E-mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                <TextField fullWidth label="exam@gmail.com" id="0317258963" />
              </div>
              <div className=" mt-5">
              <Button
                onClick={() => setCompanyCheck(!companyCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                
                Add New Field +
              </Button>
              </div>
            </div>


            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField fullWidth label="http:/" id="0317258963" />
              </div>
            </div>
          </div>

          <div className="Address mt-5">
            <p>Milage</p>
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

                <TextField fullWidth label="Data Source" id="City" />
              </div>
            </div>
          </div>


          <div className="row mt-5">
            <div className="col-lg-4 ">
              <div className="country flex justify-center items-center pt-4 ">
                <span style={{ fontWeight: "bold", fontSize: "14px" }} className='mr-2'>Milege</span>

                
                <FormControl component="fieldset" >
      
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label={<Typography style={{fontSize: "13px"}}>Kilometer</Typography>}
          
          
        />
        <FormControlLabel
          value="start"
          control={<Radio color='primary' />}
          label={<Typography style={{fontSize: "13px"}}>Miles</Typography>}

        />
        
        <FormControlLabel value="end" control={<Radio color="primary" />} 
               label={<Typography style={{fontSize: "13px"}}>Hours</Typography>}
 style={{fontSize: "14px"}} />

      </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="ZIP / City">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  ZIP / City
                </p>

                <TextField fullWidth label="City" id="City" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="ZIP / City h-100 items-center justify-center flex">
              <Button
                onClick={() => setCompanyCheck(!companyCheck)}
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


         




          <div className="Address mt-5">
            <p>Miscellaneous</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="country">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>
                <TextField fullWidth label="Street No*" id="Street No*" />
               
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

                <TextField fullWidth label="Data Source" id="City" />
              </div>
            </div>
          </div>


          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="country">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>
                <TextField fullWidth label="Street No*" id="Street No*" />
               
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
              <div className="ZIP / City h-100 items-center justify-center flex">
              <Button
                onClick={() => setCompanyCheck(!companyCheck)}
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

          <div className="flex justify-between my-6">
            
                <CreateBtn
                  onClick={() => setCompanyCheck(!companyCheck)}
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
                    onClick={() => setCompanyCheck(!companyCheck)}
                    style={{
                      color: "#000",
                      padding: "6px 22px",
                      diplay: "flex",
                      alignItems: "center",
                    }}
                    name="Create"
                  />
                </div>
              </div>

          

          
          </div>

        </TabPanel>


        {/* Equipments */}
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div>
          <hr />
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Equipments</h1>
            
            
          </div>

          <hr />

          
          {/* Identification */}
          <div className="generl">
            <p>List of Equipments</p>
          </div>

          <input
              className="w-full ps-5 p-3 h-full  bg-transparent rounded border-1 mt-5 w-50"
              type="text"
              name="search"
              placeholder="Search Vehicles, Expert or File"
            />

        < div className="row mt-5">
            <div className="col-lg-4">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Standard Name
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 Extras
                </p>

                <TextField
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
                />
              </div>
            </div>


            <div className="col-lg-4">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 Extras
                </p>

                <TextField
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
                />
              </div>
            </div>
          </div>
         

          <div className="flex justify-between my-6">
            
                <CreateBtn
                  onClick={() => setCompanyCheck(!companyCheck)}
                  style={{
                    color: "#000",
                    padding: "6px 22px",
                    diplay: "flex",
                    alignItems: "center",
                  }}
                  name="Previous"
                />
                <div className="mr-5">
                  <CreateBtn
                    onClick={() => setCompanyCheck(!companyCheck)}
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
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        
      </SwipeableViews>
 
          

        
        </div>
      )}
    </>
  );
};
