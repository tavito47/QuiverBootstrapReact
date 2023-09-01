import React from 'react'
import './navbar.css';
import './stylesgloba.css';

import loguito from "../assets/img/navbar/logo.png"
import aple from "../assets/img/navbar/appApple.png"



export default function navbar() {
  return (
    <section className='baner'>
        <nav className="navbar navbar-expand-lg">
            <div className="contenedor-principal container-fluid">
                <a className="navbar-brand" href="/#">
                <img src={loguito} alt="logo"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link menu1" href="/#">About</a>
                    <a className="nav-link menu2" href="/#">Members</a>
                    <a className="nav-link menu3" href="/#">Trainers</a>
                    <a className="nav-link menu4" href="/#">FAQ</a>
                    <a className="nav-link menu5" href="/#">Contact</a>
                </div>
                </div>
            </div>
        </nav>
        <div className='contenedor-principal'>
          <div className='txt-prin'>
            <div className='titulo-principal'>
              <h1>Revolutionizing fitness. <br /> One instructional video<br />at a time.</h1>
            </div>
            <div className='aple'>
              <a className="navbar-brand logo-aple" href="/#">
                <img src={aple} alt="logo"/>
              </a>
            </div>
          </div>
        </div>
                
    </section>
  )
}
