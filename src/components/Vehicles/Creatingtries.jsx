import React from "react";
import imageee from '../../images/imageee.png';
import Cominput from './Cominput'
import Save from '../../images/Save.png';
import plus from '../../images/plus.png';
import Posinput from './Posinput';
import Masuinput from './Masuinput';

const Creatingtries = () => {
    return (
        <>


            <div className="row mt-5">
                <div className="col-lg-8">
                    <div className="tries mt-5">
                        <h6>Tries</h6>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="slct">

                        <select class="form-select form-select-lg mb-0 w-100" aria-label=".form-select-lg example">
                            <option selected>Car</option>
                            <option value="1">Experts</option>
                            <option value="2">Clerks</option>
                            <option value="3">Company Admin</option>
                        </select>

                    </div>
                </div>
            </div>

            <div className="car mt-4">
                <p>Car Tries Data</p>
            </div>



            <div className="STATUS d-flex mt-5">
                {/* <p>Set of tries 1 </p> */}

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Set of tries 1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">tire set 2</label>
                </div>
            </div>

            <div className="slct mt-5">

                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Tries Layout</p>

                <select class="form-select form-select-lg mb-0 w-25" aria-label=".form-select-lg example">
                    <option selected>example</option>
                    <option value="1">Experts</option>
                    <option value="2">Clerks</option>
                    <option value="3">Company Admin</option>
                </select>

            </div>

            <div className="exce mt-5">
                <img src={imageee} />
            </div>

            <div className="row">
                <div className="col-lg-10">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Comment</p>
                    <Cominput />
                </div>
                <div className="col-lg-2">
                    <div className="add mt-5 text-end">
                        <button> Add New Field  <img src={plus} /></button>
                    </div>
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-lg-4">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Type</p>
                    <Posinput />
                </div>

                <div className="col-lg-4">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Pims</p>
                    <Masuinput />
                </div>

                <div className="col-lg-4">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Tread depth</p>
                    <Posinput />
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-lg-4">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Manufacturer </p>
                    <Masuinput />
                </div>

                <div className="col-lg-4">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Model </p>
                    <Masuinput />
                </div>

                <div className="col-lg-4">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Dimensions </p>
                    <Posinput />
                </div>
            </div>






        </>
    );
};

export default Creatingtries;