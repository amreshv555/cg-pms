import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AbstractRegister from './components/AbstractRegister';
import AbstractLogin from './components/AbstractLogin';
import AbstractLogout from './components/AbstractLogout';
import Header from './components/Header';
import Page404 from './components/Page404';
import Home from './components/Home';
import Footer from './components/Footer';


const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

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
export default Routes;