import React from 'react'
import Banner from '../../components/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="separator-home"></div>
            <Banner/>
        </div>
    )
}

export default Home
