import React from 'react'
import Suzuki from '../../images/Suzuki.png';
import Oldtimer from '../../images/Oldtimer.png';


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

                            <div className='oldimg text-center pt-5'>

                                <img src={Oldtimer} style={{width:"200px"}} />

                            </div>

                            <div className="pinkbox">

                                <h2><b>LOGIN</b></h2>

                                <div class="login-form">

                                    <form>

                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="Email" />
                                            <span class="input-icon"><i class="fa fa-envelope"></i></span>
                                        </div>

                                        <div class="form-group">
                                            <input type="password" name="psw" placeholder="Password" />
                                            <span class="input-icon"><i class="fa fa-lock"></i></span>
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
