import * as React from "react";
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
import SelectPopover from "../SelectPopover";
import { CreateBtn } from "../../Buttons";
import carTable from '../../img/carTable.png'
import { Createvehicle } from "./Createvehicle";
export default function Vehicles() {
  const [compCheck, setCompCheck] = React.useState(false);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Company", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

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
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center"> <img src={carTable} alt="car"/> License plate</p>
                 
              </TableCell>
              <TableCell align="center"> +92 3123456789</TableCell>
              <TableCell align="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center"> <img src={carTable} alt="car"/> License plate</p>
                 
              </TableCell>
              <TableCell align="center"> +92 3123456789</TableCell>
              <TableCell align="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center"> <img src={carTable} alt="car"/> License plate</p>
                 
              </TableCell>
              <TableCell align="center"> +92 3123456789</TableCell>
              <TableCell align="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center"> <img src={carTable} alt="car"/> License plate</p>
                 
              </TableCell>
              <TableCell align="center"> +92 3123456789</TableCell>
              <TableCell align="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center"> <img src={carTable} alt="car"/> License plate</p>
                 
              </TableCell>
              <TableCell align="center"> +92 3123456789</TableCell>
              <TableCell align="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>
            

            
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-3 flex justify-end">
      <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
    </>
      )}
    </>
  );
}
