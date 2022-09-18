import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import {Company} from "./Company";
import { Toolbar } from "@mui/material";
import AuthUser from "../../Auth/AuthUser";
import axios from 'axios'

export const Createcompany = () => {

  const { http } = AuthUser();

  const [companyCheck, setCompanyCheck] = useState(false);
  

  // Fields States
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [person, setPerson] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [country, setCountry] = useState("");
  const [zipCity, setZipCity] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [mailbox, setMailbox] = useState("");

  const [register, setRegister] = useState("");
  const [homepage, setHomepage] = useState("");




  // Handle Cancel Button

  const handleCancel = () => {
    console.log("Button Clicked");
  }


  // Handle Save 
  const handleSave = (data) => {

  

    const formData = new FormData();

    formData.append("name", name)
    formData.append("director", director)
    formData.append("person", person)
    formData.append("tax_number", taxNumber)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("mobile", mobile)
    formData.append("fax", fax)
    formData.append("country", country)
    formData.append("city", zipCity)
    formData.append("street_no", streetNo)
    formData.append("mailbox", mailbox)
    formData.append("register", register)
    formData.append("homepage", homepage)

    

    http.post(`/company`, formData)
    .then((res) => {
      console.log(res)
      setCompanyCheck(!companyCheck)
    }).catch(err => console.log(err.message))
  
    
  };




  return (
    <>
      {companyCheck ? (
        <Company />
      ) : (
        <div>
          <Toolbar />
          <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Create Company</h1>
            <div className="mr-5">
              <Button
                onClick={() => setCompanyCheck(!companyCheck)}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                COMPANIES
              </Button>
            </div>
          </div>

          <hr />

          <div className="company">
            <p>Create Company</p>
          </div>

          <div className="generl">
            <p>General</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company Name
                </p>

                <TextField
                
                
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Managing Director
                </p>

                <TextField
                 value={director}
                 onChange={(e) => setDirector(e.target.value)}
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact person
                </p>

                <TextField
                 value={person}
                 onChange={(e) => setPerson(e.target.value)}
                fullWidth label="Enter your name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField
                 value={register}
                 onChange={(e) => setRegister(e.target.value)}
                fullWidth label="Enter your text" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div className="Tax">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Tax number
                </p>

                <TextField
                 value={taxNumber}
                 onChange={(e) => setTaxNumber(e.target.value)}
                  fullWidth
                  label="Enter your tax"
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

                <TextField
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                fullWidth label="Enter email" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField 
                 value={homepage}
                 onChange={(e) => setHomepage(e.target.value)}
                fullWidth label="http:/" id="0317258963" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Telephone">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Telephone
                </p>

                <TextField
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                fullWidth label="0317258963" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>

                <TextField
                 value={mobile}
                 onChange={(e) => setMobile(e.target.value)}
                 fullWidth label="Enter Mobile number" id="0317258963" />
              </div>
            </div>


            <div className="col-lg-6 mt-5">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Fax</p>

                <TextField
                 value={fax}
                 onChange={(e) => setFax(e.target.value)}
                 fullWidth label="Enter Fax" id="0317258963" />
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

                <TextField 
                 value={country}
                 onChange={(e) => setCountry(e.target.value)}
                fullWidth label="Country name" id="Country name" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ZIP / City">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  ZIP / City
                </p>

                <TextField
                 value={zipCity}
                 onChange={(e) => setZipCity(e.target.value)}
                fullWidth label="City" id="City" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Street Number
                </p>

                <TextField 
               
                 value={streetNo}
                 onChange={(e) => setStreetNo(e.target.value)}
                fullWidth label="Street No*" id="Street No*" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

                <TextField
                
                 value={mailbox}
                 onChange={(e) => setMailbox(e.target.value)}
                  fullWidth
                  label="Enter your mail box"
                  id="Enter your mail box"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5 mb -5">
                                <Button
                                  className="text-black"
                                  onClick={handleCancel}
                                >
                                  Cancel
                                </Button>

                                <Button
                                  className="text-white"
                                  style={{ backgroundColor: "#5A4A42" }}
                                  onClick={handleSave}
                                  >
                                  Save
                                </Button>
                              </div>
        </div>
      )}
    </>
  );
};
