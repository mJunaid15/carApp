import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Usermanagment from "./Usermanagment";
import { Toolbar } from "@mui/material";

export const Usermanagementcreate = (props) => {
  const [usermanagementCheck, setusermanagementCheck] = useState(false);
console.log("create props : ",props);
  return (
    <>
      {usermanagementCheck ? (
        <Usermanagment />
      ) : (
        <div>
          <Toolbar />
          <div className="flex justify-between">
            <div className="mr-5">
              <Button
                onClick={() => setusermanagementCheck(!usermanagementCheck)}
                style={{
                  color: "#000",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                Back to expert
              </Button>
            </div>
          </div>

          <hr />

          <div className="generl">
            <p>General</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Solution
                </p>

                <TextField fullWidth label="HI" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Title </p>

                <TextField fullWidth label="Expert" id="0317258963" />
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
            <p>Contact</p>
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
        </div>
      )}
    </>
  );
};
