import React from 'react'
import Suzuki from '../../images/Suzuki.png';
import LockKeyOpen from '../../images/LockKeyOpen.png';


const Forgotpas = () => {
    return (
        <>

            <div className='container'>

                <div className="brv" style={{ marginTop: "100px" }}>

                    <div className='row'>

                        <div className='col-lg-6'>

                            <div className='suzuimg text-center'>

                                <img src={Suzuki} />

                            </div>
                        </div>

                        <div className='col-lg-6'>

                            <div className='oldimg'>

                                <div className='lockimg text-center pt-5'>

                                    <img src={LockKeyOpen} />

                                </div>

                                <div className="forgotbox">

                                    <h2><b>Forgot Password</b></h2>

                                    <div class="login-form">

                                        <form>

                                            <div class="form-group">
                                                <input type="email" name="email" placeholder="Email" />
                                                <span class="input-icon"><i class="fa fa-envelope"></i></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className='primti text-start pt-4'>
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
