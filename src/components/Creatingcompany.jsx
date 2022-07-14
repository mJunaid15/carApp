import React from 'react';
import Smallinput from '../components/Smallinput';
import Smallinput2 from '../components/Smallinput2';
import Smallinput3 from '../components/Smallinput3';
import Smallinput4 from '../components/Smallinput4';
import Emailinput from '../components/Emailinput';
import Homeinput from '../components/Homeinput';
import Phoneinput from '../components/Phoneinput';
import Countryinput from '../components/Countryinput';
import Cityinput from '../components/Cityinput';
import Streetinput from '../components/Streetinput';
import Mailinput from '../components/Mailinput';
import Mobileinput from '../components/Mobileinput';




const Creatingcompany = () => {
    return (
        <>

            <hr />

            <div className='creating'>
                <p>Creating Company</p>
            </div>

            <hr />

            <div className='company'>
                <p>Create Company</p>
            </div>

            <div className='generl'>
                <p>General</p>
            </div>



            <div className='row mt-5'>

                <div className='col-lg-6'>

                    <div className='company'>

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Company Name</p>

                        <Smallinput />

                    </div>
                </div>

                <div className='col-lg-6'>

                    <div className='managing'>

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Managing Director</p>

                        <Smallinput2 />

                    </div>
                </div>
            </div>


            <div className='row mt-5'>

                <div className='col-lg-6'>

                    <div className='contact'>

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Contact person</p>

                        <Smallinput />

                    </div>
                </div>

                <div className='col-lg-6'>

                    <div className='Commerical'>

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Commerical Register</p>

                        <Smallinput3 />

                    </div>
                </div>

                <div className='col-lg-6 mt-5'>

                    <div className='Tax'>

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Tax number</p>

                        <Smallinput4 />

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

                        <Homeinput />

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

        </>
    );
};


export default Creatingcompany;