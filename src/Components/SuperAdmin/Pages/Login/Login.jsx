import React from "react";
import Suzuki from "../../../img/Suzuki.png";
import Oldtimer from "../../../img/Oldtimer.png";
import "../../SuperAdmin.css";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate, Link } from "react-router-dom";
import AuthUser from "../../Auth/AuthUser";
import { Alert, Backdrop, CircularProgress } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const { http, setToken } = AuthUser();
  const [email, setEmail] = React.useState();
  const [password, setPass] = React.useState();
  const [msgErr, setMsg] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const submitForm = () => {
    setLoading(true);

    // api call
    http
      .post("/login", { email: email, password: password })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setToken(res.data.success.token, res.data.success.user);
        if (res.data.success.user.myRole[0] === "super-admin") {
          navigate(`/dashboard`);
          setMsg("");
          console.log(res.data.success.user.myRole[0]);
        } else if (res.data.success.user.myRole[0] === "company-admin") {
          navigate(`/company`);
        }
      })
      .catch((err) => {
        // console.log('error',err);
        if (err.response.status === 401) {
          setMsg("Unauthorized");
        setLoading(false);

        }
      });
  };

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
                  <p
                    className={`${
                      msgErr
                        ? "text-red-500 text-sm  bg-white rounded  h-8 p-2"
                        : " "
                    }  h-8 p-2 mb-0`}
                  >
                    {msgErr}
                  </p>
                  <h2 className="">
                    <b>LOGIN</b>
                  </h2>

                  <div class="login-form">
                    <form>
                      <div class="form-group">
                        <input
                          className={`${
                            msgErr
                              ? "!border !border-red-500"
                              : "border border-transparent"
                          }`}
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span class="input-icon">
                          <EmailIcon
                            className={`${msgErr ? "text-red-500 " : ""}`}
                          />
                        </span>
                      </div>

                      <div class="form-group">
                        <input
                          className={`${
                            msgErr
                              ? "!border !border-red-500"
                              : "border border-transparent"
                          }`}
                          type="password"
                          name="psw"
                          placeholder="Password"
                          onChange={(e) => setPass(e.target.value)}
                        />
                        <span class="input-icon">
                          <LockIcon
                            className={`${msgErr ? "text-red-500 " : ""}`}
                          />
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
                

                <button class="login-btn" onClick={submitForm}>
                  {loading ? "Loading..." : "Login"}
                </button>
                {loading ? (
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                ) : null}
                {/* <button
                    class="m-3"
                    onClick={() => {
                        navigate(`/dashboard/company`);
                    }}
                  >
                    Company routes
                  </button>
                  <button
                    class="m-3"
                    onClick={() => {
                        navigate(`/dashboard/expert`);
                    }}
                  >
                    Expert routes
                  </button>
                  <button
                    class="m-3"
                    onClick={() => {
                        navigate(`/dashboard/clerk`);
                    }}
                  >
                    Clerk routes
                  </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
