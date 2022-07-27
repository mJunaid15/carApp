import React from "react";
import Sininput from '../components/Sininput';
import Managinput from '../components/Managinput';
import Khaninput from '../components/Khaninput';
import Mbinput from '../components/Mbinput';
import Taxinput from '../components/Taxinput';
import Emailinput from '../components/Emailinput';
import Home2input from '../components/Home2input';
import Phoneinput from '../components/Phoneinput';
import Countryinput from '../components/Countryinput';
import Cityinput from '../components/Cityinput';
import Streetinput from '../components/Streetinput';
import Mailinput from '../components/Mailinput';
import Mobileinput from '../components/Mobileinput';
import Pen from '../images/Pen.png';

const Singleviewcreate = () => {
    return (
        <>



            <div className="Single mt-5">

                <hr />

                <h6>Creating Company</h6>

                <hr />

                <div className="row">

                    <div className="col-lg-9">

                        <h4 className="mt-4">Tens Cars</h4>

                    </div>

                    <div className="col-lg-3">

                        <div className="Editbtn">

                            <button> <img src={Pen} /> Edit </button>

                        </div>
                    </div>
                </div>
                <div className="General mt-4">
                    <p>General</p>
                </div>

                <div className='row mt-4'>

                    <div className='col-lg-6'>

                        <div className='company'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Company Name</p>

                            <Sininput />

                        </div>
                    </div>

                    <div className='col-lg-6'>

                        <div className='managing'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Managing Director</p>

                            <Managinput />

                        </div>
                    </div>
                </div>


                <div className='row mt-5'>

                    <div className='col-lg-6'>

                        <div className='contact'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Contact person</p>

                            <Khaninput />

                        </div>
                    </div>

                    <div className='col-lg-6'>

                        <div className='Commerical'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Commerical Register</p>

                            <Mbinput />

                        </div>
                    </div>

                    <div className='col-lg-6 mt-5'>

                        <div className='Tax'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Tax number</p>

                            <Taxinput />

                        </div>
                    </div>
                </div>


                <div className='Contactcent mt-5'>
                    <p>Contact</p>
                </div>



                <div className='row mt-5'>

                    <div className='col-lg-6'>

                        <div className='E-mail'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                            <Emailinput />

                        </div>
                    </div>

                    <div className='col-lg-6'>

                        <div className='Homepage'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                            <Home2input />

                        </div>
                    </div>
                </div>


                <div className='row mt-5'>

                    <div className='col-lg-6'>

                        <div className='Telephone'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Telephone</p>

                            <Phoneinput />

                        </div>
                    </div>

                    <div className='col-lg-6'>

                        <div className='Homepage'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>

                            <Mobileinput />

                        </div>
                    </div>
                </div>



                <div className='Address mt-5'>
                    <p>Address</p>
                </div>


                <div className='row mt-5'>

                    <div className='col-lg-6'>

                        <div className='country'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>

                            <Countryinput />

                        </div>
                    </div>

                    <div className='col-lg-6'>

                        <div className='ZIP / City'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>ZIP / City</p>

                            <Cityinput />

                        </div>
                    </div>
                </div>

                <div className='row mt-5'>

                    <div className='col-lg-6'>

                        <div className='Street Number'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Street Number</p>

                            <Streetinput />

                        </div>
                    </div>

                    <div className='col-lg-6'>

                        <div className='Mail'>

                            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

                            <Mailinput />

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};


export default Singleviewcreate;