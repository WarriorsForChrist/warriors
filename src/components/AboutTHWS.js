import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import title from '../images/titleTaoHsiehWuShu.jpg'
import kanji from '../images/kanji.jpg'
import logo from '../images/thwslogo.jpg'

import '../styles/AboutTHWS.css'

export default class AboutTHWS extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <div className="w3-row-padding" style={{marginLeft: 30, marginRight: 30}}>
                <div id="buttonDiv">
                    <Link to="/">Home</Link>
                </div>
                <div id="descriptionDiv">
                    <div className="appLogo">
                        <div className="appLogo-semantic">
                            <img src={logo} alt="Tao Hsieh Wu Shu"/>
                        </div>
                    </div>

                    <p>
                        <b>Philosophy</b>
                    </p>

                    <p>
                        Tao Hsieh Wu Shu (THWS), or the Way of Unified Martial Arts, seeks to develop <b>quality martial artists</b> of <b>upstanding character</b> who <b>develop at their own pace</b> in an <b>environment of healthy community</b>. 
                    </p>

                    <p>
                        As <b>quality martial artists</b>, THWS students are taught on a rotating semester-long curriculum that exposes them to a wide variety of martial arts techniques and concepts from striking and kicking to breakfalls, forms, throws, wristlocks, groundfighting, capoeira, parkour, and more. As the students advance, they will move from more static drills to combative scenarios designed to simulate organic confrontations. THWS is designed with the individuality of each student in mind and thus encourages each learner to develop their own fighting style based on their abilities and body type.
                    </p>

                    <p>
                        THWS encourages <b>upstanding character</b> by teaching according to a Christian philosophy. Students hold challenging stances to learn discipline of the body and mind, drill breakfalls to understand how to push through failure, engage in a culture of mentorship and encouragement, and train with the intention of using the minimum amount of force necessary to subdue an attacker. By training the body, we also train our minds and spirits to be courageous, resilient, disciplined, and gentle. 
                    </p>

                    <p>
                        Students in THWS are encouraged to <b>develop at their own pace</b>. We welcome those with or without previous martial arts experience. We also understand that every student who enters the dojo (classroom) comes from a different place of athletic ability and mental fortitude. Emphasis is placed on continuous learning rather than ranking up as quickly as possible. The seven THWS sash (or belt) tests are designed to challenge and push you physically and mentally so that you will be confident that you have earned every rank you hold. 
                    </p>

                    <p>
                        An <b>environment of healthy community</b> permeates the system of THWS. We cheer for each other and celebrate both victories and failures. Senior students are expected to mentor and invest in newer students instead of focusing solely on their own accomplishments. Class times are designed to be engaging, chaotic, and fun. We take joy in learning and growing as martial artists and as human beings.
                    </p>

                    <p>
                        “For physical training is of some value, but godliness has value for all things, holding promise for both the present life and the life to come.” - 1 Timothy 4:8
                    </p>

                    <p>
                        <b>History</b>
                    </p>

                    <p>
                        THWS was founded by Joel Geniesse, Soke.  He started his martial arts career at the age of 5 studying Muay Thai.  He then transitioned into Tae Kwon Do where he competed nationally and eventually began to cross-train in several styles where he tempered his techniques in the pre-UFC world of open full-contact tournaments.
                    </p>

                    <p>
                        In 2000 he was approached by Master Phillip Cann of the Christian Martial Arts Association (CMA) about creating a martial art system that drew from Biblical principles and philosophy. Over the next seven years, Geniesse developed THWS under the guidance of Jerry Wiles, Boo Kwon Chang Nim, and Max Andrews, Soke, and with the assistance of Shihon Gregory Kendall.  On June 9, 2007, Tao Hsieh Wu Shu was officially sanctioned by the International Christian Martial Artists Association (ICMA, previously the CMA) at their international championships. The THWS students performed a demonstration introducing their style to the international martial arts community at the ICMA tournament. On August 18, 2007, at the International Fellowship of Christian Martial Artists’ (IFCMA) annual Black Belt Seminar, the Shihon Council bestowed the status of Soke (founder/head of house) to Geniesse. 
                    </p>

                    <p>
                        Kyoshi Max Andrews played a critical role in preparing Soke Geniesse for his master’s test and presentation of THWS to the Shihon Council of the ICMA. Kyoshi Andrews, who has since passed, was Soke of Niho Kempo Jujistu Ryu and a 2007 inductee into the United States Martial Arts Hall of Fame. The impact of his long-time mentorship to Soke Geniesse cannot be overstated, especially to the development of THWS.
                    </p>

                    <p>
                        <b>Practice</b>
                    </p>

                    <p>
                        Tao Hsieh Wu Shu is based on eight different widely recognized martial art styles:
                        <ul>
                            <li>Tae Kwon Do</li>
                            <li>Wing Chun</li>
                            <li>Shaolin Wu Shu</li>
                            <li>Jujitsu/Judo</li>
                            <li>Muay Thai</li>
                            <li>Capoeira</li>
                            <li>Nin-po</li>
                            <li>Pressure points</li>
                        </ul>
                    </p>

                    <p>
                        The intent of THWS is to pull effective concepts and techniques from existing styles and give the students a comprehensive martial arts education. As students advance, they will naturally specialize in certain areas that make the most sense for their abilities and interest level. One student may excel at kicks; another is excellent at ground fighting. THWS utilizes a soft blocking style. Classes include cardio warmups and dynamic drills to keep learners on their toes. 
                    </p>

                    <p>
                        THWS has seven student ranks before black belt:
                        <ul>
                            <li>No sash (beginner)</li>
                            <li>White sash (beginner)</li>
                            <li>Yellow sash (beginner)</li>
                            <li>Orange sash (intermediate)</li>
                            <li>Green sash (intermediate)</li>
                            <li>Blue sash (advanced)</li>
                            <li>Red sash (advanced)</li>
                        </ul>
                    </p>

                    <p>
                        There is not a prescribed length of time for progression through the ranks. Upskilling is dependent on students’ commitment to the program, availability, physical fitness, and ability to learn and demonstrate the material.
                    </p>

                    <p>
                        “Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize. Everyone who competes in the games goes into strict training. They do it to get a crown that will not last; but we do it to get a crown that will last forever. Therefore, I do not run like a man running aimlessly; I do not fight like a man beating the air. No, I beat my body and make it my slave so that after I have preached to others, I myself will not be disqualified for the prize.” - 1 Corinthians 9:24-27
                    </p>

                    <p>
                        Tao Hsieh Wu Shu is sanctioned by the International Christian Martial Arts Association (ICMA), and by the International Fellowship of Christian Martial Arts (IFCMA).
                    </p>
                </div>
                <div id="buttonDiv">
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
};
