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
import SelectPopover from "./SelectPopover";
import { CreateBtn } from "../../../Buttons";

export default function Fdm() {
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
    <div style={{ height: 400, width: "100%" }}>
      <Toolbar />
      <div className='flex justify-between'>

          <h1 className='text-base text-bold mb-0 ml-5'>Files</h1>
          <div className='mr-5'>
          <CreateBtn name='Create New' icon={<AddIcon/>} />
          
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
              <TableCell>Expert name</TableCell>
              <TableCell>License plate</TableCell>

              <TableCell>vehicles Owner</TableCell>
              <TableCell align="center">Order Date</TableCell>
              <TableCell align="center"> Inspection date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0"> Name</p>
                <p className="mb-0 text-slate-400">Clerk Name</p>
              </TableCell>
              <TableCell align="center">ABC 345</TableCell>
              <TableCell align="center">Owner Name
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>
          

            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0"> Name</p>
                <p className="mb-0 text-slate-400">Clerk Name</p>
              </TableCell>
              <TableCell align="center">ABC 345</TableCell>
              <TableCell align="center">Owner Name
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0"> Name</p>
                <p className="mb-0 text-slate-400">Clerk Name</p>
              </TableCell>
              <TableCell align="center">ABC 345</TableCell>
              <TableCell align="center">Owner Name
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0"> Name</p>
                <p className="mb-0 text-slate-400">Clerk Name</p>
              </TableCell>
              <TableCell align="center">ABC 345</TableCell>
              <TableCell align="center">Owner Name
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center  ">
                
                <SelectPopover />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0"> Name</p>
                <p className="mb-0 text-slate-400">Clerk Name</p>
              </TableCell>
              <TableCell align="center">ABC 345</TableCell>
              <TableCell align="center">Owner Name
              </TableCell>
              <TableCell align="center">22/May/2022
              </TableCell>
              <TableCell align="center">22/May/2022
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
  );
}
