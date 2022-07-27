import React from "react";
import Companyinput from '../components/Companyinput';
import Saluinput from '../components/saluinput';
import Titliiinput from '../components/Titliiinput';
import Lasinput from '../components/lasinput';
import Lainput from '../components/Lainput';
import Birtinput from '../components/Birtinput';
import Pasinput from '../components/Pasinput';
import Emailinput from '../components/Emailinput';
import Homeinput from '../components/Homeinput';
import Phoneinput from '../components/Phoneinput';
import Countryinput from '../components/Countryinput';
import Cityinput from '../components/Cityinput';
import Streetinput from '../components/Streetinput';
import Mailinput from '../components/Mailinput';
import Save from '../images/Save.png';



const Selectusercompanyadmin = () => {
    return (
        <>

            <div className="row mt-5">

                <div className="col-lg-8">

                    <div className="user">

                        <h6 style={{ paddingLeft: "12px" }} >Create User</h6>

                    </div>
                </div>


                <div className="col-lg-4">

                    <div className="slct">

                        <select class="form-select form-select-lg mb-0 w-50" aria-label=".form-select-lg example">
                            <option selected>Company Admin</option>
                            <option value="1">Experts</option>
                            <option value="2">Clerks</option>
                            <option value="3">Company Admin</option>
                        </select>

                    </div>
                </div>
            </div>


            <div className="General mt-5">

                <p>General</p>

            </div>

            <div className="row mt-5">

                <div className="col-lg-6">

                    <div className="Company">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Company</p>

                        <Companyinput />

                    </div>
                </div>

                <div className="col-lg-6">

                    <div className="salution">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Salution</p>

                        <Saluinput />

                    </div>
                </div>
            </div>



            <div className="row mt-5">

                <div className="col-lg-6">

                    <div className="titl">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Title</p>

                        <Titliiinput />

                    </div>
                </div>

                <div className="col-lg-6">

                    <div className="first">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>First Name</p>

                        <Lasinput />

                    </div>
                </div>
            </div>

            <div className="row mt-5">

                <div className="col-lg-6">

                    <div className="last">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Last Name</p>

                        <Lainput />

                    </div>
                </div>

                <div className="col-lg-6">

                    <div className="birth">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Birthday</p>

                        <Birtinput />

                    </div>
                </div>
            </div>


            <div className="row mt-5">

                <div className="col-lg-6">

                    <div className="password">

                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>Password</p>

                        <Pasinput />

                    </div>
                </div>

                <div className="col-lg-6">

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

                    <div className="Createbtn">

                        <button> <img src={Save} /> Create </button>

                    </div>
                </div>
            </div>


        </>
    );
};

export default Selectusercompanyadmin;