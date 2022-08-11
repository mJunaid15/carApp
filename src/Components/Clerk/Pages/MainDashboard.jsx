import React from "react";
import { Avatar, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MainTable from "../MainTable";
import { CreateBtn } from "../../Buttons";
import cartoon from '../../img/cartoon.png'

const MainDashboard = () => {
  return (
    <>
      <Toolbar />

      <p className="fw-bold">Workplace</p>
      <div class="grid grid-cols-6 gap-2  ">
          <div className=" p-2 col-span-3  flex">
            <img src={cartoon} alt="catoon" style={{width: '50px', height: '50px'}} />
          <p className="fw-bold ml-3">Good morning, Clerk, have a great day!</p>

          </div>
       

          <div className="  items-center justify-center flex flex-col  border-r-2 border-r-gray-300  ">
          <p className=" text-zinc-400 mb-0">Documents</p> 
          <p className=" text-xl ">8 <span className="text-lg">/24</span>  </p>
          </div>


          <div className="  items-center justify-center flex flex-col   ">
          <p className=" text-zinc-400 mb-0">Vehicles Under You</p> 
          <p className=" text-xl ">56</p>
          </div>


        </div>
    </>
  );
};

export default MainDashboard;
