import React from 'react'

import logo from '../assets/images/logo.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    {/* <span className="icon major fa-bolt"></span> */}
                    <span className="icon major"><img src={logo}></img></span>
                    <h1>Welcome to <strong>Side Biz Sundays</strong></h1>
                    <p>The goal of Sidebiz Sundays is to supercharge your Sunday morning in a concentrated form. <br />
                    Providing accountability, productivity, and growth for about 2 hours.</p>
                    <ul className="actions">
                        <li><a href="http://eepurl.com/gf-GUL" className="button scrolly">Get Weekly Reminders</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
