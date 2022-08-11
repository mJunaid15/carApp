import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Company from "./Company";
import { Toolbar } from "@mui/material";
import { CreateBtn } from "../../Buttons";
import { Mandatory } from "./Mandatory";
import VehiclesMand from "./VehiclesMand";
import Addresses from "./Addresses";

export const CreateAddress = () => {
  const [addCheck, setAddCheck] = useState(false);

  return (
    <>
      {addCheck ? (
        <Addresses />
      ) : (
        <div>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Create Address</h1>
            
            
          </div>

          <hr />

          
          {/* Identification */}
          <div className="generl">
            <p>Create Address</p>
          </div>
         
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Country
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  State
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
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  City
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Area
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
                  onClick={() => setAddCheck(!addCheck)}
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
                    onClick={() => setAddCheck(!addCheck)}
                    style={{
                      color: "#000",
                      padding: "6px 22px",
                      diplay: "flex",
                      alignItems: "center",
                    }}
                    name="Save"
                  />
                </div>
              </div>

          

          
          </div>

      )}
    </>
  );
};
