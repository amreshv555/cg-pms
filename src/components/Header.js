import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Header = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://pensionersportal.gov.in/img/digital_india.png"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bank" >
                                        <i className="fas fa-piggy-bank">
                                            <span style={{ marginLeft: "10px" }}>BankDetails</span>
                                        </i>

                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/pensioner" >Pensioner</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/spring" >Spring</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >
                                    <i class="fas fa-sign-out-alt">Logout</i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://pensionersportal.gov.in/img/digital_india.png"
                                height="24px" alt="Pension" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >
                                    <i class="far fa-registered">
                                    <span style={{ marginLeft: "10px" }}>
                                        Register</span></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >
                                    <i class="fas fa-sign-in-alt">
                                    <span style={{ marginLeft: "10px" }}>Login</span></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;