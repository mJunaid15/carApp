import React from "react";
import Suzuki from '../../images/Suzuki.png';


const Email = () => {
  return (
    <>

      <div className="container">

        <div className="brv" style={{ marginTop: "100px" }}>

          <div className="row">

            <div className="col-lg-6">

              <div className='suzuimg text-center'>

                <img src={Suzuki} />

              </div>
            </div>

            <div className="col-lg-6">

              <div className="check">

                <h5><b>Check Email</b></h5>

                <p>Plaese check your email and click on the provided   <br />
                  link to confirm your password. If you don’t receive email,<span style={{color:"#3B7AD2"}}> click here to resend</span></p>

              <p>Back to Login</p>

              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};


export default Email;