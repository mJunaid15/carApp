import * as React from "react";
import react, { useState } from "react";
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
import { CreateBtn } from "../../../Buttons";
import { Usermanagementcreate } from "./Usermanagementcreate";
import AuthUser from "../../Auth/AuthUser";
import usePagination from "../Pagination/Pagination";
import { PageloaderAll } from "../Page loader/Pageloader";

export default function Usermanagment() {
  const [UserCheck, setUserCheck] = React.useState(false);
  const { http } = AuthUser();
  const [Userlist, setUserlist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState()
  
  const fetchListCompany = async (data) => {
    // api call
    setLoading(true);
    let res = await http.get("/user");
    setUserlist(res.data.responseMessage);
    setLoading(false);
  };
  // console.log("Userlist:", Userlist[0].first_name);
  React.useEffect(() => {
    fetchListCompany();
  }, []);
  // pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(Userlist.length / PER_PAGE);
  const _DATA = usePagination(Userlist, PER_PAGE);

  const paginationHandler = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  // console.log("edit index :",editIndex);
  return (
    <>
      {UserCheck || editIndex != null ? (
        <Usermanagementcreate  editIndex={editIndex} UserCheck={UserCheck} editItem = {editItem} />
      ) : (
        <>
          <div style={{ height: 400, width: "100%" }}>
            <Toolbar />
            <div className="flex justify-between">
              <h1 className="text-base text-bold mb-0 ml-5">
                List Of Experts And Clerks
              </h1>
              <div className="mr-5">
                <CreateBtn
                  name="Create "
                  icon={<AddIcon />}
                  onClick={() => setUserCheck(!UserCheck)}
                />
              </div>
            </div>

            

            <TableContainer component={Paper}>
              {loading ? (
                <PageloaderAll />
              ) : (
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell align="center">Mobile</TableCell>
                      <TableCell align="center">Birthday</TableCell>
                      <TableCell align="center">Country</TableCell>
                      <TableCell align="center">City</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Role</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { Userlist &&
                    _DATA.currentData().map((data, index) => {
                      return (
                        <TableRow key={data.id}>
                          <TableCell component="th" scope="row">
                            {data.id}
                          </TableCell>
                          <TableCell>
                            {data.first_name} {data.last_name}
                          </TableCell>
                          <TableCell align="center">{data.birthday}</TableCell>
                          <TableCell align="center">{data.mobile}</TableCell>
                          <TableCell align="center">{data.country}</TableCell>
                          <TableCell align="center">{data.city}</TableCell>
                          <TableCell align="center">{data.email}</TableCell>
                          <TableCell align="center">{data.myRole}</TableCell>

                          <TableCell align="center  ">
                            <SelectPopover
                              {...data}
                              apiName="user"
                              SetState={setUserlist}
                              state={Userlist}
                              setEditIndex={setEditIndex}
                              index={index}
                              setEditItem ={setEditItem}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
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
