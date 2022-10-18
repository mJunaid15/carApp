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
import SelectPopover from "../../SelectPopover";
import { CreateBtn } from "../../../../Buttons";
import { Createcompany } from "./Createcompany";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {Pageloader} from "../../Page loader/Pageloader";
import usePagination from "../../Pagination/Pagination";
import AuthUser from "../../../Auth/AuthUser";

export function Company() {
  const { http } = AuthUser();
  const [companylist, setCompanylist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState()

  // const [currentPage, setCurrentPage] = useState(1);
  // const [listPerpage, SetListperPage] = useState(5);

 

  React.useEffect(() => {
    fetchListCompany();
  }, []);

  const [compCheck, setCompCheck] = useState(false);
  const fetchListCompany = async () => {
    // api call
    setLoading(true);
    let res = await http.get("/company-profile");
    if(res.data.responseStatus === 200){
    setCompanylist(res.data.responseMessage)
  }
       setLoading(false);
  };

  // const handleEditCompany = (data) => {
  //   const formData = new FormData();
  //   {
  //     name != ""
  //       ? formData.append("name", name)
  //       : formData.append("name", data.name);
  //   }
  //   {
  //     director != ""
  //       ? formData.append("director", director)
  //       : formData.append("director", data.director);
  //   }
  //   {
  //     person != ""
  //       ? formData.append("person", person)
  //       : formData.append("person", data.person);
  //   }

  //   {
  //     taxNumber != ""
  //       ? formData.append("tax_number", taxNumber)
  //       : formData.append("tax_number", data.tax_number);
  //   }

  //   {
  //     email != ""
  //       ? formData.append("email", email)
  //       : formData.append("email", data.email);
  //   }

  //   {
  //     phone != ""
  //       ? formData.append("phone", phone)
  //       : formData.append("phone", data.phone);
  //   }

  //   {
  //     mobile != ""
  //       ? formData.append("mobile", mobile)
  //       : formData.append("mobile", data.mobile);
  //   }

  //   {
  //     fax != ""
  //       ? formData.append("fax", fax)
  //       : formData.append("fax", data.fax);
  //   }

  //   {
  //     country != ""
  //       ? formData.append("country", country)
  //       : formData.append("country", data.country);
  //   }

  //   {
  //     city != ""
  //       ? formData.append("city", city)
  //       : formData.append("city", data.city);
  //   }

  //   {
  //     streetNo != ""
  //       ? formData.append("street_no", streetNo)
  //       : formData.append("street_no", data.street_no);
  //   }

  //   {
  //     mailbox != ""
  //       ? formData.append("mailbox", mailbox)
  //       : formData.append("mailbox", data.mailbox);
  //   }

  //   formData.append("_method", "PUT");
  //   formData.append("register", data.register);

  //   http
  //     .post(`company/${data.id}`, formData)
  //     .then((res) => {
  //       setName("");
  //       setDirector("");
  //       setPerson("");
  //       setTaxNumber("");
  //       setEmail("");
  //       setPhone("");
  //       setMobile("");
  //       setFax("");
  //       setCountry("");
  //       setCity("");
  //       setStreetNo("");
  //       setMailbox("");
  //       fetchListCompany();
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  // pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(companylist.length / PER_PAGE);
  const _DATA = usePagination(companylist, PER_PAGE);


  const paginationHandler = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      {compCheck || editIndex != null ? (
        <Createcompany editIndex={editIndex}  editItem = {editItem} />
      ) : (
        <>
          <div style={{ height: 400, width: "100%" }}>
            <Toolbar />
            {editIndex != null ? null : (
              <div className="flex justify-between">
                <h1 className="text-base text-bold mb-0 ml-5">
                  List of Company Profiles
                </h1>
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
                  </TableHead>
                )}
                {loading ? (
                  <Pageloader />
                ) : (
                  <TableBody>
                    {companylist  &&
                    _DATA.currentData().map((data, index) => {
                      return (
                      
                                <TableRow
                                  key={data.id}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    <p className="mb-0">{data.cp_name}</p>
                                    
                                  </TableCell>
                                  <TableCell align="center">
                                    {data.cp_contact_details}
                                  </TableCell>
                                  <TableCell align="center">
                                    {data.cp_location}
                                  </TableCell>
                                  <TableCell align="center">
                                    <SelectPopover
                                      {...data}
                                      apiName="company-profile"
                                      setState={setCompanylist}
                                      setEditIndex={setEditIndex}
                                      index={index}
                                      state={companylist}
                                      setEditItem ={setEditItem}
                                    />
                                  </TableCell>
                                </TableRow>
                              
                      );
                    })
                  
                  }
                  </TableBody>
                )}
              </Table>
            </TableContainer>
            {editIndex != null ? null : !loading ? (
              <div className="mt-3 flex justify-end">
                <Pagination
                  count={count}
                  variant="outlined"
                  shape="rounded"
                  onChange={paginationHandler}
                />
              </div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}
