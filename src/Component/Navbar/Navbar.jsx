import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import logo from "./logo.ico"
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"
import Searchbar from './Searchbar/Searchbar'

const Navbar = () => {
    const Navbar=({toggledrawer,seteditcreatechenalbtn})=>{
        const [authbtn,setauthbtn]=useState(false)
        const currentuser=null;
    }

  return (
   <>
   <div className="Navbar_Container">
    <div className="Burger_Logo_Navbar">
        <div className="Burger" onClick={()=>toggledrawer()}>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <Link to={"/"} className='logo_div_Navbar'>
        <img src={logo} alt="" />
        <p className="logo_titleNavbar">YouTube</p>
        </Link>
    </div>
    <Searchbar/>
    <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
    <div className="app_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
    </div>
    <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
    <div className="Auth_cont_Navbar">
        {currentuser?(
                <>
                <div className="Chenal_logo_App" onClick={()=>setauthbtn(true)}>
                    <p className="fstChar_logo_app">
                        {currentuser?.result.name?(
                                <>{currentuser?.result.name.charAT(0).toUppercase()}</>
                            ):(
                               
                                    <>{currentuser?.result.email.charAT(0).toUppercase()}</>
                            )}
                    </p>
                </div>
                </>
            ):(
                <>
                <p className='Auth_Btn' onClick={() => google_login()}>
                                <BiUserCircle size={22}/>
                                <b>Sign in</b>
                            </p>
                </>
            )}
    </div>
   </div>
   {
                authbtn &&
                <Auth seteditcreatechanelbtn={seteditcreatechanelbtn} setauthbtn={setauthbtn} user={currentuser} />
            }
   </>
  )
}

export default Navbar

