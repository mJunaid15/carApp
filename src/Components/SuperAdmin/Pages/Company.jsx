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

export function Company() {
  const { http } = AuthUser();
  const [companylist, setCompanylist] = useState([]);
  
  const fetchListCompany =() => {
    // let response = await http.get("/company");
    // let user = await response.data.responseMessage;
    // setCompanylist(user);
     // api call
     http
     .get("/company")
     .then((res) => {
        setCompanylist(res.data.responseMessage);
     })
     .catch((err) => {
       console.log('error',err);
    
     });
  };

  console.log(typeof(companylist));
  console.log(companylist);

  React.useEffect(() => {
 
    fetchListCompany();
  }, []);
  const [compCheck, setCompCheck] = useState(false);

  function createData(id, name, email, mobile, city) {
    return {id, name, email, mobile, city };
  }

  
  // const rows = [];
  //  companylist.forEach((item, i) => {
  //    rows.push(createData(item.id, item.name, item.email,item.mobile, item.city));
  // });
  // console.log(rows);
  return (
    <>
      {compCheck ? (
        <Createcompany />
      ) : (
        <>
          <div style={{ height: 400, width: "100%" }}>
            <Toolbar />
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
            <ul>
              <p>hello</p>
           
              {/* {companylist?.map((row,index) => {
                return(
                <li key={index}>{row.name}</li>
                )
              })} */}
            </ul>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Contract</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {companylist.map((row) => {
                    <TableRow key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                    >
                      <TableCell component="th" scope="row">
                        <p className="mb-0">{row.name}</p>
                        <p className="mb-0 text-slate-400">{row.email}</p>
                      </TableCell>
                      <TableCell align="center">{row.mobile}</TableCell>
                      <TableCell align="center">{row.city}</TableCell>
                      <TableCell align="center  ">
                        <SelectPopover />
                      </TableCell>
                    </TableRow>;
                  })} */}
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
