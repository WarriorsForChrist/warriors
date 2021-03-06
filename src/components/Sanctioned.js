import React, { Component } from 'react'

import icma from '../images/logo_ICMA.jpg'
import ifcma from '../images/logo_IFCMA.jpg'

import '../App.css'
import '../styles/Sanctioned.css'

export default class Sanctioned extends Component {
    render() {
        return (
            <div className="infoSection sanctioned">
                <h2>Tao Hsieh Wu Shu is sanctioned by</h2>
                <div className="sanctionedImages">
                    <div>
                        <img id="icma" src={icma} alt="ICMA"/>
                        <a target="blank" href="http://ifcma.org/"><img id="ifcma" src={ifcma} alt="IFCMA"/></a>
                    </div>
                </div>
            </div>
        )
    }
};
