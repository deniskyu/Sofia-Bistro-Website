import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <img src={assets.red_logo}/>
            <p>La Sofia Bistro, fiecare masă este o experiență, unde preparatele proaspete și gusturile rafinate se îmbină cu o atmosferă elegantă și relaxantă, chiar în inima Craiovei. Meniul atent ales și atenția pentru detalii fac din acest loc alegerea perfectă pentru momente speciale sau întâlniri relaxate.</p>
            <div className="footer-social-icons">
                <a href='https://www.facebook.com/SofiaBistroCraiova' target='_blank'><img src={assets.fb_logo} alt="" /></a>
                <a href='https://www.instagram.com/sofia_lounge_restaurant/' target='_blank'><img src={assets.ig_logo} alt="" /></a>
                <a href='https://www.tiktok.com/' target='_blank'><img src={assets.tt_logo} alt="" /></a>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>Sofia Bistro</h2>
            <ul>
                <li><NavLink to='/'>Acasa</NavLink></li>
                <li><NavLink to='/info#despre-noi' target='_blank'>Despre noi</NavLink></li>
                <li><NavLink to='/info#livrare' target='_blank'>Livrare</NavLink></li>
                <li><NavLink to='/info#termeni' target='_blank'>Privacy policy</NavLink></li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Ia legatura cu noi</h2>
            <ul>
                <li>
                  <a href="tel:+4071313131">{assets.contact}</a>
                </li>
                <li>
                  <a href={`mailto:${assets.email}`}>{assets.email}</a>
                </li>
                <li><a 
                  href='https://www.google.com/maps/place/Sofia+Lounge%26Restaurant/@44.3156036,23.8014626,19.86z/data=!4m15!1m8!3m7!1s0x4752d7a116879b15:0xabdd5fd1402e61ea!2sStrada+Eugeniu+Carada+17,+Craiova+200384!3b1!8m2!3d44.3155242!4d23.8021875!16s%2Fg%2F11c164qmzg!3m5!1s0x4752d7a114176f37:0x9c486944005b0aa2!8m2!3d44.3154884!4d23.8020276!16s%2Fg%2F1ptx5ycty?hl=de&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D' 
                  target='_blank'>📍Str. Eugeniu Carada, 17</a></li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 &#x2117; Sofia Bistro - Toate drepturile sunt rezervate.</p>
    </div>
  )
}

export default Footer
