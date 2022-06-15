import React from 'react'
import Suzuki from '../../images/Suzuki.png';
import Oldtimer from '../../images/Oldtimer.png';


const Login = () => {
    return (
        <>

            <div className="container">

                <div className="brv">

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="suzuimg">

                                <img src={Suzuki} />

                            </div>
                        </div>



                        <div className="col-lg-6">

                            <img src={Oldtimer} />

                            <div className="pinkbox">

                                <h2>LOGIN</h2>

                                <div class="login-form">
                                    <form>

                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="E-mail Address" />
                                            <span class="input-icon"><i class="fa fa-envelope"></i></span>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="psw" placeholder="Password" />
                                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                                        </div>
                                        <button class="login-btn">Login</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Login
