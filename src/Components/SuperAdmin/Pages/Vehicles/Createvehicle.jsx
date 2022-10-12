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
import { CreateBtn } from "../../../Buttons";
import Tires from '../../../img/Tires.png'



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

  const [milage, setMilage] = React.useState()

  

  const handleMilage = (e) => {
    setMilage(e.target.value)
  }

 
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
          <Tab label="Tires" {...a11yProps(2)} />
         
        </Tabs>
       
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* Create Vehicles */}
        <TabPanel value={value} index={0} dir={theme.direction}>

          <div>
            
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                License Plate              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Chassis Number              </p>

              <TextField
                fullWidth
                label="example vin"
                id="0317258963"
              />
            </div>
          </div>


          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>

                HSN/TSN
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <TextField
                    fullWidth
                    label="example text"
                    id="0317258963"
                  />
                </div>
                <div className="col-lg-6  ">
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

        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Vehicle Type              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Manufacturer">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Manufacturer              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Main Type">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Main Type              </p>

              <TextField
                fullWidth
                label="example text"
                id="0317258963"
              />
            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Subtype              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Structure              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Wheel Base              </p>

              <TextField
                fullWidth
                label="example text"
                id="0317258963"
              />
            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Driven Type              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Drive’s Cabin              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Seats              </p>

              <TextField
                fullWidth
                label="example text"
                id="0317258963"
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Empty Mass            </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Construction              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Suspension Type            </p>

              <TextField
                fullWidth
                label="example text"
                id="0317258963"
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Axes             </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Equipment Line             </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Axle Load             </p>

              <TextField
                fullWidth
                label="example text"
                id="0317258963"
              />
            </div>
          </div>
        </div>



        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Logo/Width/height
              </p>

              <div className="row ">
                <div className="col-lg-4">
                  <TextField
                    fullWidth
                    label="example text"
                    id="0317258963"
                  />
                </div>
                <div className="col-lg-4  ">
                  <TextField
                    fullWidth
                    label="example text"
                    id="0317258963"
                  />
                </div>

                <div className="col-lg-4 ">
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
                Engine              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Power              </p>

              <TextField
                fullWidth
                label="example number"
                id="0317258963"
              />
            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Engine Displacement              </p>

              <TextField fullWidth label="example number" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Fuel Gear              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Emission Class              </p>

              <TextField
                fullWidth
                label="example text"
                id="0317258963"
              />
            </div>
          </div>
        </div>



        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Fine Dust Stricker              </p>

              <TextField fullWidth label="example text" id="0317258963" />
            </div>
          </div>


          <div className="col-lg-6 mt-5">
            <Button
              // onClick={() => setCompanyCheck(!companyCheck)}
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
        <div className="generl mt-5">
          <p>General</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                First Registeration             </p>

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
                Last Admission             </p>

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
                Approved in             </p>

              <TextField
                fullWidth
                label="example"
                id=""
              />
            </div>
          </div>
        </div>



        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="E-mail">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Year of construction</p>

              <TextField fullWidth label="example" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Next main inspection            </p>

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
                Next Security check            </p>

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
          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Last Gas Test           </p>

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
            <div className="Homepage">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Accident Prevention Regulations</p>

              <TextField fullWidth label="http:/" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 mt-5">
            <Button
              // onClick={() => setCompanyCheck(!companyCheck)}
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



        <div className="generl mt-5">
          <p>General</p>
        </div>


        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Read Off            </p>

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
                Specified             </p>

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
                Estimated            </p>

              <TextField
                fullWidth
                label="example"
                id=""
              />
            </div>
          </div>
        </div>



        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="STATUS d-flex mt-5">
              <p>Mileage:</p>

              <div class="form-check form-check-inline ps-5">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Kilometers</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Miles</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Hours</label>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Comment on mileage            </p>

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

          <div className="col-lg-4 mt-5">
            <Button
              // onClick={() => setCompanyCheck(!companyCheck)}
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



        <div className="Address mt-5">
          <p>Miscellaneous</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="country">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Colours</p>
              <TextField fullWidth label="Street No*" id="Street No*" />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Number of previous owners              </p>

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
                Data Source              </p>

              <TextField fullWidth label="Data Source" id="City" />
            </div>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="country">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Import Vehicle</p>
              <TextField fullWidth label="Street No*" id="Street No*" />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Steering wheel Position          </p>

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
                  <div className="col-lg-6 ">
                  <TextField
                  fullWidth
                  label="example text"
                  id="0317258963"
                />
                  </div>
                  <div className="col-lg-6  ">
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
                  <div className="col-lg-4">
                  <TextField
                  fullWidth
                  label="example text"
                  id="0317258963"
                />
                  </div>
                  <div className="col-lg-4  ">
                  <TextField
                  fullWidth
                  label="example text"
                  id="0317258963"
                />
                  </div>

                  <div className="col-lg-4 ">
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

                
                <form className="flex items-center justify-center ">
    <div className="radio  mr-2 p-2 ">
      <label >
        <input  className="mr-2"type="radio" value="Kilometer" checked={milage === 'Kilometer'} onChange={handleMilage} />  
        Kilometer
      </label>
    </div>
    <div className="radio mr-2">
      <label  >
      <input className="mr-2" type="radio" value="Miles" checked={milage === 'Miles'} onChange={handleMilage} />
      Miles
      </label>
    </div>
    <div className="radio">
      <label >
        <input className="mr-2 ml-2" type="radio" value="Hours" checked={milage === 'Hours'} onChange={handleMilage} />
        Hours
      </label>
    </div>
                </form>
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

          

          
        

        </TabPanel>


        {/* Equipments */}
        <TabPanel value={value} index={1} dir={theme.direction}>
       <div>
         <div className="Address mt-5">
          <p>List of Equipments</p>
        </div>

        <div className="slct mt-5">

          <select class="form-select form-select-lg mb-0 w-25" aria-label=".form-select-lg example">
            <option selected></option>
            <option value="1">Standard</option>
            <option value="2">Extra</option>
            <option value="3">Auxiliary</option>
          </select>

        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="stand">
              <p style={{ fontWeight: "bold" }}>Standard</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  33 of 38 seletced
                </label>
              </div>

              <div class="form-check mt-5">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Airbag passenger side
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Airbag driver’s side
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Anti-Lock bracking system ABS
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Exterior mirrors electr. adjustable
                  and heated
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Exterior mirrors body color
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Outdoor temperature display
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Flashing light integrated in exterior
                  mirrors
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Seaborne computer
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Roof spoiler body color
                </label>
              </div>

            </div>
          </div>



          <div className="col-lg-4">
            <div className="extr">
              <p style={{ fontWeight: "bold" }}>Extra</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  10 selected from 59
                </label>
              </div>

              <div class="form-check mt-5">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Trailer hitch (ball head removable)
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Audio package
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Audio package 2
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Audio system: Radio/CD player with
                  multifunction display
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Audio system: Radio/CD player with
                  multifunction display incl. on-board
                  computer
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Exterior mirrors electr foldable cool
                  & sound-paket
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Exterior mirrors electr foldable cool
                  & sound-paket 2
                </label>
              </div>

            </div>
          </div>


          <div className="col-lg-4">
            <div className="auxt">
              <p style={{ fontWeight: "bold" }}>Auxiliary</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  0 of 14 seletced
                </label>
              </div>

              <div class="form-check mt-5">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Trailer hitch
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Rear fog lamp
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Mud flap
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Sunroof
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Spoiler front
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Rear spoiler
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Fire extinguisher
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Speakers-Rear
                </label>
              </div>

            </div>
          </div>
        </div>
        <div className="flex justify-between my-6 mt-5">

          <CreateBtn
            // onClick={() => setCompanyCheck(!companyCheck)}
            style={{
              color: "#gray",
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

        {/* Tires */}
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div>
          <hr />
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Tires</h1>
            
            
          </div>

          <hr />

          
          
          <div className="generl">
            <p>Cars Tires Data</p>
          </div>
          <br />

          <img src={Tires} alt="Tires" />

        


        < div className="row mt-5">
            <div className="col-lg-9">
              <div className="company">
             
                <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Comment
                </p>
                

                <TextField fullWidth label="Enter date" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-3  flex justify-center items-end">
              <div className="managing ">
             
              <div className=" ">
              <Button
                onClick={() => setCompanyCheck(!companyCheck)}
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

          < div className="row mt-5">
            <div className="col-lg-4">
              <div className="company">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Type
                </p>
                

                <TextField fullWidth label="example" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="managing">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Rims
                </p>

                <TextField
                  fullWidth
                  label="example"
                  id="0317258963"
                />
              </div>
            </div>


            <div className="col-lg-4">
              <div className="managing">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Tread depth
                </p>
                <TextField
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
                />

            
              </div>
            </div>
          </div>
         

          < div className="row mt-5">
            <div className="col-lg-4">
              <div className="company">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Manufacturer
                </p>
                

                <TextField fullWidth label="example" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="managing">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Model
                </p>

                <TextField
                  fullWidth
                  label="example"
                  id="0317258963"
                />
              </div>
            </div>


            <div className="col-lg-4">
              <div className="managing">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
              Dimensions
                </p>
                <TextField
                  fullWidth
                  label="example"
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
        
      </SwipeableViews>
 
          

        
        </div>
      )}
    </>
  );
};
