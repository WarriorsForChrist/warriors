import React, {Component} from 'react'

import ExternalLink from './ExternalLink'

import '../App.css'
import '../styles/RelatedLinks.css'

export default class RelatedLinks extends Component {
    render() {
        return (
            <div className="infoSection relatedLinks">
                <h2>Related Links</h2>
                <h3>Check out these other great organizations:</h3>
                <div id="links">
                    <ul>
                        <li><ExternalLink href="http://www.ifcma.org" desc="Internation Fellowship of Christian Martial Artists" /></li>
                    </ul>
                </div>
            </div>
        )
    }
};
