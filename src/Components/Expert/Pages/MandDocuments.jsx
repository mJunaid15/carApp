import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Company from "./Company";
import { Toolbar } from "@mui/material";
import { CreateBtn } from "../../Buttons";
import { Mandatory } from "./Mandatory";
import VehiclesMand from "./VehiclesMand";

export const MandDocuments = () => {
  const [docCheck, setDocCheck] = useState(false);

  return (
    <>
      {docCheck ? (
        <VehiclesMand />
      ) : (
        <div>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Documents</h1>
            <div className="mr-5">
              <Button
                onClick={() => setDocCheck(!docCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                Create New +
              </Button>
            </div>
          </div>

          <hr />

          
          <div className="generl">
            <p>Documents</p>
          </div>
         


          
          </div>

      )}
    </>
  );
};
