import React from 'react'
import { CreateBtn } from '../../../Buttons'

const Documents = () => {
  return (
    <div>
        <div className="generl ">
        <p> Documents</p>
      </div>

      <div>
      <div className=" mt-3">
            {/* <CreateBtn
              onClick={() => setcheck(!check)}
              style={{
                color: "gray",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Back"
            /> */}
            <div >
              <CreateBtn
                //   onClick={handleSubmit}
                style={{
                  color: "#000",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
                name="Menu +"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Documents