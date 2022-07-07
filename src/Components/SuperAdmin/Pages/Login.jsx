import React from 'react'
import Suzuki from '../../img/Suzuki.png';
import Oldtimer from '../../img/Oldtimer.png';
import '../SuperAdmin.css'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
const Login = () => {
    return (
        <>

            <div className="container">

                <div className="brv" style={{marginTop:"100px"}}>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="suzuimg text-center">

                                <img src={Suzuki} />

                            </div>
                        </div>



                        <div className="col-lg-6">

                            <div className='oldimg text-center'>

                                <img src={Oldtimer} />

                            </div>

                            <div className="pinkbox">

                                <h2><b>LOGIN</b></h2>

                                <div class="login-form">

                                    <form>

                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="Email" />
                                            <span class="input-icon"><EmailIcon/></span>
                                        </div>

                                        <div class="form-group">
                                            <input type="password" name="psw" placeholder="Password" />
                                            <span class="input-icon"><LockIcon/></span>
                                        </div>
                                    </form>
                                </div>

                                <div className='for text-end mt-5'>
                                    <p>Forgot Password?</p>
                                </div>

                                <button class="login-btn">Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login