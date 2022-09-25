import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Usermanagment from "./Usermanagment";
import { Toolbar } from "@mui/material";
import AuthUser from "../../Auth/AuthUser";

export const Usermanagementcreate = (props) => {
  const { http } = AuthUser();

  const [usermanagementCheck, setusermanagementCheck] = useState(false);
  console.log("create props : ", props);



 // Fields States
 const [fname, setfName] = useState("");
 const [lname, setlName] = useState("");
 const [birthday, setBirthday] = useState("");
 const [password, setPassword] = useState("");
 const [passwordConfirm, setPasswordConfirm] = useState("");
 const [email, setEmail] = useState("");
 const [mobile, setMobile] = useState("");
 const [fax, setFax] = useState("");
 const [person, setPerson] = useState("");
 const [taxNumber, setTaxNumber] = useState("");
 const [phone, setPhone] = useState("");
 const [country, setCountry] = useState("");
 const [city, setCity] = useState("");
 const [street, setStreet] = useState("");
 const [mailbox, setMailbox] = useState("");
 const [role, setRole] = useState("");
 const [companyid, setCompanyid] = useState("");
 const [salutation, setSalutation] = useState("");
 const [title, setTitle] = useState("");
 const [homepage, setHomepage] = useState("");
 const [telephone, setTelephone] = useState("");




 // Handle Cancel Button

 const handleCancel = () => {
  setusermanagementCheck(true)
}


// Handle Save 
const handleSave = (data) => {



  const formData = new FormData();

  formData.append("first_name", fname)
  formData.append("last_name", lname)
  formData.append("birthday", birthday)
  formData.append("password", password)
  formData.append("password_confirmation", passwordConfirm)
  formData.append("email", email)
  formData.append("mobile", mobile)
  formData.append("fax", fax)
  formData.append("country", country)
  formData.append("city", city)
  formData.append("street_no", street)
  formData.append("mailbox", mailbox)
  formData.append("role", role)
  formData.append("company_id", companyid)
  formData.append("salutation", salutation)
  formData.append("title", title)
  formData.append("homepage", homepage)
  formData.append("telephone", telephone)
 

  

  http.post(`/user`, formData)
  .then((res) => {
    console.log(res)
    usermanagementCheck(!Usermanagment)
  }).catch(err => console.log(err.message))

  
};







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
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  First Name{" "}
                </p>

                <TextField fullWidth label="fname" id="fname"  value={fname}
                onChange={(e) => setfName(e.target.value)} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Last Name
                </p>

                <TextField fullWidth label="lname" id="0317258963"  value={lname}
                onChange={(e) => setlName(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Birthday</p>

                <TextField fullWidth label="Birthday" id="0317258963"  value={birthday}
                onChange={(e) => setBirthday(e.target.value)} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Password</p>

                <TextField fullWidth label="Password" id="0317258963"  value={password}
                onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div className="Tax">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Password Confirmation
                </p>

                <TextField fullWidth label="confirm password" id="0317258963"  value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)} />
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

                <TextField fullWidth label="exam@gmail.com" id="email"  value={email}
                onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>

                <TextField fullWidth label="mobile" id="mobile"  value={mobile}
                onChange={(e) => setMobile(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Telephone">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Fax</p>

                <TextField fullWidth label="Fax" id="fax"  value={fax}
                onChange={(e) => setFax(e.target.value)} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>

                <TextField fullWidth label="Country" id="country"  value={country}
                onChange={(e) => setCountry(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="Address mt-5">
            <p>Address</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="country">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>City</p>

                <TextField fullWidth label="city" id="Country name"  value={city}
                onChange={(e) => setCity(e.target.value)} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ZIP / City">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Street No
                </p>

                <TextField fullWidth label="street no." id="City"  value={street}
                onChange={(e) => setStreet(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

                <TextField fullWidth label="mailbox" id="Street No*"  value={mailbox}
                onChange={(e) => setMailbox(e.target.value)} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Role</p>

                <TextField fullWidth label="role" id="Enter your mail box"  value={role}
                onChange={(e) => setRole(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company id
                </p>

                <TextField fullWidth label="company id" id="Street No*"   value={companyid}
                onChange={(e) => setCompanyid(e.target.value)}/>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Salutation
                </p>

                <TextField
                  fullWidth
                  label="salutation"
                  id="Enter your mail box"
                  value={salutation}
                  onChange={(e) => setSalutation(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Title</p>

                <TextField fullWidth label="title" id="Street No*"  value={title}
                onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField
                  fullWidth
                  label="homepage"
                  id="Enter your mail box"
                  value={homepage}
                  onChange={(e) => setHomepage(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Telephone
                </p>

                <TextField fullWidth label="telephone" id="Street No*"  value={telephone}
                onChange={(e) => setTelephone(e.target.value)} />
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
