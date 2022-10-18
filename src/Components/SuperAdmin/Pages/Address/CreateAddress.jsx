import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import Addresses from "./Addresses";

const CreateAddress = () => {
  const [checkAddress, setCheckedAddress] = useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      {checkAddress ? (
        <Addresses />
      ) : (
        <div>
          <Toolbar />
          <div className="flex justify-between">
            <div className="mr-5">
              <Button
                onClick={() => setCheckedAddress(!checkAddress)}
                style={{
                  color: "#000",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                Back
              </Button>
            </div>
          </div>

          <hr />

          <div className="generl">
            <p>Address</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Select </p>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>State</p>

                <TextField fullWidth label="State" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>City</p>

                <TextField fullWidth label="City" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Area</p>

                <TextField fullWidth label="Area" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5 mb -5">
            <Button
              className="text-black"
              onClick={() => setCheckedAddress(!checkAddress)}
            >
              Cancel
            </Button>

            <Button
              className="text-white"
              style={{ backgroundColor: "#5A4A42" }}
              //   onClick={() => {
              //     if (props.editItem == undefined) {
              //       handleCreateUser();
              //     }
              //     handleSave();
              //   }}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAddress;
