import React from "react";
import Salutioninput from '../components/Salutioninput';
import Titleinput from '../components/Titleinput';
import Firstinput from '../components/Firstinput';
import Lastinput from '../components/Lastinput';
import Birthinput from '../components/Birthinput';
import Passinput from '../components/Passinput';
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
import Save from '../images/Save.png';


const Expertsingleedit = () => {
    return (
        <>


            <h6 style={{marginTop:"180px"}}>Expert Name</h6>


            <div className="General mt-5">

                <p>General</p>

            </div>

            <div className="row mt-5">

                <div className="col-lg-6">

                    <div className="Salution">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Salution</p>

                        <Salutioninput />

                    </div>
                </div>

                <div className="col-lg-6">

                    <div className="Title">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Title</p>

                        <Titleinput />

                    </div>
                </div>
            </div>


            <div className="row mt-5">

                <div className="col-lg-6">

                    <div className="First Name">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>First Name</p>

                        <Firstinput />

                    </div>
                </div>

                <div className="col-lg-6">

                    <div className="Last Name">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Last Name</p>

                        <Lastinput />

                    </div>
                </div>
            </div>



            <div className="row mt-5">

                <div className="col-lg-6">

                    <div className="Birthday">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Birthday</p>

                        <Birthinput />

                    </div>
                </div>

                <div className="col-lg-6">

                    <div className="Password">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Password</p>

                        <Passinput />

                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="STATUS d-flex">
                <p>Status : </p>

                <div class="form-check form-check-inline ps-5">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Active</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Not Active</label>
                </div>
            </div>

            <br />
            <br />

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

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                        <Homeinput />

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


            <div className="row mt-5">

                <div className="col-lg-8">

                    <div className="buton">

                        <button>Cancle</button>

                    </div>
                </div>

                <div className="col-lg-4">
                   
                    <div className="savebtn">
                   
                        <button> <img src={Save} /> Save </button>
                   
                    </div>
                </div>
            </div>


        </>
    );
};

export default Expertsingleedit;