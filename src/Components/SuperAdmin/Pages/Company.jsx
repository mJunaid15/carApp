import * as React from "react";
import { useState } from "react";
import { Toolbar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SelectPopover from "../SelectPopover";
import { CreateBtn } from "../../Buttons";
import { useNavigate } from "react-router-dom";
import { Createcompany } from "./Createcompany";
import AuthUser from "../../AuthUser";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from 'axios'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


export function Company() {
  const { http } = AuthUser();
  const [companylist, setCompanylist] = useState();
  const [editCompany, setEditCompany] = useState(false);
  const [editIndex, setEditIndex]= useState(null);


  // Fields States
  const [name, setName] = useState('')
  const [director, setDirector] = useState('')
  const [person, setPerson] = useState('')
  const [taxNumber, setTaxNumber] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [mobile, setMobile] = useState('')
  const [fax, setFax] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [streetNo, setStreetNo] = useState('')
  const [mailbox, setMailbox] = useState('')


  React.useEffect(() => {
    // console.log("COMPANY USE EFFECT");
    fetchListCompany()
    
    
  }, []);
  
  const [compCheck, setCompCheck] = useState(false);
  const fetchListCompany = async () => {
    // api call
let res = await http.get('/company')
setCompanylist(res.data.responseMessage)


};

  const handleEditCompany = (data) => {
    const formData = new FormData();
    {name != "" ? 
    formData.append('name', name)
    : formData.append('name', data.name)
    }
    { director != "" ?
      formData.append('director', director)
      :formData.append('director', data.director)
    }
    { person != "" ?
    formData.append('person', person)
    :formData.append('person', data.person)
    }

    { taxNumber != "" ?
    formData.append('tax_number', taxNumber)
    :formData.append('tax_number', data.tax_number)
    }

    { email != "" ?
    formData.append('email', email)
    :formData.append('email', data.email)
    }

    { phone != "" ?
    formData.append('phone', phone)
    :formData.append('phone', data.phone)
    }

    { mobile != "" ?
    formData.append('mobile', mobile)
    :formData.append('mobile', data.mobile)
    }

    { fax != "" ?
    formData.append('fax', fax)
    :formData.append('fax', data.fax)
    }

    { country != "" ?
    formData.append('country', country)
    :formData.append('country', data.country)
    }


    { city != "" ?
    formData.append('city', city)
    :formData.append('city', data.city)
    }

    { streetNo != "" ?
    formData.append('street_no', streetNo)
    :formData.append('street_no', data.street_no)
    }

    { mailbox != "" ?
    formData.append('mailbox', mailbox)
    :formData.append('mailbox', data.mailbox)
    }

    
    formData.append('_method', 'PUT');
    formData.append('register', data.register)


  
   http.post(`company/${data.id}`, formData)
   .then((res) => {
    setName('')
    setDirector('')
    setPerson('')
    setTaxNumber('')
    setEmail('')
    setPhone('')
    setMobile('')
    setFax('')
    setCountry('')
    setCity('')
    setStreetNo('')
    setMailbox('')
    fetchListCompany()

  

   }).catch(err => console.log(err.message))

  }


  return (
    <>
      {compCheck ? (
        <Createcompany />
      ) : (
        <>
          <div style={{ height: 400, width: "100%" }}>
            <Toolbar />
            {editIndex != null ? null : (
                
                
            <div className="flex justify-between">
              <h1 className="text-base text-bold mb-0 ml-5">List of Company</h1>
              <div className="mr-5">
                <CreateBtn
                  name="Create"
                  icon={<AddIcon />}
                  onClick={() => setCompCheck(!compCheck)}
                />
              </div>
            </div>
            )}

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {editIndex != null ? null : (
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Contact</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>)
                }
                <TableBody>
                  {companylist?.map((data, index) => {
                     
                    return (
                      <>
                      
                      {editIndex == index ? ( 
                        <div style={{padding: '25px'}}>
                              <div className="company">
                                  <p>Edit Company</p>
                                </div>

                              
                                <div className="row mt-5">
                                  <div className="col-lg-4">
                                    <div className="company">
                                      
                                      <TextField
                                       fullWidth label='Name'
                                        defaultValue={data.name}
                                         onChange ={ (e) => setName(e.target.value)}
                                         />
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="managing">
                                      

                                      <TextField
                                         onChange ={ (e) => setDirector(e.target.value)}

                                        defaultValue={data.director}
                                        fullWidth
                                        label="Director"
                                        id="0317258963"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="managing">
                                    

                                      <TextField
                                         onChange ={ (e) => setPerson(e.target.value)}

                                      defaultValue={data.person}
                                        fullWidth
                                        label="Person"
                                        id="0317258963"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row mt-5">
                                  <div className="col-lg-4">
                                    <div className="company">
                                      
                                      <TextField 
                                         onChange ={ (e) => setTaxNumber(e.target.value)}

                                      defaultValue={data.tax_number}
                                      fullWidth label="Tax Number" id="0317258963" />
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="managing">
                                      

                                      <TextField
                                         onChange ={ (e) => setEmail(e.target.value)}

                                      defaultValue={data.email}
                                        fullWidth
                                        label="Email"
                                        id="0317258963"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="managing">
                                     
                                      <TextField
                                         onChange ={ (e) => setPhone(e.target.value)}

                                      defaultValue={data.phone}
                                        fullWidth
                                        label="Phone"
                                        id="0317258963"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row mt-5">
                                  <div className="col-lg-4">
                                    <div className="company">
                                     
                                      <TextField 
                                         onChange ={ (e) => setMobile(e.target.value)}

                                      defaultValue={data.mobile}
                                      fullWidth label="Mobile" id="0317258963" />
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="managing">
                                      
                                      <TextField
                                         onChange ={ (e) => setFax(e.target.value)}

                                      defaultValue={data.fax}
                                        fullWidth
                                        label="Fax"
                                        id="0317258963"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="managing">
                                     

                                      <TextField
                                         onChange ={ (e) => setCountry(e.target.value)}

                                      defaultValue={data.country}
                                        fullWidth
                                        label="Country"
                                        id="0317258963"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row mt-5">
                                  <div className="col-lg-4">
                                    <div className="company">
                                     

                                      <TextField 
                                         onChange ={ (e) => setCity(e.target.value)}

                                      defaultValue={data.city}
                                      fullWidth label="City" id="0317258963" />
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="managing">
                                      
                                      <TextField
                                         onChange ={ (e) => setStreetNo(e.target.value)}

                                      defaultValue={data.street_no}
                                        fullWidth
                                        label="Street No."
                                        id="0317258963"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="managing">
                                     

                                      <TextField
                                         onChange ={ (e) => setMailbox(e.target.value)}

                                      defaultValue={data.mailbox}
                                        fullWidth
                                        label="Mailbox"
                                        id="0317258963"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="flex justify-between mt-5 mb -5">
                                  <Button  className="text-black"
                                  onClick={() => setEditIndex(null)}
                                  >
                                    Cancel
                                    
                                  </Button>


                                  <Button  className="text-white"
                                    style={{backgroundColor: '#5A4A42'}}
                                    onClick={() => {
                                     
                                      handleEditCompany(data)
                                      setEditIndex(null)
                                    }}

                                  >
                                    Save
                                    
                                  </Button>
                                  
                                  </div>
          

                        </div>
                       ) : (
                        <>
                        { editIndex != null ? null : 
                        <TableRow key={data.id}
                           
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
                         
    
                              <TableCell component="th" scope="row">
                              <p className="mb-0">{data.name}</p>
                              <p className="mb-0 text-slate-400">{data.email}</p>
                            </TableCell>
                            <TableCell align="center">{data.mobile}</TableCell>
                            <TableCell align="center">{data.city}</TableCell>
                            <TableCell align="center  ">
                              <SelectPopover data={data} setState={setCompanylist} setEditIndex={setEditIndex} index={index} state={companylist}  />      
                            </TableCell>
    
                        </TableRow>  
                         }
                        </>
                      )}
                    </>
                          
                    )
                
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {editIndex != null ? null : (
            <div className="mt-3 flex justify-end">
              <Pagination count={10} variant="outlined" shape="rounded" />
            </div>)}
          </div>
        </>
      )}
    </>
  );
}
