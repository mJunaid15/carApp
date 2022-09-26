import * as React from "react";
import { useState, useEffect } from "react";
import { Toolbar } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import AddIcon from '@mui/icons-material/Add';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CreateBtn } from "../../../Buttons";
import AuthUser from "../../Auth/AuthUser";
import {Pageloader} from "../Page loader/Pageloader";
import usePagination from "../Pagination/Pagination";
import Button from "@mui/material/Button";
import threedot from "../../../img/3dot.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import delImg from "../../../img/del.png";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import Dropdown from 'react-bootstrap/Dropdown';
import '../All.css'


export default function Addresses() {

  const { http } = AuthUser();
  const [addressList , setAddressList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemId, setItemId] = useState();
  const [editIndex,setEditIndex] = useState(null)

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

  // Api Call Function Fetch Address List
  const fetchAddressList = async () => {
    setLoading(true);
    let res = await http.get("/address");
    setAddressList(res.data.responseMessage);
    setLoading(false);
  };

  // Api Call in useEffect
  useEffect(() => {
    fetchAddressList();
  }, []);

  // Popover Code
  const [openDelete, setOpenDelete] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));


  const handleClickOpenDelete = (id) => {
    setItemId(id)
    setOpenDelete(true);
    
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  // Delete Api Function
  const handleDeleteAPI = () => {

    const formData = new FormData();
    formData.append('_method', 'DELETE');
    http.post(`/address/${itemId}`,formData)
    .then((res) => {
      
    setAddressList( addressList.filter((item) => item.id != itemId) )
    setOpenDelete(false);
    })
    .catch(err =>   console.log(err.message))
    
  }

  // Handle Edit Api
  const handleEditAddress = (data) => {
  
    const formData = new FormData();
    {
      title != ""
      ? formData.append("title", title)
      : formData.append("title", data.title)
    }
    {
      firstName != ""
        ? formData.append("first_name", firstName)
        : formData.append("first_name", data.first_name);
    }
    {
      lastName != ""
        ? formData.append("last_name", lastName)
        : formData.append("last_name", data.last_name);
    }
    {
      email != ""
        ? formData.append("email", email)
        : formData.append("email", data.email);
    }
    {
      mobile != ""
        ? formData.append("mobile", mobile)
        : formData.append("mobile", data.mobile);
    }

    {
      fax != ""
        ? formData.append("fax", fax)
        : formData.append("fax", data.fax);
    }

    {
      country != ""
        ? formData.append("country", country)
        : formData.append("country", data.country);
    }

    {
      city != ""
        ? formData.append("city", city)
        : formData.append("city", data.city);
    }

    {
      streetNo != ""
        ? formData.append("street_no", streetNo)
        : formData.append("street_no", data.street_no);
    }

    {
      mailbox != ""
        ? formData.append("mailbox", mailbox)
        : formData.append("mailbox", data.mailbox);
    }
    {
      companyId != ""
        ? formData.append("company_id", companyId)
        : formData.append("company_id", data.company_id);
    }

    {
      salutaion != ""
        ? formData.append("salutaion", salutaion)
        : formData.append("salutaion", data.salutaion);
    }

    

    {
      homepage != ""
        ? formData.append("homepage", homepage)
        : formData.append("homepage", data.homepage);
    }

    {
      telephone != ""
        ? formData.append("telephone", telephone)
        : formData.append("telephone", data.telephone);
    }


    {
      addComment != ""
        ? formData.append("add_comment", addComment)
        : formData.append("add_comment", data.add_comment);
    }



    formData.append("_method", "PUT");
    formData.append("vat_id", data.vat_id);
    
    
    
    http
      .post(`address/${data.id}`, formData)
      .then((res) => {
        if(res.status == 200){
          setTitle()
          setFirstName()
          setLastName()
          setEmail()
          setMobile()
          setFax()
          setCountry()
          setCity()
          setStreetNo()
          setMailbox()
          setSalutaion()
          setHomepage()
          setTelephone()
          setAddComment()
          fetchAddressList()
        }
      })
      .catch((err) => console.log(err.response.data.errors));

  }

  

    // Pagination
    let [page, setPage] = useState(1);
    const PER_PAGE = 5;
  
    const count = Math.ceil(addressList.length / PER_PAGE);
    const _DATA = usePagination(addressList, PER_PAGE);
  
    const paginationHandler = (e, p) => {
      setPage(p);
      _DATA.jump(p);
    };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Toolbar />
      {editIndex != null ? null : (
      <div className='flex justify-between'>

          <h1 className='text-base text-bold mb-0 ml-5'>List of Address</h1>
          <div className='mr-5'>
          <CreateBtn name='Create ' icon={<AddIcon/>} />
          
          </div>

        </div>)}

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
              {editIndex != null ? null : (
                 <TableHead>
                    <TableRow>
                      <TableCell>Country</TableCell>
                      <TableCell align="center">City</TableCell>
                      <TableCell align="center">Area</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>) }
                {loading ? (
                  <Pageloader />
                ) : (
                  <TableBody>
                    {_DATA.currentData().map((data, index) => {
                      return (
                        <>
                        {editIndex == index ? (
                          <div style={{ padding: "25px" }}>
                          <div className="company">
                            <p>Edit Address</p>
                          </div>
                          
                          <div className="row mt-5">
                            <div className="col-lg-4">
                              <div className="company">
                                <TextField
                                  fullWidth
                                  label="Title"
                                  defaultValue={data.title}
                                  onChange={(e) => setTitle(e.target.value)}
                                />
                              </div>
                            </div>
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setFirstName(e.target.value)
                                  }
                                  defaultValue={data.first_name}
                                  fullWidth
                                  label="First Name"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setLastName(e.target.value)
                                  }
                                  defaultValue={data.last_name}
                                  fullWidth
                                  label="Last Name"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="row mt-5">
                            <div className="col-lg-4">
                              <div className="company">
                                <TextField
                                  onChange={(e) =>
                                    setEmail(e.target.value)
                                  }
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
                                  onChange={(e) => setMobile(e.target.value)}
                                  defaultValue={data.mobile}
                                  fullWidth
                                  label="Mobile Number"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) => setFax(e.target.value)}
                                  defaultValue={data.fax}
                                  fullWidth
                                  label="Fax Number"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="row mt-5">
                           
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setCountry(e.target.value)
                                  }
                                  defaultValue={data.country}
                                  fullWidth
                                  label="Country"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                            <div className="col-lg-4">
                              <div className="company">
                                <TextField
                                  onChange={(e) => setCity(e.target.value)}
                                  defaultValue={data.city}
                                  fullWidth
                                  label="City"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setStreetNo(e.target.value)
                                  }
                                  defaultValue={data.street_no}
                                  fullWidth
                                  label="Street No."
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="row mt-5">
                           
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setMailbox(e.target.value)
                                  }
                                  defaultValue={data.mailbox}
                                  fullWidth
                                  label="Mailbox"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                disabled= {true}
                                  // onChange={(e) =>
                                  //   setCompanyId(e.target.value)
                                  // }
                                  defaultValue={data.company_id}
                                  fullWidth
                                  label="Company ID"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setSalutaion(e.target.value)
                                  }
                                  defaultValue={data.salutaion}
                                  fullWidth
                                  label="Salutaion"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          </div>
                          
                          
                          <div className="row mt-5">
                           
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setHomepage(e.target.value)
                                  }
                                  defaultValue={data.homepage}
                                  fullWidth
                                  label="Homepage"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setTelephone(e.target.value)
                                  }
                                  defaultValue={data.telephone}
                                  fullWidth
                                  label="Telephone"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                          
                            <div className="col-lg-4">
                              <div className="managing">
                                <TextField
                                  onChange={(e) =>
                                    setAddComment(e.target.value)
                                  }
                                  defaultValue={data.add_comment}
                                  fullWidth
                                  label="Add Comment"
                                  id="0317258963"
                                />
                              </div>
                            </div>
                          
                            
                          </div> 
                          
                          <div className="flex justify-between mt-5 mb -5">
                            <Button
                              className="text-black"
                              onClick={() => {
                                setEditIndex(null)
                              }}
                              
                            >
                              Cancel
                            </Button>
                          
                            <Button
                              className="text-white"
                              style={{ backgroundColor: "#5A4A42" }}
                              onClick={() => {
                                handleEditAddress(data);
                                setEditIndex(null);
                                
                              }}
                            >
                              Save
                            </Button>
                          </div>
                          </div>
                        ): (
                          <>
                          {editIndex != null ? null : (
                          <TableRow
                          key={data.id}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <p className="mb-0">{data.country}</p>
                            {/* <p className="mb-0 text-slate-400">
                              {data.country}
                            </p> */}
                          </TableCell>
                          <TableCell align="center">
                            {data.city}
                          </TableCell>
                          <TableCell align="center">
                            {data.street_no}
                          </TableCell>
                          <TableCell align="center  ">
                         
                          <Dropdown className="dropdown" >
                          <Dropdown.Toggle id="dropdown-basic" >
                          <img src={threedot} alt="threedot" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item >Copy</Dropdown.Item>
                            <Dropdown.Item onClick={ () =>  setEditIndex(index)}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={ () =>  handleClickOpenDelete(data.id)} >Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                      
                      
                        {/* Delete Modal  */}
                      <Dialog
                    
                            fullScreen={fullScreen}
                            open={openDelete}
                            onClose={handleCloseDelete}
                            aria-labelledby="responsive-dialog-title"   
                          >
                            
                            
                            <DialogContent >
                              <div className="lg:absolute lg:top-[-40px] lg:left-[40%] flex justify-center">
                                <img src={delImg} alt="del" />   
                              </div>
                              <div className="bg-white p-4 mt-4">
                                <h1 className="text-2xl">Are You Sure To Delete This Company?</h1>
                              </div>
                              <div className="flex justify-center">
                              <Button autoFocus onClick={handleCloseDelete} className="text-black">
                                Cancel
                              </Button>
                              
                              <CreateBtn
                                onClick={handleDeleteAPI} 
                                name="Delete"
                                />
                            
                              </div>
                            </DialogContent>
                            
                      </Dialog>
                           

                          </TableCell>
                        </TableRow>
                        )}
                        </>
                        )}
                        </>
                        
                      );
                    })}
                  </TableBody>
                )}
              </Table>
      </TableContainer>
      {editIndex != null ? null : (
      <div className="mt-3 flex justify-end">
       <Pagination
                  count={count}
                  variant="outlined"
                  shape="rounded"
                  onChange={paginationHandler}
                />
      </div>)}
    </div>
  );
}
