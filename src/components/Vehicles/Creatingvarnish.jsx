import React from "react";
import Posinput from './Posinput';
import Masuinput from './Masuinput'
import Desinput from './Desinput';
import TrashSimple from '../../images/TrashSimple.png';
import icons from '../../images/icons.png';
// import Copy from '../../images/Copy.png';
import Save from '../../images/Save.png';
import plus from '../../images/plus.png';

const Creatingvarnish = () => {
    return (
        <>


            <div className="laydet">
                <div className="Layer mt-5">
                    <h6>Varnish Layer</h6>
                </div>

                <div className="detil mt-4">
                    <p>Layer detail</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Position</p>
                    <Posinput />
                </div>

                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Measurement</p>
                    {/* <img src={Copy} /> */}
                    <Masuinput />
                </div>

                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Description</p>
                    <Desinput />
                </div>

                <div className="col-lg-3">
                    <div className="trash">
                        <img src={TrashSimple} />
                        <img src={icons} />
                    </div>
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Position</p>
                    <Posinput />
                </div>

                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Measurement</p>
                    <Masuinput />
                </div>

                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Description</p>
                    <Desinput />
                </div>

                <div className="col-lg-3">
                    <div className="trash">
                        <img src={TrashSimple} />
                        <img src={icons} />
                    </div>
                </div>
            </div>



            <div className="row mt-5">
                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Position</p>
                    <Posinput />
                </div>

                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Measurement</p>
                    <Masuinput />
                </div>

                <div className="col-lg-3">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>Description</p>
                    <Desinput />
                </div>

                <div className="col-lg-3">
                    <div className="trash">
                        <img src={TrashSimple} />
                        <img src={icons} />
                    </div>
                </div>
            </div>

            <div className="add mt-5">
                <button> Add Position  <img src={plus} /></button>
            </div>


            <div className="row" style={{marginTop:"100px"}}>

                <div className="col-lg-8">

                    <div className="previ">

                        <button>Previous</button>

                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="finibtn">

                        <button> <img src={Save} /> Finish </button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Creatingvarnish;