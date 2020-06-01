import React from 'react';
import Notification from './Notification';
import PersonAccount from './Profile';
import Logout from './Logout';
import '../assets/stylesheets/main.scss';

class Header extends React.Component {
    render(){
        return(
            <header className="header">
                <div className="navbar navbar-fixed">
                    <nav className="navbar-main nav-bar-color">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="row">
                                    <div className="col s6 m6 l6">
                                        <div className="logo">
                                            <a title="Home" href="#"><h1>My Dashboard</h1></a>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l6">
                                        <div className="nav-wrapper">
                                            <ul className="header--menu right">
                                                <li><Notification /></li>
                                                <li><PersonAccount /></li>
                                                <li><Logout /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;