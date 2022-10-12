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
import usePagination from "../Pagination/Pagination";
import {Pageloader} from "../Page loader/Pageloader";
import Dropdown from 'react-bootstrap/Dropdown';
import threedot from "../../../img/3dot.png";
import delImg from "../../../img/del.png";
import "../All.css"
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import  CreateFdm  from "./CreateFDM";


export default function Fdm() {

  const { http } = AuthUser();
  const [fileList , setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemId, setItemId] = useState();
  const [fdmCheck, setFdmCheck] = useState(false)

  // Api Call Function Fetch File List
  const fetchFileList = async () => {
    setLoading(true);
    let res = await http.get("/file");
    if(res.data.responseStatus === 200){
    setFileList(res.data.responseMessage);
    }
    setLoading(false)

  };

  // Api Call in useEffect
  useEffect(() => {
    fetchFileList();
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
    http.post(`/file/${itemId}`,formData)
    .then((res) => {
      
    setFileList( fileList.filter((item) => item.id !== itemId) )
    console.log("File List: ",fileList);
    setOpenDelete(false);
    })
    .catch(err =>   console.log(err.message))
    
    
  }

  // Pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(fileList.length / PER_PAGE);
  const _DATA = usePagination(fileList, PER_PAGE);

  // console.log(typeof( _DATA.currentData()));

  const paginationHandler = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
    {
      fdmCheck ? (
        <CreateFdm />
      ) : (
        <>
<div style={{ height: 400, width: "100%" }}>
      <Toolbar />
      <div className='flex justify-between'>

          <h1 className='text-base text-bold mb-0 ml-5'>Files</h1>
          <div className='mr-5'>
          <CreateBtn 
          onClick = {() => setFdmCheck(!fdmCheck)}
          name='Create New' icon={<AddIcon/>} />
          
          </div>

        </div>

        <div className="p-3  mt-2" style={{background: '#F4E9E4',boxShadow: 'inset 0px -1px 0px #F0F0F0'
}}>
          <h1 className='text-base  mb-0 ml-5'>Files</h1>

        </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Expert name</TableCell>
              <TableCell align="center">License plate</TableCell>

              <TableCell align="center">Vehicle's Owner</TableCell>
              <TableCell align="center">Order Date</TableCell>
              <TableCell align="center"> Inspection date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          {loading ? (
                  <Pageloader />
                ) : (
          <TableBody>
            
            {  fileList &&
            _DATA.currentData().map((data, index) => {
                      return (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <p className="mb-0">{data.gd_expert_name}</p>
                          <p className="mb-0 text-slate-400">{data.gd_clerk_name}</p>
                        </TableCell>
                        <TableCell align="center">{data.gd_license_plate}</TableCell>
                        <TableCell align="center">{data.gd_owner_name}
                        </TableCell>
                        <TableCell align="center">{data.gd_order_date}
                        </TableCell>
                        <TableCell align="center">{data.gd_inspection_date}
                        </TableCell>
                        <TableCell align="center  ">
                          
                                  {/* Dropdown */}
                                <Dropdown className="dropdown" >
                                    <Dropdown.Toggle id="dropdown-basic" >
                                    <img src={threedot} alt="threedot" />
                                    </Dropdown.Toggle>
                                    
                                      <Dropdown.Menu>
                                      <Dropdown.Item >Copy</Dropdown.Item>
                                      <Dropdown.Item >Edit</Dropdown.Item>
                                      <Dropdown.Item onClick={ () =>  handleClickOpenDelete(data.id)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>

                                  {/* Delete Modal */}
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
                      )
            })
            
            }
          </TableBody>
                )}
        </Table>
      </TableContainer>
      <div className="mt-3 flex justify-end">
      <Pagination
                  count={count}
                  variant="outlined"
                  shape="rounded"
                  onChange={paginationHandler}
                />
      </div>
    </div>
        </>
      )
    }
    </>
    
  );
}
