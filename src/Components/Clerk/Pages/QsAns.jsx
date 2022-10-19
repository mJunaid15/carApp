import React from "react";
import { CreateBtn } from "../../Buttons";
import { TextField } from "@mui/material";
import WestIcon from '@mui/icons-material/West';


export const QsAns = () => {


  return (
    
     
    <div>

    <div className="flex border-slate-400 ">
    <WestIcon />
      <h1 className="text-base text-bold mb-0 ml-5">Questions</h1>
      
    </div>

    <hr />

    
    <div className="generl  ">
        
      <p >Questions</p>
    </div> <br />


    
    <p> <strong> Q1: What is the Mileage of the car? </strong> <span>(Example Question)</span> </p>
    <TextField
          id="outlined-multiline-static"
          label="Answer"
          multiline
          rows={5}
          fullWidth
          defaultValue=""
        /> 

        
      <p> <br /><strong> Q1: What is the Mileage of the car? </strong> <span>(Example Question)</span> </p>
    <TextField
          id="outlined-multiline-static"
          label="Answer"
          multiline
          rows={5}
          fullWidth
          defaultValue=""
        /> 

<p> <br /><strong> Q1: What is the Mileage of the car? </strong> <span>(Example Question)</span> </p>
    <TextField
          id="outlined-multiline-static"
          label="Answer"
          multiline
          rows={5}
          fullWidth
          defaultValue=""
        /> <br />

    


    <div className="flex justify-between my-6">
      
          <CreateBtn
            style={{
              color: "#000",
              padding: "6px 22px",
              diplay: "flex",
              alignItems: "center",
            }}
            name="Cancel"
          />
          <div className="mr-5">
            <CreateBtn
              style={{
                color: "#000",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Save"
            />
            
          </div>
        </div>


        </div>


     
  );
};
