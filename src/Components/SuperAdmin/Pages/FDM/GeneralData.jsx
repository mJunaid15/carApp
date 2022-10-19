import { TextField } from '@mui/material'
import React from 'react'
import { CreateBtn } from '../../../Buttons'

const GeneralData = () => {
  return (
    <div>
        
        <div>
          {/* Identification */}
        <div className="generl">
          <p>Overview</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                License plate
              </p>

              <TextField fullWidth label="Enter license plate no" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Vehicle manufacturer
              </p>

              <TextField
                fullWidth
                label="Enter your position"
                id=""
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-3">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Vehicle mode
            </p>

            <TextField
              fullWidth
              label="Enter Vehicle Model"
              id=""
            />
          </div>
        </div>


        <div className="generl mt-5">
          <p>Owner Details</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Owner Name              </p>

              <TextField fullWidth label="Country name" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                State / City              </p>

              <TextField
                fullWidth
                label="Enter your state with city "
                id=""
              />
            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Country               </p>

              <TextField fullWidth label="Select Country" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Email              </p>

              <TextField
                fullWidth
                label="Enter your email address"
                id=""
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-3">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Contact No            </p>

            <TextField
              fullWidth
              label="Contact no"
              id=""
            />
          </div>
        </div>


        <div className="generl mt-5">
          <p>General</p>
        </div>

        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Order date              </p>

              <TextField
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
                Inspection date              </p>

              <TextField
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
                Name of the expert              </p>

              <TextField
                fullWidth
                label="example"
                id=""
              />
            </div>
          </div>
        </div>



        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Clerk              </p>
              <TextField
                fullWidth
                label="example"
                id=""
              />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                order placement              </p>
              <TextField
                fullWidth
                label="Enter date"
                id=""
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                VAT rate              </p>

              <TextField
                fullWidth
                label="Enter date"
                id=""
              />
            </div>
          </div>
        </div>

        <div className="generl mt-5">
          <p>Address</p>
        </div>

        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Country               </p>

              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: "darkgray", }}>
                <option selected>Select Country</option>
                <option value="1">Pakistan</option>
                <option value="2">Iran</option>
                <option value="3">China</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                ZIP / City              </p>
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: "darkgray", }}>
                <option selected>Select City</option>
                <option value="1">Pakistan</option>
                <option value="2">Iran</option>
                <option value="3">China</option>
              </select>

            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="Street Number">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Street no               </p>

              <TextField fullWidth label="Select Country" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Mailbox              </p>

              <TextField
                fullWidth
                label="Enter your mail box"
                id=""
              />
            </div>
          </div>
        </div>


        <div className="flex justify-between mt-5 my-6">

          <CreateBtn
            // onClick={() => setCompanyCheck(!companyCheck)}
            style={{
              color: "gray",
              padding: "6px 22px",
              diplay: "flex",
              alignItems: "center",
            }}
            name="Cancel"
          />
          <div className="mr-5">
            <CreateBtn
              // onClick={() => setCompanyCheck(!companyCheck)}
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
    </div>
  )
}

export default GeneralData