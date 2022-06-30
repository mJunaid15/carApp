import React from "react";
import logo from '../../images/Logo.png';
import bell from '../../images/Bell.png';
import user from '../../images/User.png';
import icon from '../../images/icon-wrapper.png';



const Dashboard = () => {
    return (
        <>


                <div id="wrapper">
                    <div class="left-section">
                        <ul class="nav">
                            <li id="logo">
                                <img src={logo} />
                            </li>
                            
                            <li>

                            <img src={icon} style={{height:"20px",display:"flex"}}/>     
                            
                            <a href="#" class="menu-item"><span class="fontawesome-home ftm"></span>Dashbaord</a>
                            
                            </li>
                            
                            <li><a href="#" class="menu-item"><span class="fontawesome-user ftm"></span>Companies</a>

                            </li>
                            <li><a href="#" class="menu-item"><span class="fontawesome-cog ftm"></span>User Management</a>

                            </li>
                            <li><a href="#" class="menu-item"><span class="fontawesome-envelope-alt ftm"></span>Vehicles Management</a>

                            </li>
                            <li><a href="#" class="menu-item"><span class="fontawesome-heart ftm"></span>File/dossier Management</a>

                            </li>
                            <li><a href="#" class="menu-item"><span class="fontawesome-list ftm"></span>Address Management</a>

                            </li>
                            <li><a href="#" class="menu-item"><span class="fontawesome-folder-close ftm"></span>Settings</a>

                            </li>
                        </ul>
                    </div>


                </div>

        </>
    );
};


export default Dashboard;