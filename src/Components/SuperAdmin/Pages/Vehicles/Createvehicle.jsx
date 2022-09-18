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
import plus from '../../../img/plus.png';
import Save from '../../../img/Save.png';
import TrashSimple from '../../../img/TrashSimple.png';
import icons from '../../../img/icons.png';
import imageee from '../../../img/imageee.png';
import Vector from '../../../img/Vector.png';

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
            <Tab label="Vehicles Event" {...a11yProps(3)} />
            <Tab label="Varnish layer" {...a11yProps(4)} />
          </Tabs>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div>
                <div className="flex justify-between">
                  <h1 className="text-base text-bold mb-0 ml-5">
                    Create Vehicle
                  </h1>
                  <div className="mr-5">
                    <form class="d-flex">
                      {" "}
                      <input
                        class="form-control mr-2"
                        type="Sreach Vehicle "
                        placeholder="Sreach Vehicle "
                        aria-label="Sreach Vehicle "
                      />
                      <button
                        style={{
                          background: "#5A4A42",
                          color: "white",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                        type="submit"
                      >
                        Search
                      </button>{" "}
                    </form>
                  </div>
                </div>

                <div className="generl mt-5">
                  <p>Identification</p>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="company">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        License Plate
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="example text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Chassis Number">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Chassis Number
                      </p>

                      <TextField
                        fullWidth
                        label="example vin"
                        id="example vin"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="HSN/TSN">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        HSN/TSN
                      </p>
                      <div className="two flex">
                        <TextField
                          fullWidth
                          label="example text"
                          id="example vin"
                        />
                        <TextField
                          fullWidth
                          label="example text"
                          id="example vin"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="contact">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Vehicle Type
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Manufacturer">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Manufacturer
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Main Type">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Main Type
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Subtype">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Subtype
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Structure">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Structure
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Wheel Base">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Wheel Base
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Driven Type">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Driven Type
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Drive’s Cabin">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Telephone
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Seats">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Seats
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="0317258963"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Empty Mass">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Empty Mass
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="Country name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Construction">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Construction
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="Country name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Suspension Type">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Suspension Type
                      </p>

                      <TextField fullWidth label="example text" id="City" />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Axes">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Axes
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="Street No*"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Equipment Line">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Equipment Line
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="Street No*"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Mail">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Axle Load
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="Enter your mail box"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Long/Width/Height">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Long/Width/Height
                      </p>
                      <div className="three d-flex">
                        <TextField
                          fullWidth
                          label="example text"
                          id="Street No*"
                        />
                        <TextField
                          fullWidth
                          label="example text"
                          id="Street No*"
                        />
                        <TextField
                          fullWidth
                          label="example text"
                          id="Street No*"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Engine">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Engine
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="Street No*"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Power">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}></p>
                      Power
                      <TextField
                        fullWidth
                        label="example number"
                        id="Enter your mail box"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Engine Displacement">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Engine Displacement
                      </p>

                      <TextField
                        fullWidth
                        label="example number"
                        id="Street No*"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Fuel Gear">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Fuel Gear
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="Street No*"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Emission Class">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}></p>
                      Emission Class
                      <TextField
                        fullWidth
                        label="example text"
                        id="Enter your mail box"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="Fine Dust Stricker">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Fine Dust Stricker
                      </p>

                      <TextField
                        fullWidth
                        label="example text"
                        id="Street No*"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="add pt-5">
                      <button> Add New Field </button>
                    </div>
                  </div>
                </div>

                <div className="Contactcent mt-5">
                  <p>General</p>
                </div>

                <div className="Address mt-5">
                  <p>Milage</p>
                </div>

                <div className="Address mt-5">
                  <p>Miscellaneous</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div>
                <div className="flex justify-between">
                  <h1 className="text-base text-bold mb-0 ml-5">Equipment</h1>
                  <div className="mr-5"></div>
                </div>

                <div className="generl mt-5">
                  <p>List of Equipments</p>
                </div>

                <div class="input-group mt-5">
                  <div class="form-outline">
                    <img src={Vector} />
                    <input type="search" id="form1" class="form-control" />
                    <label class="form-label" for="form1"></label>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Standard">
                      <h5>Standard</h5>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          33 of 38 seletced
                        </label>
                      </div>

                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Airbag passenger side
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Airbag driver’s side
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Anti-Lock bracking system ABS
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Exterior mirrors electr. adjustable
                          <br />
                          and heated
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Exterior mirrors body color
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Outdoor temperature display
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Flashing light integrated <br />
                          in exterior mirrors
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Seaborne computer
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Roof spoiler body color
                        </label>
                      </div>
                    </div>

                    <div class="input-group mt-5">
                      <div class="form-outline">
                        {/* <img src={Vector} /> */}
                        <input type="search" id="form1" class="form-control" />
                        <label class="form-label" for="form1"></label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Extras ">
                      <h5>Extras</h5>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          10 selected from 59
                        </label>
                      </div>

                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Trailer hitch (ball head removable)
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Audio package
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Audio package 2
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Audio system: Radio/CD player
                          <br /> with multifunction display
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Audio system: Radio/CD player
                          <br /> with multifunction display incl
                          <br />. on-board computer
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Exterior mirrors electr foldable cool
                          <br />& sound-paket
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Exterior mirrors electr foldable cool
                          <br />& sound-paket 2
                        </label>
                      </div>
                    </div>

                    <div class="input-group mt-5">
                      <div class="form-outline">
                        {/* <img src={Vector} /> */}
                        <input type="search" id="form1" class="form-control" />
                        <label class="form-label" for="form1"></label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Auxiliary">
                      <h5>Auxiliary</h5>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          0 of 14 seletced
                        </label>
                      </div>

                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Trailer hitch
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          For Lamp
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Rear fog lamp
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Mud flap
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Sunroof
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Spoiler front
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Rear spoiler
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Fire extinguisher
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Speakers-Rear
                        </label>
                      </div>
                    </div>

                    <div class="input-group mt-5">
                      <div class="form-outline">
                        {/* <img src={Vector} /> */}
                        <input type="search" id="form1" class="form-control" />
                        <label class="form-label" for="form1"></label>
                      </div>
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
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <div>
                <div className="flex justify-between">
                  <h1 className="text-base text-bold mb-0 ml-5">Tries</h1>
                  <div className="mr-5">
                  
                    <div className="slct">
                      <select class="form-select form-select-lg mb-0 w-100" aria-label=".form-select-lg example">
                        <option selected>Car</option>
                        <option value="1">Experts</option>
                        <option value="2">Clerks</option>
                        <option value="3">Company Admin</option>
                      </select>

                    </div>
                  </div>
                </div>

                <div className="generl mt-4">
                  <p>Car Tries Data</p>
                </div>


                <div className="slct mt-5">

                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>Tries Layout</p>

                  <select class="form-select form-select-lg mb-0 w-50" aria-label=".form-select-lg example">
                    <option selected>example</option>
                    <option value="1">Experts</option>
                    <option value="2">Clerks</option>
                    <option value="3">Company Admin</option>
                  </select>

                </div>

                <div className="STATUS d-flex mt-5">
                  {/* <p>Set of tries 1 </p> */}

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Set of tries 1</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">tire set 2</label>
                  </div>
                </div>


                <div className="exce mt-5">
                  <img src={imageee} />
                </div>

                <div className="row">
                  <div className="col-lg-10">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Comment</p>
                    <TextField fullWidth label="Enter date" id="example text" />
                  </div>
                  <div className="col-lg-2">
                    <div className="add mt-5 text-end">
                      <button> Add New Field  <img src={plus} /></button>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Type">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Type
                      </p>

                      <TextField fullWidth label="example" id="Street No*" />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Rims">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Rims
                      </p>

                      <TextField fullWidth label="Enter date" id="Street No*" />
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="Tread depth">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Tread depth
                      </p>
                      <TextField
                        fullWidth
                        label="example"
                        id="Enter your mail box"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Manufacturer ">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Manufacturer
                      </p>

                      <TextField fullWidth label="Enter date" id="Street No*" />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Model ">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Model
                      </p>

                      <TextField fullWidth label="Enter date" id="Street No*" />
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="Dimensions ">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Dimensions
                      </p>
                      <TextField
                        fullWidth
                        label="example"
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

                      <button> <img src={Save} /> Next </button>

                    </div>
                  </div>
                </div>




              </div>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
            <div>
                <div className="flex justify-between">
                  <h1 className="text-base text-bold mb-0 ml-5">Vehicle Event</h1>
                  <div className="mr-5">

                  </div>
                </div>



                <div className="generl mt-5">
                  <p>Event Detail</p>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="Data">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Data
                      </p>

                      <TextField fullWidth label="example" id="example text" />
                    </div>
                  </div>


                  <div className="col-lg-6">
                    <div className="Cost">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Cost
                      </p>
                      <TextField
                        fullWidth
                        label="Enter date"
                        id="example vin"
                      />

                    </div>
                  </div>
                </div>

                <div className="for mt-5">
                  <form>
                    <div class="form-group">
                      <label for="comment">Event</label>
                      <textarea class="form-control" rows="4" label="Enter date " id="Enter date"></textarea>
                    </div>
                  </form>
                </div>

                <div className="forgro" style={{ marginTop: "50px" }}>
                  <form>
                    <div class="form-group">
                      <label for="comment">Comment</label>
                      <textarea class="form-control" rows="8" label="Enter date " id="Enter date"></textarea>
                    </div>
                  </form>
                </div>

                <div className="add mt-5 text-end">
                  <button> Add New Event  <img src={plus} /></button>
                </div>


                <div className="row mt-5">

                  <div className="col-lg-8">

                    <div className="previ">

                      <button>Previous</button>

                    </div>
                  </div>

                  <div className="col-lg-4">

                    <div className="nextbtn">

                      <button> <img src={Save} /> Next </button>

                    </div>
                  </div>
                </div>

              </div>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
            <div>
                <div className="flex justify-between">
                  <h1 className="text-base text-bold mb-0 ml-5">Varnish Layer</h1>
                  <div className="mr-5">

                  </div>
                </div>



                <div className="generl mt-5">
                  <p>Layer detail</p>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Position">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Position
                      </p>

                      <TextField fullWidth label="example" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="Data">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Measurement
                      </p>

                      <TextField fullWidth label="Enter date" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Data">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Description
                      </p>

                      <TextField fullWidth label="Enter date" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-1 mt-5">
                    <div className="trash d-flex">
                      <img src={TrashSimple} />
                      <img src={icons} className="ps-3" />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Position">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Position
                      </p>

                      <TextField fullWidth label="example" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="Data">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Measurement
                      </p>

                      <TextField fullWidth label="Enter date" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Data">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Description
                      </p>

                      <TextField fullWidth label="Enter date" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-1 mt-5">
                    <div className="trash d-flex">
                      <img src={TrashSimple} />
                      <img src={icons} className="ps-3" />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="Position">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Position
                      </p>

                      <TextField fullWidth label="example" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="Data">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Measurement
                      </p>
                      <TextField fullWidth label="Enter date" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="Data">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Description
                      </p>

                      <TextField fullWidth label="Enter date" id="example text" />
                    </div>
                  </div>

                  <div className="col-lg-1 mt-5">
                    <div className="trash d-flex">
                      <img src={TrashSimple} />
                      <img src={icons} className="ps-3" />
                    </div>
                  </div>
                </div>


                <div className="add mt-5">
                  <button> Add Position  <img src={plus} /></button>
                </div>


                <div className="row" style={{ marginTop: "100px" }}>

                  <div className="col-lg-8">

                    <div className="previ">

                      <button>Previous</button>

                    </div>
                  </div>

                  <div className="col-lg-4">

                    <div className="finibtn">

                      <button> <img src={Save} /> Finish </button>

                    </div>
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
