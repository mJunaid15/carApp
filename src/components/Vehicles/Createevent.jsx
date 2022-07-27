import React from "react";
import Posinput from './Posinput';
import Masuinput from './Masuinput';
import Save from '../../images/Save.png';
import plus from '../../images/plus.png';


const Createevent = () => {
    return (
        <>

            <div className="laydet">
                <div className="vech mt-5">
                    <h6>Vehicle Event</h6>
                </div>

                <div className="evdt mt-4">
                    <p>Event Detail</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Data</p>
                    <Posinput />
                </div>

                <div className="col-lg-6">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Cost</p>
                    <Masuinput />
                </div>
            </div>

            <div className="for mt-5">
                <form>
                    <div class="form-group">
                        <label for="comment">Event</label>
                        <textarea class="form-control" rows="4" label="Enter date " id="Enter date"></textarea>
                    </div>
                </form>
            </div>

            <div className="forgro" style={{ marginTop: "50px" }}>
                <form>
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" rows="8" label="Enter date " id="Enter date"></textarea>
                    </div>
                </form>
            </div>

            <div className="add mt-5 text-end">
                <button> Add New Event  <img src={plus} /></button>
            </div>


            <div className="row mt-5">

                <div className="col-lg-8">

                    <div className="previ">

                        <button>Previous</button>

                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="nextbtn">

                        <button> <img src={Save} /> Next </button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Createevent;