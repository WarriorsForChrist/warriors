import React, { Component } from 'react'

import logo from '../images/logoWarriors.jpg'

import '../App.css';

class WarriorsLogo extends Component {
    render() {
        return (
            <div className="mainLogo">
                <div className="appLogo">
                    <div className="appLogo-semantic">
                        <img src={logo} alt="logo" /> 
                    </div>
                </div>
            </div>
        );
    }
}

export default WarriorsLogo;
