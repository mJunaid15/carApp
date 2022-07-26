import React from "react";
import Suzuki from "../../img/Suzuki.png";
import Oldtimer from "../../img/Oldtimer.png";
import "../SuperAdmin.css";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container h-[100vh] flex items-center justify-center">
        <div className="brv">
          <div className="row ">
            <div className="col-lg-6 col-12   hidden lg:block">
              <div className="suzuimg text-center">
                <img src={Suzuki} />
              </div>
            </div>

            <div className="col-lg-6 col-12  flex justify-center items-center">
              <div>
                <div className="oldimg flex justify-center">
                  <img src={Oldtimer} />
                </div>

                <div className="pinkbox">
                  <h2 className="">
                    <b>LOGIN</b>
                  </h2>

                  <div class="login-form">
                    <form>
                      <div class="form-group">
                        <input type="email" name="email" placeholder="Email" />
                        <span class="input-icon">
                          <EmailIcon />
                        </span>
                      </div>

                      <div class="form-group">
                        <input
                          type="password"
                          name="psw"
                          placeholder="Password"
                        />
                        <span class="input-icon">
                          <LockIcon />
                        </span>
                      </div>
                    </form>
                  </div>

                 
                </div>
                <div className="for text-end mt-3 cursor-pointer">
                    <Link
                      className="text-black no-underline"
                      as={Link}
                      to={"/forgot"}
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    class="login-btn"
                    onClick={() => {
                        navigate(`/dashboard`);
                    }}
                  >
                    Login
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
