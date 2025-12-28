import React from 'react'
import './Landing.css'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className='landing' id='landing'>
      <div className='landing-container'>
        <h1 className='landing-header'>Cele mai bune preparate din zona ta</h1>
        <p className='landing-p'>Sofia Bistro este un restaurant modern din Craiova, unde gustul rafinat se îmbină cu o atmosferă primitoare și elegantă. Cu un meniu atent selecționat, preparate proaspete și plating creativ, Sofia Bistro oferă o experiență culinară potrivită atât pentru întâlniri relaxate, cât și pentru momente speciale.</p>
        <button className='landing-button' onClick={() => navigate('/info#despre-noi')}> Despre noi</button>
      </div>
    </div>
  )
}

export default Landing
