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
import SelectPopover from "../SelectPopover";



export default function Vehicles() {
  const [compCheck, setCompCheck] = React.useState(false);

  

  const { http } = AuthUser();
  const [vehicleList, setVehicleList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemId, setItemId] = useState();
  const [editIndex,setEditIndex] = useState(null)
  const [editItem, setEditItem] = useState()


  // Api Call Function Fetch Vehicle List
  const fetchVehicleList = async () => {
    setLoading(true);
    let res = await http.get("/vehicle");
    if (res.data.responseStatus === 200) {
      setVehicleList(res.data.responseMessage);
        
      }
    
    setLoading(false);
  };

  // Api Call in useEffect
  useEffect(() => {
    fetchVehicleList();
  }, []);

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
     {compCheck || editIndex != null ? (
      
        <Createvehicle editIndex={editIndex}  editItem = {editItem} />
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
                    { vehicleList && 
                    _DATA.currentData().map((data, index) => {
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

                          <TableCell align="center">
                            <SelectPopover
                              {...data}
                              apiName="vehicle"
                              SetState={setVehicleList}
                              state={vehicleList}
                              setEditIndex={setEditIndex}
                              index={index}
                              setEditItem ={setEditItem}
                            />
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
