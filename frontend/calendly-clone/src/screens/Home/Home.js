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
        </div>
    )
}

export default Home
