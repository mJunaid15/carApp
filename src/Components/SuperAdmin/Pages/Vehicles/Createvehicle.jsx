import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import Vehicles from "./Vehicles";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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

  // Create Vehicle States

    // identification states
    const [licPlate, setLicPlate] = useState()
    const [chassisNum, setChassisNum] = useState()
    const [hsn, setHsn] = useState()
    const [tsn, setTsn] = useState()
    const [vehicleType, setVehicleType] = useState()
    const [Manufacturer, setManufacturer] = useState()
    const [mainType, setMainType] = useState()
    const [subType, setSubType] = useState()
    const [Structure, setStructure] = useState()
    const [wheelBase, setWheelBase] = useState()
    const [drivenType, setDrivenType] = useState()
    const [driveCabin, setDriveCabin] = useState()
    const [Seats, setSeats] = useState()
    const [emptyMass, setEmptyMass] = useState()
    const [construction, setConstruction] = useState()
    const [suspensionType, setSuspensionType] = useState()
    const [Axes, setAxes] = useState()
    const [EquipmentLine, setEquipmentLine] = useState()
    const [AxleLoad, setAxleLoad] = useState()
    const [long, setLong] = useState()
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const [engine, setEngine] = useState()
    const [Power, setPower] = useState()
    const [engineDisplacement, setengineDisplacement] = useState()
    const [FuelGear, setFuelGear] = useState()
    const [emissionClass, setEmissionClass] = useState()
    const [fine_dust_stricker, setFine_dust_stricker] = useState()

    // general states
    const [firstRegistration, setFirstRegistration] = useState()
    const [lastAdmission, setlastAdmission] = useState()
    const [aprrovedIn, setAprrovedIn] = useState()
    const [constructionYear, setConstructionYear] = useState()
    const [nextMainInspection, setnextMainInspection] = useState()
    const [nextSecurityCheck, setNextSecurityCheck] = useState()
    const [lastGasTest, setlastGasTest] = useState()
    const [accidentPreventionRegulation, setAccidentPreventionRegulation] = useState()
    
    // milage states
    const [readOff, setReadOff] = useState()
    const [specified, setSpecified] = useState()
    const [estimated, setEstimated] = useState()
    const [mileage, setMileage] = useState()
    const [mileageComment, setmileageComment] = useState()

    // miscellenous states
    const [color, setColor] = useState()
    const [previousOwnerCount, setPreviousOwnerCount] = useState()
    const [dataSource, setDataSource] = useState()
    const [importVehicle, setImportVehicle] = useState()
    const [steeringWheelPosition, setSteeringWheelPosition] = useState()

    // Equipments

    // Tries
    const [tierComment, setTier_comment] = useState()
    const [tierType, settierType] = useState()
    const [tier_rims, settier_rims] = useState()
    const [tier_tread_depth, settier_tread_depth] = useState()
    const [tier_manufacturer, settier_manufacturer] = useState()
    const [tier_model, settier_model] = useState()
    const [tier_dimensions, settier_dimensions] = useState()

    // Event
    const [event_date, setEventDate] = useState()
    const [eventComment, setEventComment] = useState()
    const [eventCost, setEventCost] = useState()
    const [eventEvent, setEventEvent] = useState()

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
          <Tab label="Vehicle Events" {...a11yProps(3)} />

         
        </Tabs>
       
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        {/* Create Vehicles */}
        <TabPanel value={value} index={0} dir={theme.direction}>

          <div>
          <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Create Vehicle</h1>
 
          </div> <br />
            
            {/* Identification */}
            <div className="generl ">
          <p>Identification</p>
        </div> 
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                License Plate              </p>

              <TextField
              onChange={(e) => setLicPlate(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Chassis Number              </p>

              <TextField
              onChange={(e) => setChassisNum(e.target.value)}

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
                    onChange={(e) => setHsn(e.target.value)}
                    fullWidth
                    label="HSN"
                    id="0317258963"
                  />
                </div>
                <div className="col-lg-6  ">
                  <TextField
                    onChange={(e) => setTsn(e.target.value)}
                    fullWidth
                    label="TSN"
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

              <TextField
              onChange={(e) => setVehicleType(e.target.value)}
               fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Manufacturer">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Manufacturer              </p>

              <TextField
              onChange={(e) => setManufacturer(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Main Type">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Main Type              </p>

              <TextField
                onChange={(e) => setMainType(e.target.value)}
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

              <TextField 
              onChange={(e) => setSubType(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Structure              </p>

              <TextField 
              onChange={(e) => setStructure(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Wheel Base              </p>

              <TextField
              onChange={(e) => setWheelBase(e.target.value)}
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

              <TextField 
              onChange={(e) => setDrivenType(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Drive’s Cabin              </p>

              <TextField 
              onChange={(e) => setDriveCabin(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Seats              </p>

              <TextField
              onChange={(e) => setSeats(e.target.value)}
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

              <TextField 
              onChange={(e) => setEmptyMass(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Construction              </p>

              <TextField 
              onChange={(e) => setConstruction(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Suspension Type            </p>

              <TextField
              onChange={(e) => setSuspensionType(e.target.value)}
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

              <TextField 
              onChange={(e) => setAxes(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Equipment Line             </p>

              <TextField 
              onChange={(e) => setEquipmentLine(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Axle Load             </p>

              <TextField
              onChange={(e) => setAxleLoad(e.target.value)}
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
                  onChange={(e) => setLong(e.target.value)}
                    fullWidth
                    label="example text"
                    id="0317258963"
                  />
                </div>
                <div className="col-lg-4  ">
                  <TextField
                  onChange={(e) => setWidth(e.target.value)}
                    fullWidth
                    label="example text"
                    id="0317258963"
                  />
                </div>

                <div className="col-lg-4 ">
                  <TextField
                  onChange={(e) => setHeight(e.target.value)}
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

              <TextField 
              onChange={(e) => setEngine(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Power              </p>

              <TextField
              onChange={(e) => setPower(e.target.value)}
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

              <TextField 
              onChange={(e) => setengineDisplacement(e.target.value)}
              fullWidth label="example number" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Fuel Gear              </p>

              <TextField 
              onChange={(e) => setFuelGear(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Emission Class              </p>

              <TextField
              onChange={(e) => setEmissionClass(e.target.value)}
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

              <TextField 
              onChange={(e) => setFine_dust_stricker(e.target.value)}
              fullWidth label="example text" id="0317258963" />
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
              onChange={(e) => setFirstRegistration(e.target.value)}
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
              onChange={(e) => setlastAdmission(e.target.value)}
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
              onChange={(e) => setAprrovedIn(e.target.value)}
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

              <TextField 
              onChange={(e) => setConstructionYear(e.target.value)}
              fullWidth label="example" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Next main inspection            </p>

              <TextField
              onChange={(e) => setnextMainInspection(e.target.value)}
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
              onChange={(e) => setNextSecurityCheck(e.target.value)}
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
              onChange={(e) => setlastGasTest(e.target.value)}
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

              <TextField 
              onChange={(e) => setAccidentPreventionRegulation(e.target.value)}
              fullWidth label="http:/" id="0317258963" />
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



              {/* Milage */}
        <div className="generl mt-5">
          <p>Milage</p>
        </div>


        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Read Off            </p>

              <TextField
              onChange={(e) => setReadOff(e.target.value)}
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
              onChange={(e) => setSpecified(e.target.value)}
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
              onChange={(e) => setEstimated(e.target.value)}
                fullWidth
                label="example"
                id=""
              />
            </div>
          </div>
        </div>



        <div className="row mt-4">
          <div className="col-lg-4">
          <p>Mileage:</p> 
            <div className="STATUS d-flex ">
             

              <div class="form-check form-check-inline ">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Kilometers</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Miles</label> <br />
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
              onChange={(e) => setmileageComment(e.target.value)}
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



        {/* Miscellaneous */}
        <div className="Address mt-5">
          <p>Miscellaneous</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="country">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Colours</p>
              <TextField 
              onChange={(e) => setColor(e.target.value)}
              fullWidth label="Colours" id="Street No*" />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Number of previous owners              </p>

              <TextField
              onChange={(e) => setPreviousOwnerCount(e.target.value)}
                fullWidth
                id="date"
                label="Previous Owners"
                type="text"
                defaultValue=""
                
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Data Source              </p>

              <TextField 
              onChange={(e) => setDataSource(e.target.value)}
              fullWidth label="Data Source" id="City" />
            </div>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="country">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Import Vehicle</p>
              <TextField 
              onChange={(e) => setImportVehicle(e.target.value)}
              fullWidth label="Street No*" id="Street No*" />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Steering wheel Position          </p>

              <TextField
              onChange={(e) => setSteeringWheelPosition(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="text"
                defaultValue=""
                
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

        <div className=" my-6 mt-5" style={{display: "flex", justifyContent:"right"}}>

         
          <div className="mr-5">
            <CreateBtn
              onClick={() => setValue(value + 1)}
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

        </TabPanel>

        {/* Equipments */}
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Equipments</h1>
 
          </div> <br />
       <div>
         <div className="Address ">
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
          onClick={() => setValue(value - 1)}
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
            onClick={() => setValue(value + 1)}
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
          
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Tires</h1>
 
          </div> <br />

         
          
          
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
                

                <TextField 
                onChange={(e) => setTier_comment(e.target.value)}
                fullWidth label="Enter date" id="0317258963" />
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
                

                <TextField 
                onChange={(e) => settierType(e.target.value)}
                fullWidth label="example" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="managing">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Rims
                </p>

                <TextField
                onChange={(e) => settier_rims(e.target.value)}
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
                onChange={(e) => settier_tread_depth(e.target.value)}
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
                

                <TextField 
                onChange={(e) => settier_manufacturer(e.target.value)}
                fullWidth label="example" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="managing">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Model
                </p>

                <TextField
                onChange={(e) => settier_model(e.target.value)}
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
                onChange={(e) => settier_dimensions(e.target.value)}
                  fullWidth
                  label="example"
                  id="0317258963"
                />

            
              </div>
            </div>
          </div>
         
         

          <div className="flex justify-between my-6 mt-5">

                <CreateBtn
                  onClick={() => setValue(value - 1)}
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
                    onClick={() => setValue(value + 1)}
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

         {/* Veicle Events */}
         <TabPanel value={value} index={3} dir={theme.direction}>
        <div>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Vehicle Events</h1>
            
            
          </div> <br />


          
          
          <div className="generl">
            <p>Event Details</p>
          </div>
          <br />

          
       

          < div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Data
                </p>
                

                <TextField 
                onChange={(e) => setEventDate(e.target.value)}
                fullWidth label="example" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Cost
                </p>

                <TextField
                onChange={(e) => setEventCost(e.target.value)}
                  fullWidth
                  label="example"
                  id="0317258963"
                />
              </div>
            </div>


         
          </div>

          < div className="row mt-5">
            <div className="col-lg-12">
              <div className="company">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Event
                </p>
                

                <TextField 
                onChange={(e) => setEventEvent(e.target.value)}
                fullWidth label="example" id="0317258963" />
              </div>
            </div>

           
          </div>

          < div className="row mt-5">
            <div className="col-lg-12">
              <div className="company">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Comment
                </p>
                

                <TextField 
                onChange={(e) => setEventComment(e.target.value)}
                fullWidth label="example" id="0317258963" />
              </div>
            </div>

           
          </div>
         

         
         
         

          <div className="flex justify-between my-6 mt-5">

          <CreateBtn
            onClick={() => setValue(value - 1)}
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
              onClick={() => console.log("Submit")}
              style={{
                color: "#000",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Submit"
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
