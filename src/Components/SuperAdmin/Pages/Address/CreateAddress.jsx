import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import AuthUser from "../../Auth/AuthUser";
import Addresses from "./Addresses";
import WestIcon from '@mui/icons-material/West';
import '../All.css'

export const CreateAddress = (props) => {

  console.log("Props: ", props);

  const { http } = AuthUser();

  const [addressCheck, setAddressCheck] = useState(false);
  
 // Fields States
 const [title, setTitle] = useState("");
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [mobile, setMobile] = useState("");
 const [fax, setFax] = useState("");
 const [country, setCountry] = useState("");
 const [city, setCity] = useState("");
 const [streetNo, setStreetNo] = useState("");
 const [mailbox, setMailbox] = useState("");
 const [companyId, setCompanyId] = useState("");
 const [salutaion, setSalutaion] = useState("");
 const[ homepage, setHomepage] = useState("");
 const [telephone, setTelephone] = useState("");
 const [ addComment, setAddComment] = useState("");
 const [vatId, setVatId] = useState("");
  



  // Handle Cancel Button

  const handleCancel = () => {
    setAddressCheck(!addressCheck)
  }


  // Handle Create company
  const handleSave = () => {
    
    const formData = new FormData();

    formData.append("title", title)
    formData.append("first_name", firstName)
    formData.append("last_name", lastName)
    formData.append("email", email)
    formData.append("mobile", mobile)
    formData.append("fax", fax)
    formData.append("country", country)
    formData.append("city", city)
    formData.append("street_no", streetNo)
    formData.append("mailbox", mailbox)
    formData.append("company_id", companyId)
    formData.append("salutaion", salutaion)
    formData.append("homepage", homepage)
    formData.append("telephone", telephone)
    formData.append("add_comment", addComment)
    formData.append("vat_id", vatId)


    http.post(`/address`, formData)
    .then((res) => {
      setAddressCheck(!addressCheck)
    }).catch(err => console.log(err.message))
  
        
  };

  // Handle Edit Company
  const handleEditCompany = () => {
    const formData = new FormData();
    {
      title != ""
      ? formData.append("title", title)
      : formData.append("title", props.editItem.title)
    }
    {
      firstName != ""
        ? formData.append("first_name", firstName)
        : formData.append("first_name", props.editItem.first_name);
    }
    {
      lastName != ""
        ? formData.append("last_name", lastName)
        : formData.append("last_name", props.editItem.last_name);
    }
    {
      email != ""
        ? formData.append("email", email)
        : formData.append("email", props.editItem.email);
    }
    {
      mobile != ""
        ? formData.append("mobile", mobile)
        : formData.append("mobile", props.editItem.mobile);
    }

    {
      fax != ""
        ? formData.append("fax", fax)
        : formData.append("fax", props.editItem.fax);
    }

    {
      country != ""
        ? formData.append("country", country)
        : formData.append("country", props.editItem.country);
    }

    {
      city != ""
        ? formData.append("city", city)
        : formData.append("city", props.editItem.city);
    }

    {
      streetNo != ""
        ? formData.append("street_no", streetNo)
        : formData.append("street_no", props.editItem.street_no);
    }

    {
      mailbox != ""
        ? formData.append("mailbox", mailbox)
        : formData.append("mailbox", props.editItem.mailbox);
    }
    {
      companyId != ""
        ? formData.append("company_id", companyId)
        : formData.append("company_id", props.editItem.company_id);
    }

    {
      salutaion != ""
        ? formData.append("salutaion", salutaion)
        : formData.append("salutaion", props.editItem.salutaion);
    }

    

    {
      homepage != ""
        ? formData.append("homepage", homepage)
        : formData.append("homepage", props.editItem.homepage);
    }

    {
      telephone != ""
        ? formData.append("telephone", telephone)
        : formData.append("telephone", props.editItem.telephone);
    }


    {
      addComment != ""
        ? formData.append("add_comment", addComment)
        : formData.append("add_comment", props.editItem.add_comment);
    }



    formData.append("_method", "PUT");
    formData.append("vat_id", props.editItem.vat_id);
    
    
    
    http
      .post(`address/${props.editItem.id}`, formData)
      .then((res) => {
        setAddressCheck(!addressCheck) })
      .catch((err) => console.log(err.response.data.errors));
    
  };

//   Handle Back
  const handleBack = () => {
    setAddressCheck(!addressCheck) 
 }




  return (
    <>
      {addressCheck ? (

        <Addresses />
      ) : (
        <div>
          <Toolbar />
          <div className="flex border-slate-400 backButton" onClick={handleBack}>
        <WestIcon />
        { props && props.editItem ? (<h1 className="text-base text-bold mb-0 ml-5">{props.editItem.title}</h1>) :(
            <h1 className="text-base text-bold mb-0 ml-5">Create Address</h1>) }
          
        </div>
          <div className="flex justify-between">
          
            
            
          </div>

          {/* <hr /> */}

          
          {/* General */}
          <div className="generl mt-3">
            <p>General</p>
          </div>
          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   Salutation
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? salutaion : props.editItem.salution  }
                onChange={(e) => setSalutaion(e.target.value)}
                fullWidth label="Enter Salutation" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 Title
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? title : props.editItem.title  }
                onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  label="Enter Title"
                  id="0317258963"
                />
              </div>
            </div>
          </div> 

          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   First Name
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? firstName : props.editItem.first_name  }
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth label="Enter First Name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 Surname
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? lastName : props.editItem.last_name  }
                onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  label="Enter Surname"
                  id="0317258963"
                />
              </div>
            </div>
          </div> 

          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   Company
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? companyId : props.editItem.company_id  }
                onChange={(e) => setSalutaion(e.target.value)}
                fullWidth label="Enter Company" id="0317258963" />
              </div>
            </div>

            
          </div> 
          <br />

           {/* Contact */}
           <div className="generl mt-3">
            <p>Contact</p>
          </div>
          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   E-mail
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? email : props.editItem.title  }
                onChange={(e) => setEmail(e.target.value)}
                fullWidth label="Enter E-mail" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 Homepage
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? homepage : props.editItem.homepage  }
                onChange={(e) => setHomepage(e.target.value)}
                  fullWidth
                  label="http:/"
                  id="0317258963"
                />
              </div>
            </div>
          </div> 

          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   Telephone
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? telephone : props.editItem.telephone  }
                onChange={(e) => setTelephone(e.target.value)}
                fullWidth label="+9212232323" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 Mobile
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? mobile : props.editItem.mobile  }
                onChange={(e) => setMobile(e.target.value)}
                  fullWidth
                  label="+92312232323"
                  id="0317258963"
                />
              </div>
            </div>
          </div> 

          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   Fax
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? fax : props.editItem.fax  }
                onChange={(e) => setFax(e.target.value)}
                fullWidth label="Enter Fax" id="0317258963" />
              </div>
            </div>

            
          </div> 
          <br />


            {/* Address */}
            <div className="generl mt-3">
            <p>Address</p>
          </div>
          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   Country
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? country : props.editItem.country  }
                onChange={(e) => setCountry(e.target.value)}
                fullWidth label="Enter Country" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 ZIP / City
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? city : props.editItem.city  }
                onChange={(e) => setCity(e.target.value)}
                  fullWidth
                  label="Enter city"
                  id="0317258963"
                />
              </div>
            </div>
          </div> 

          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   Street Number
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? streetNo : props.editItem.street_no  }
                onChange={(e) => setStreetNo(e.target.value)}
                fullWidth label="Enter Street Number" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 Mailbox
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? mailbox : props.editItem.mailbox  }
                onChange={(e) => setMailbox(e.target.value)}
                  fullWidth
                  label="Enter Mailbox"
                  id="0317258963"
                />
              </div>
            </div>
          </div> 

          <br />


            {/* Miscellaneous */}
            <div className="generl mt-3">
            <p>Miscellaneous</p>
          </div>
          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   Comment
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? addComment : props.editItem.add_comment  }
                onChange={(e) => setAddComment(e.target.value)}
                fullWidth label="Enter Comment" id="0317258963" />

              </div>
            </div>

            <div className="col-lg-6">

              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 VAT ID
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? vatId : props.editItem.vat_id  }
                onChange={(e) => setVatId(e.target.value)}
                  fullWidth
                  label="Enter VAT ID"
                  id="0317258963"
                />
              </div>
            </div>
          </div> 

          
          
          
          <br />

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
                                  onClick={ () => {
                                    if(props.editItem == undefined){
                                        handleSave()
                                      }
                                      handleEditCompany()   
                                } }
                                  >
                                  Save
                                </Button>
                              </div>

        </div>
      )}
    </>
  );
};


