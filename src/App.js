import React from 'react'
import Award from './asserts/1.png'
import Present from './asserts/2.png'
import Logo from './asserts/logo.png'
import Products from './asserts/3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='head'>
            <img src={Logo} alt='CRI'/>
        </div>
        <div className='award'>
            <div className='award-image'>
              <img src={Award} alt='award'/>
            </div>
            <div className='award-present'>
              <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
              <ul>
                  <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                  <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
              </ul>
              <img src={Present} alt='award-present'/>
              <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
        <h4 className='info'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h4>
        <div className='products'>
            <img alt='products' src={Products}/>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            <hr/>
            <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
            <p className='info2'>CHEMICALS & PROCESS<span className='line'>|</span>POWER<span className='line'>|</span>WATER & WASTE WATER<span className='line'>|</span>
                  OILS & GAS<span className='line'>|</span>PHARMA<span className='line'>|</span>SUGARS & DISTILLERIES<span className='line'>|</span>PAPER & PULP<span className='line'>|</span>
                  MARINE & DEFENCE<span className='line'>|</span>METAL & MINING<span className='line'>|</span>FOOD & BEVERAGE<span className='line'>|</span>PETROCHEMICAL & REFINERIES
                  <span className='line'>|</span>SOLAR<span className='line'>|</span>BUILDING<span className='line'>|</span>HVAC<span className='line'>|</span>FIRE FIGHTING<span className='line'>|</span>
                  AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className='footer'>
            <span><FontAwesomeIcon icon={faPhone} /> Toll free 1800 200 1234</span>
            <a href='www.facebook.com/cripumps'> www.facebook.com/cripumps</a>
            <a href='www.cripumps.com'><FontAwesomeIcon icon={faGlobe}/> www.cripumps.com</a>
        </div>
    </div>
  );
}

export default App;
