import * as React from "react";
import { useState , useEffect} from "react";
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
import carTable from '../../../img/carTable.png'
import { Createvehicle } from "./Createvehicle";
import AuthUser from "../../Auth/AuthUser";
import usePagination from "../Pagination/Pagination";
import { Pageloader } from "../Page loader/Pageloader";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "@mui/material/Button";
import threedot from "../../../img/3dot.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import delImg from "../../../img/del.png";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";


export default function Vehicles() {
  const [compCheck, setCompCheck] = React.useState(false);

  

  const { http } = AuthUser();
  const [vehicleList, setVehicleList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemId, setItemId] = useState();
  const [editIndex,setEditIndex] = useState(null)

  // Api Call Function Fetch Vehicle List
  const fetchVehicleList = async () => {
    setLoading(true);
    let res = await http.get("/vehicle");
    setVehicleList(res.data.responseMessage);
    setLoading(false);
  };

  // Api Call in useEffect
  useEffect(() => {
    fetchVehicleList();
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
    http.post(`/vehicle/${itemId}`,formData)
    .then((res) => {
      
    setVehicleList( vehicleList.filter((item) => item.id !== itemId) )
    setOpenDelete(false);
    })
    .catch(err =>   console.log(err.message))
    
  }

      // Pagination
      let [page, setPage] = useState(1);
      const PER_PAGE = 5;
    
      const count = Math.ceil(vehicleList.length / PER_PAGE);
      const _DATA = usePagination(vehicleList, PER_PAGE);
    
      const paginationHandler = (e, p) => {
        setPage(p);
        _DATA.jump(p);
      };


  return (

    <>
     {compCheck ? (
        <Createvehicle />
      ) : (
        <>
    <div style={{ height: 400, width: "100%" }}>
      
      <Toolbar />
      <div className='flex justify-between'>

          <h1 className='text-base text-bold mb-0 ml-5'> List Of Vehicles</h1>
          <div className='mr-5'>
          <CreateBtn name='Create ' icon={<AddIcon/>}   onClick={() => setCompCheck(!compCheck)}/>
          
          </div>

        </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> License plate </TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          
          
                          {loading ? (
                  <Pageloader />
                ) : (
                  <TableBody>
                    {_DATA.currentData().map((data, index) => {
                      return (
                        <>
                        {editIndex === index ? (
                          <div>
                            <h3>Edit Vehicle</h3>

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
                                // handleEditAddress(data);
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
                            <p className="mb-0 flex items-center"> <img src={carTable} alt="car"/>{data.license_plate}</p>
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
      )}
    </>
  );
}
