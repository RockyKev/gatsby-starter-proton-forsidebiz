import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Goal of Sidebiz Sundays</h2>
                            </header>
                            <p>Since the inception, I have used Sidebiz Sundays to work on my Sidebiz. From building apps, do client work, selling products... I've also used this time to learn to code, complete certifications and work on my portfolio. There's also little things: did my taxes, fixed my motorcycle, and wrote Christmas cards.</p>
                            <p>Start your week with a burst of productivity and use your Sundays to eat that frog, whatever it may be!</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>
{/* 
                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section> */}

                <section id="three" className="main style2 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>The Details</h2>
                            </header>
                            <h3>Where</h3>
                            <p>Side-biz Sundays (10am - 12pm ET) is hosted at <a href="https://zoom.us/j/2270895016">https://zoom.us/j/2270895016</a> <br/>
                            Join at that time.</p>

                            <h3>The Structure</h3>
                            <p>The structure has been changed a few times since it's initial iteration.</p>

                            <p>As of Jan 2019: <br />
                            10 minutes - Fill out your Project Task<br />
                            40 minutes - Work Sprint #1 - Stay in the zoom room and work<br />
                            10 minutes - Short break - refocus on your Project task<br />
                            40 minutes - Work Sprint #2 - stay in the zoom room and work<br />
                            10 minutes - Fill out your Results<br />
                            10 minutes - Final Q&amp;A and Wrap-up conversations<br />
                            </p>

                            <h3>How to get started</h3>
                            <p>Get the weekly reminder, join on Sunday mornings at the designated time, and work.</p>


                        </div>




                        {/* <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div> */}

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Get a weekly Reminder Email here:</h2>
                        </header>
                        <ul className="actions uniform">
                            <li><a href="http://eepurl.com/gf-GUL" className="button special">Sign Up</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;