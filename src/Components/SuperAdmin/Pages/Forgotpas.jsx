import React from 'react'
import Suzuki from '../../img/Suzuki.png';
import Oldtimer from '../../img/Oldtimer.png';
import '../SuperAdmin.css'
import EmailIcon from '@mui/icons-material/Email';


const Forgotpas = () => {
    return (
        <>

            <div className='container'>

            <div className="brv" style={{marginTop:"100px"}}>

                    <div className='row'>

                        <div className='col-lg-6'>

                            <div className='suzuimg text-center'>

                                <img src={Suzuki} alt='suzuki' />

                            </div>
                        </div>

                        <div className='col-lg-6'>

                            <div className='oldimg text-center'>

                                <img src={Oldtimer} alt='oldtimer' />

                                <div className="pinkbox">

                                    <h2><b>Forgot Password</b></h2>

                                    <div class="login-form">

                                        <form>

                                            <div class="form-group">
                                                <input type="email" name="email" placeholder="Email" />
                                                <span class="input-icon"><EmailIcon/></span>

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