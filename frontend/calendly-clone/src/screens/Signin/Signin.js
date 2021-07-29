import React from 'react'
import BannerSignin from '../../components/BannerSignin/BannerSignin'
import NavbarSignin from '../../components/NavbarSignin/NavbarSignin'



function Signin() {
    return (
        <div>
            <NavbarSignin />
            <div className="separator-home"></div>
            <BannerSignin/>
        </div>
    )
}

export default Signin
