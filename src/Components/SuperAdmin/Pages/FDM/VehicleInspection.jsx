import { TextField } from "@mui/material";
import React from "react";
import { CreateBtn } from "../../../Buttons";

const VehicleInspection = () => {
  return (
    <div>
      <div className="generl ">
        <p>Inspection</p>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          <div className="Street Number">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Ort/Firma </p>

            <TextField fullWidth label="Ort/Firma" id="0317258963" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Address </p>

            <TextField fullWidth label="Address" id="" />
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          <div className="Street Number">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>From </p>

            <TextField fullWidth  type="date" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>To </p>

            <TextField fullWidth  type="date" />
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          <div className="Street Number">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Expert </p>

            <TextField fullWidth label="Expert" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Participator{" "}
            </p>

            <TextField fullWidth label="Participator" />
          </div>
        </div>
      </div>


      <div className="flex justify-between my-6 mt-5">
            {/* <CreateBtn
              onClick={() => setcheck(!check)}
              style={{
                color: "gray",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Back"
            /> */}
            <div className="mr-5">
              <CreateBtn
                //   onClick={handleSubmit}
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
  );
};

export default VehicleInspection;
