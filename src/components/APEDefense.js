import React, { Component } from 'react'

import '../styles/APEDefense.css'

export default class APEDefense extends Component {

    render() {
        return (
            <div className="infoSection apeDefense">
                <h2>A.P.E. Defense</h2>
                <div>
                    <p>
                        A.P.E. Defense (Awareness, Prevention, Execution) trains non-martial artists to defend themselves and 
                        to provide a framework for certification on presenting the materials on behalf of Warriors for Christ, Inc.  
                    </p>
                    <p>
                        Attendees are taught defense-minded principles and practical techniques they can use without studying a 
                        full course on martial arts.  They will use easy fine motor skills they use each day such as turning a 
                        key in the car ignition.
                    </p>
                    <p>
                        These courses are generally 1-2 hours and are offered free of charge.
                    </p>
                </div>

                <div id="contact">
                    <a href={"mailto:" + this.props.infoEmail + "?subject=APE Defense"}>Contact Us To Schedule One</a>
                </div>
            </div>
        )
    }
};

APEDefense.defaultProps = {
    infoEmail: 'info@warriors-for-christ.com'
};
