import React from 'react'
import Suzuki from '../../images/Suzuki.png';
import Oldtimer from '../../images/Oldtimer.png';


const Forgotpas = () => {
    return (
        <>

            <div className='container'>

            <div className="brv" style={{marginTop:"100px"}}>

                    <div className='row'>

                        <div className='col-lg-6'>

                            <div className='suzuimg text-center'>

                                <img src={Suzuki} />

                            </div>
                        </div>

                        <div className='col-lg-6'>

                            <div className='oldimg text-center'>

                                <img src={Oldtimer} />

                                <div className="pinkbox">

                                    <h2><b>Forgot Password</b></h2>

                                    <div class="login-form">

                                        <form>

                                            <div class="form-group">
                                                <input type="email" name="email" placeholder="Email" />
                                                <span class="input-icon"><i class="fa fa-envelope"></i></span>
                                            </div>
                                        </form>
                                    </div>

                                    <button class="login-btn">Send</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Forgotpas;
