import React from 'react'
import Banner from '../../components/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

function Home({setFirstEmail, firstEmail}) {
    return (
        <div>
            <Navbar/>
            <div className="separator-home"></div>
            <Banner setFirstEmail={setFirstEmail} firstEmail={firstEmail}/>            
            <div id="footer-div">
                <footer id="footer-calendly-copyright">
                    This demo application is inspired by <a href='https://calendly.com/'>Calendly.com</a>. All the copyrights are owned by Calendly.            
                </footer>
            </div>
            
        </div>
    )
}

export default Home
