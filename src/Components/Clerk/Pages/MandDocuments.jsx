import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { CreateBtn } from "../../Buttons";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export const MandDocuments = () => {
  
  const [modal, setModal] = useState(false)

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    
     
        <div>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Documents</h1>
            <div className="mr-5">
              <Button
                onClick={() => {setModal(true)}}
                style={{
                  backgroundColor: "  #5A4A42",
                  color: "#fff",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                Create New +
              </Button>
            </div>


                
          </div>
          {/* Document Modal */}

          
            <Dialog 
            
            
              open={modal}
              onClose={handleCloseModal}
              aria-labelledby="responsive-dialog-title"
              
            
            >
        <DialogContent style={{width: "600px"}}>
          
          <div className=" p-2 ">
            {/* <h1 className="text-2xl">Are You Sure To Delete This Company?</h1> */}
          
          <TextField
          id="outlined-multiline-static"
          label="Title Document"
          multiline
          rows={10}
          fullWidth
          defaultValue=""
        />
        </div>
          <div className="flex justify-between mt-3">
          <Button autoFocus onClick={handleCloseModal} className="text-black">
            Cancel
          </Button>
          
          <CreateBtn
          onClick={handleCloseModal} 
          name="Save"
          />
          </div>
        </DialogContent>
        
            </Dialog>
            

          <hr />

          
          <div className="generl">
            <p>Documents</p>
          </div>
         


          
          </div>

     
  );
};
