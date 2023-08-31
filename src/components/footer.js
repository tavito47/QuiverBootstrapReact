import React from 'react'
import './footer.css';
import pieLogo from "../assets/img/footer/logo.png"
import fb from "../assets/img/footer/facebook.png"
import ins from "../assets/img/footer/instagram.png"
import tw from "../assets/img/footer/twitter.png"
export default function footer() {
  return (
    <section className='footer'>
        <footer className='contenedor-principal'>
            <div class="container text-center">
                <div class="row align-items-center">

                    <div class="col izqfooter">
                        <a className="navbar-brand" href="/#">
                            <img src={pieLogo} alt="logo"/>
                        </a>
                        <div>
                            <p>2017</p>
                        </div>
                    </div>

                    <div class="col derfooter">
                        <div>
                            <p>Follow us @quiverfitness</p>
                        </div>
                        <a className="navbar-brand" href="/#">
                            <img src={fb} alt="logo"/>
                        </a>
                        <a className="navbar-brand" href="/#">
                            <img src={ins} alt="logo"/>
                        </a>
                        <a className="navbar-brand" href="/#">
                            <img src={tw} alt="logo"/>
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    </section>
  )
}
