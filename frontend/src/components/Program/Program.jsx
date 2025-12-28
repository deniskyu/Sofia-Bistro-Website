import React from 'react'
import './Program.css'
import { assets } from '../../assets/assets'

const Program = () => {
  return (
    <div className="program">
      <h2 className="program-title">Program</h2>

      <div className="program-card">
        <p><span>Luni – Joi:</span> 08:00 – 24:00</p>
        <p><span>Vineri:</span> 12:00 – 04:00</p>
        <p><span>Sâmbătă – Duminică:</span> 12:00 – 24:00</p>
      </div>

      <button className="reserve-btn"><a href={assets.contact_rezervari} style={{textDecoration: 'none', color: 'white'}}>Rezervă</a></button>
    </div>
  )
}

export default Program
