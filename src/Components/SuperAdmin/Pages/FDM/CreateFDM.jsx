import { Drawer, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import Vehicles from "../Vehicles/Vehicles";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fdm from "./Fdm";
import { CreateBtn } from "../../../Buttons";
import { Createvehicle } from "../Vehicles/Createvehicle";
// import "./QuestionButton.css"
import kuhl from "../../../img/kuhl.png";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { QsAns } from "./QsAns";

import PropTypes from "prop-types";
import GeneralData from "./GeneralData";
import Involed from "./Involed";
import Question from "./Question";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const CreateFdm = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Toolbar />
      <h5 className="my-3">Creating File</h5>
      <Box sx={{ bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            "& button:hover": { background: "#F4EAE4" },
            "& button.Mui-selected": {
              background: "#F4EAE4",
              color: "#5A4A42",
            },
          }}
          textColor="secondary"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#5B4A42",
            },
          }}
        >
          <Tab
            label="General Data"
            {...a11yProps(0)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Involved"
            {...a11yProps(1)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Vehicles "
            {...a11yProps(2)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Questions"
            {...a11yProps(3)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Vehicle Inspection"
            {...a11yProps(4)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Documents"
            {...a11yProps(5)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Photos"
            {...a11yProps(6)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Protocol"
            {...a11yProps(7)}
            style={{ display: "flex", alignItems: "start" }}
          />
        </Tabs>

        <div className="w-[80%]">
          <TabPanel value={value} index={0}>
            <GeneralData />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Involed/>
          </TabPanel>
          <TabPanel value={value} index={2}>
           <Createvehicle/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Question/>
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </div>
      </Box>
    </>
  );
};

CreateFdm.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default CreateFdm;
