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
import AuthUser from "../../Auth/AuthUser";



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
  

export const Createvehicle = (props) => {
  const { http } = AuthUser();
  const handleSubmit = () =>{
    console.log("licPlate : ",licPlate);
    console.log("Date: ", event_date);
    console.log("Milage: ", milage);

    
  const formData = new FormData();

  formData.append("license_plate", licPlate)
  formData.append("chassis_no", chassisNum)
  formData.append("hsn", hsn)
  formData.append("tsn", tsn)
  formData.append("vehicle_type", vehicleType)
  formData.append("manufacturer", Manufacturer)
  formData.append("main_type", mainType)
  formData.append("subtype", subType)
  formData.append("structure", Structure)
  formData.append("wheel_base", wheelBase)
  formData.append("driven_type", drivenType)
  formData.append("drive_cabin", driveCabin)
  formData.append("seats", Seats)
  formData.append("empty_mass", emptyMass)
  formData.append("construction", construction)
  formData.append("suspension_type", suspensionType)
  formData.append("axes", Axes)
  formData.append("equipment_line", EquipmentLine)
  formData.append("axle_load", AxleLoad)
  formData.append("long", long)
  formData.append("width", width)
  formData.append("height", height)
  formData.append("engine", engine)
  formData.append("power", Power)
  formData.append("engine_displacement", engineDisplacement)
  formData.append("fuel_gear", FuelGear)
  formData.append("emission_class", emissionClass)
  formData.append("fine_dust_stricker", fine_dust_stricker)
  formData.append("id_dynamic", {'field name': 'field value', 'field name2':'field value2'})
  formData.append("first_registration", firstRegistration)
  formData.append("last_admission", lastAdmission)
  formData.append("aprroved_in", aprrovedIn)
  formData.append("construction_year", constructionYear)
  formData.append("next_main_inspection", nextMainInspection)
  formData.append("next_security_check", nextSecurityCheck)
  formData.append("last_gas_test", lastGasTest)
  formData.append("accident_prevention_regulation", accidentPreventionRegulation)
  formData.append("gen_dynamic", {'field name': 'field value', 'field name2':'field value2'})
  formData.append("read_off", readOff)
  formData.append("ro_option", 'ro_option_000')
  formData.append("specified", specified)
  formData.append("sp_option", 'sp_option_000')
  formData.append("estimated", estimated)
  formData.append("est_option", 'est_option_000')
  formData.append("mileage", mileage)
  formData.append("mileage_comment", mileageComment)
  formData.append("mil_dynamic", {'field name': 'field value', 'field name2':'field value2'})
  formData.append("color", color)
  formData.append("previous_owner_count", previousOwnerCount)
  formData.append("data_source", dataSource)
  formData.append("import_vehicle", importVehicle)
  formData.append("steering_wheel_position", steeringWheelPosition)
  formData.append("misc_dynamic", {'field name': 'field value', 'field name2':'field value2'})
  formData.append("equipements", {'equipement_type': 'option'})
  formData.append("tier_layout", 'tier_layout_000')
  formData.append("event_date[0]", event_date)
  formData.append("event_event[0]", eventEvent)
  formData.append("event_cost[0]", eventCost)
  formData.append("event_comment[0]", eventComment)
  formData.append("vl_position[0]", 'vl_position_000')
  formData.append("vl_measurement[0]", 'vl_measurement_000')
  formData.append("vl_description[0]", 'vl_description_000')
  formData.append("tier_layout_id", 1)
  formData.append("company_id", 12)
  formData.append("tier_set_id[0]", 1)
  formData.append("tier_comment[0]", tierComment)
  formData.append("tier_type[0]", tierType)
  formData.append("tier_rims[0]", tier_rims)
  formData.append("tier_tread_depth[0]", tier_tread_depth)
  formData.append("tier_manufacturer[0]", tier_manufacturer)
  formData.append("tier_model[0]", tier_model)
  formData.append("tier_dimensions[0]", tier_dimensions)
  formData.append("array[]", [])
  formData.append("event_date[1]", '2022-06-25 09:11:10')
 

  

  http.post(`/vehicle`, formData)
  .then((res) => {
    console.log(res)
    setCompanyCheck(!companyCheck)
    // setusermanagementCheck(!usermanagementCheck)
  }).catch(err => console.log(err.message))

  }

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
  console.log("Milage: ", mileage);


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
              defaultValue={  props.editItem === undefined ? licPlate : props.editItem.license_plate  }
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
              defaultValue={  props.editItem === undefined ? chassisNum : props.editItem.chassis_no  }
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
                  defaultValue={  props.editItem === undefined ? hsn : props.editItem.hsn  }
                    onChange={(e) => setHsn(e.target.value)}
                    fullWidth
                    label="HSN"
                    id="0317258963"
                  />
                </div>
                <div className="col-lg-6  ">
                  <TextField
                  defaultValue={  props.editItem === undefined ? tsn : props.editItem.tsn  }
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
              defaultValue={  props.editItem === undefined ? vehicleType : props.editItem.vehicle_type  }
              onChange={(e) => setVehicleType(e.target.value)}
               fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Manufacturer">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Manufacturer              </p>

              <TextField
              defaultValue={  props.editItem === undefined ? Manufacturer : props.editItem.manufacturer  }
              onChange={(e) => setManufacturer(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Main Type">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Main Type              </p>

              <TextField
              defaultValue={  props.editItem === undefined ? mainType : props.editItem.main_type  }
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
              defaultValue={  props.editItem === undefined ? vehicleType : props.editItem.subtype  }
              onChange={(e) => setSubType(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Structure              </p>

              <TextField 
              defaultValue={  props.editItem === undefined ? vehicleType : props.editItem.structure  }
              onChange={(e) => setStructure(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Wheel Base              </p>

              <TextField
              defaultValue={  props.editItem === undefined ? vehicleType : props.editItem.wheel_base  }
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
              defaultValue={  props.editItem === undefined ? drivenType : props.editItem.driven_type  }
              onChange={(e) => setDrivenType(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Drive’s Cabin              </p>

              <TextField 
              defaultValue={  props.editItem === undefined ? driveCabin : props.editItem.drive_cabin  }
              onChange={(e) => setDriveCabin(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Seats              </p>

              <TextField
              defaultValue={  props.editItem === undefined ? Seats : props.editItem.seats  }
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
              defaultValue={  props.editItem === undefined ? emptyMass : props.editItem.empty_mass  }
              onChange={(e) => setEmptyMass(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Construction              </p>

              <TextField 
              defaultValue={  props.editItem === undefined ? construction : props.editItem.construction  }
              onChange={(e) => setConstruction(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Suspension Type            </p>

              <TextField
              defaultValue={  props.editItem === undefined ? suspensionType : props.editItem.suspension_type  }
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
              defaultValue={  props.editItem === undefined ? Axes : props.editItem.axes  }
              onChange={(e) => setAxes(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Equipment Line             </p>

              <TextField 
              defaultValue={  props.editItem === undefined ? EquipmentLine : props.editItem.equipment_line  }
              onChange={(e) => setEquipmentLine(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Axle Load             </p>

              <TextField
              defaultValue={  props.editItem === undefined ? AxleLoad : props.editItem.axle_load  }
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
                  defaultValue={  props.editItem === undefined ? long : props.editItem.long  }
                  onChange={(e) => setLong(e.target.value)}
                    fullWidth
                    label="example text"
                    id="0317258963"
                  />
                </div>
                <div className="col-lg-4  ">
                  <TextField
                  defaultValue={  props.editItem === undefined ? width : props.editItem.width  }
                  onChange={(e) => setWidth(e.target.value)}
                    fullWidth
                    label="example text"
                    id="0317258963"
                  />
                </div>

                <div className="col-lg-4 ">
                  <TextField
                  defaultValue={  props.editItem === undefined ? height : props.editItem.height  }
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
              defaultValue={  props.editItem === undefined ? engine : props.editItem.engine  }
              onChange={(e) => setEngine(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Power              </p>

              <TextField
              defaultValue={  props.editItem === undefined ? Power : props.editItem.power  }
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
              defaultValue={  props.editItem === undefined ? engineDisplacement : props.editItem.engine_displacement  }
              onChange={(e) => setengineDisplacement(e.target.value)}
              fullWidth label="example number" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="Commerical">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Fuel Gear              </p>

              <TextField 
              defaultValue={  props.editItem === undefined ? FuelGear : props.editItem.fuel_gear  }
              onChange={(e) => setFuelGear(e.target.value)}
              fullWidth label="example text" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="Tax">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Emission Class              </p>

              <TextField
              defaultValue={  props.editItem === undefined ? emissionClass : props.editItem.emission_class  }
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
              defaultValue={  props.editItem === undefined ? fine_dust_stricker : props.editItem.fine_dust_stricker  }
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
               defaultValue={  props.editItem === undefined ? firstRegistration : props.editItem.first_registration  }
              onChange={(e) => setFirstRegistration(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
               
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
               defaultValue={  props.editItem === undefined ? lastAdmission : props.editItem.last_admission  }
              onChange={(e) => setlastAdmission(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
                
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
               defaultValue={  props.editItem === undefined ? aprrovedIn : props.editItem.aprroved_in  }
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
              defaultValue={  props.editItem === undefined ? constructionYear : props.editItem.construction_year  }
              onChange={(e) => setConstructionYear(e.target.value)}
              fullWidth label="example" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Next main inspection            </p>

              <TextField
              defaultValue={  props.editItem === undefined ? nextMainInspection : props.editItem.next_main_inspection  }
              onChange={(e) => setnextMainInspection(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
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
              defaultValue={  props.editItem === undefined ? nextSecurityCheck : props.editItem.next_security_check  }
              onChange={(e) => setNextSecurityCheck(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
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
              defaultValue={  props.editItem === undefined ? lastGasTest : props.editItem.last_gas_test  }
              onChange={(e) => setlastGasTest(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
                
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
              defaultValue={  props.editItem === undefined ? accidentPreventionRegulation : props.editItem.accident_prevention_regulation  }
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
              defaultValue={  props.editItem === undefined ? readOff : props.editItem.read_off  }
              onChange={(e) => setReadOff(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
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
              defaultValue={  props.editItem === undefined ? specified : props.editItem.specified  }
              onChange={(e) => setSpecified(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
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
              defaultValue={  props.editItem === undefined ? estimated : props.editItem.estimated  }
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
                <input class="form-check-input" 
                type="radio" name="inlineRadioOptions" 
                id="inlineRadio1" 
                value="Kilometers"
                onChange={(e) => setMileage(e.target.value)}
                />
                <label class="form-check-label" for="inlineRadio1">Kilometers</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" 
                type="radio" name="inlineRadioOptions" 
                id="inlineRadio2" value="Miles"
                onChange={(e) => setMileage(e.target.value)}
                
                />
                <label class="form-check-label" for="inlineRadio2">Miles</label> <br />
              </div> 
              <div class="form-check form-check-inline">
                <input class="form-check-input" 
                type="radio" name="inlineRadioOptions" 
                id="inlineRadio2" value="Hours"
                onChange={(e) => setMileage(e.target.value)}
                />
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
              defaultValue={  props.editItem === undefined ? color : props.editItem.color  }
              onChange={(e) => setColor(e.target.value)}
              fullWidth label="Colours" id="Street No*" />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Number of previous owners              </p>

              <TextField
              defaultValue={  props.editItem === undefined ? previousOwnerCount : props.editItem.previous_owner_count  }
              onChange={(e) => setPreviousOwnerCount(e.target.value)}
                fullWidth
                id="date"
                label="Previous Owners"
                type="text"
               
                
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Data Source              </p>

              <TextField 
              defaultValue={  props.editItem === undefined ? dataSource : props.editItem.data_source  }
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
              defaultValue={  props.editItem === undefined ? importVehicle : props.editItem.import_vehicle  }
              onChange={(e) => setImportVehicle(e.target.value)}
              fullWidth label="Street No*" id="Street No*" />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Steering wheel Position          </p>

              <TextField
              defaultValue={  props.editItem === undefined ? steeringWheelPosition : props.editItem.steering_wheel_position  }
              onChange={(e) => setSteeringWheelPosition(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="text"
                
                
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
                <input class="form-check-input"
                 type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  33 of 38 seletced
                </label>
              </div>

              <div class="form-check mt-5">
                <input class="form-check-input"
                
                type="checkbox" value="" id="flexCheckDefault" />
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
                defaultValue={  props.editItem === undefined ? tierComment : props.editItem.license_plate  }
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
                id="date"
                label="Enter Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={(e) => setEventDate(e.target.value)}
                 />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                Cost
                </p>

                <TextField
                defaultValue={  props.editItem === undefined ? licPlate : props.editItem.license_plate  }
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
              onClick={handleSubmit}
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
