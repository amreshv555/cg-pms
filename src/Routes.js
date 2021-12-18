import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AbstractRegister from './components/AbstractRegister';
import AbstractLogin from './components/AbstractLogin';
import AbstractLogout from './components/AbstractLogout';
import Header from './components/Header';
import Page404 from './components/Page404';
import Home from './components/Home';
import Footer from './components/Footer';
import BankData from './components/BankData';
import SpringPensionerDetails from './components/SpringPensionerDetails';



const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/bank"> <BankData /> </Route>
                                <Route path="/pensioner"> <SpringPensionerDetails /> </Route>
                                {/* <Route path="/spring"> <SpringBootData /> </Route> */}
                                <Route path="/logout"> <AbstractLogout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                            
                        </div>
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                      
                        <Switch>
                            <Route exact path="/" loginStatus > <Home /> </Route>
                            <Route path="/home" loginStatus> <Home /> </Route>
                            <Route path="/register"> <AbstractRegister /> </Route>
                            <Route path="/login"> <AbstractLogin /> </Route>
                            <Route path="/*"> <Page404 /> </Route>
                        </Switch>
                       
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}
export default Routes;