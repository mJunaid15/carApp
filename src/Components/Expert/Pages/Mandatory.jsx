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
import { CreateMandVehicle } from "./CreateMandVehicle";
import VehiclesMand from "./VehiclesMand";
import Addresses from "./Addresses";
import { MandDocuments } from "./MandDocuments";
import { MandTemplate } from "./MandTemplate";





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
  

export const Mandatory = () => {


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
          <Tab label="Vehicles" {...a11yProps(0)} />
          <Tab label=" Address  " {...a11yProps(1)} />
          <Tab label="Create Documents" {...a11yProps(2)} />
          <Tab label="Templates" {...a11yProps(3)} />
        </Tabs>
       
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >


          {/* Vehicles */}
        <TabPanel value={value} index={0} dir={theme.direction}>

        <VehiclesMand />

        </TabPanel>


        {/* Address */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Addresses />
        </TabPanel>

        {/* Create Documents */}
        <TabPanel value={value} index={2} dir={theme.direction}>
        <MandDocuments />
        </TabPanel>

        {/* Templates */}
        <TabPanel value={value} index={3} dir={theme.direction}>
       <MandTemplate />
        </TabPanel>

   
      </SwipeableViews>
 
          

        
        </div>
      )}
    </>
  );
};
