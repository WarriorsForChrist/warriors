import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

import '../styles/Locations.css'
import '../App.css'

export default class Location extends Component {
    render() {
        const getAddress2 = () => {
            if (this.props.address2 && this.props.address2 !== '') {
                return (
                    <span>
                        {this.props.address2}<br/>
                    </span>
                )
            }
        }

        const getClassListings = () => {
            if (this.props.class1 && this.props.class1 !== '') {
                return (
                    <div className="locationDues" style={{marginLeft: 15}}>
                        {this.props.class1}<br/>
                        {this.props.class2}
                    </div>
                )
            }
        }

        return (

            <div className="location infoSection">
                <h3>{this.props.locationTown} Location</h3>

                <div className="headInstructor"><b>Head Instructor:&nbsp;</b>
                    <Link to={this.props.instructor}>{this.props.headInstructor}</Link>
                </div>

                <div className="locationAddress">
                    { this.props.mapLink && (
                        <a href={this.props.mapLink} target="blank">
                            <h4>{this.props.locationName}</h4>
                            <h5>
                                {this.props.address1}<br/>
                                {getAddress2()}
                                {this.props.cityStateZip}
                            </h5>
                        </a>
                    )}
                    { !this.props.mapLink && (
                        <Fragment>
                        <h4>{this.props.locationName}</h4>
                        <h5>
                            {this.props.address1}<br/>
                            {getAddress2()}
                            {this.props.cityStateZip}
                        </h5>
                        </Fragment>
                    )}
                </div>
                <h4>{this.props.classTimes}</h4>
                {getClassListings()}
                <div className="locationDues">
                    <b>Dues</b>
                    <ul>
                        <li>{this.props.registrationStatus}</li>
												<li>{this.props.registrationPrice}</li>
                        <li>{this.props.registrationMonthly}</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <a href={this.props.infoEmail}>Email {this.props.locationTown} Dojo</a>
                    </div>
                </div>
            </div>
        )
    }
};
