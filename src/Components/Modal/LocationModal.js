import React, { useEffect, useState } from 'react'
import './index.css'

const LocationModal = ({toggleModal}) => {
    
    
  return (
       
      <div className='modal-bg'>
        <div className='location-container'>
            <div className='location-header'>
                <h1>Visit any of our 7RiverLabs Lounges to order your test</h1>
                <button className='cancel' onClick={toggleModal}>X</button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>7RL Experience Centre</td>
                        <td>Mondays-Saturdays<br/>09:00-17:00</td>
                        <td>123b, Joel Ogunnaike street, Ikeja GRA</td>

                        <td className='city'>Ikeja</td>
                        <td><a
                            target="_blank"
                            href="https://goo.gl/maps/Z4QhzUiqgNExnQ9XA"
                            rel="noreferrer"
                        >
                            Get Directions
                        </a></td>
                    </tr>
                    <tr>
                        <td>7RL Express</td>
                            <td>Mondays-Saturdays<br/>09:00-17:00</td>
                            <td>3, Omorinre Johnson Street, Lekki phase 1</td>
                            <td className='city'>Lekki phase 1</td>

                            <td>
                            <a
                                target="_blank"
                                href="https://goo.gl/maps/9MyMkkJR8LefqCTv6"
                                rel="noreferrer"
                            >
                                Get Directions
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>7RL Express</td>
                            <td>Mondays-Saturdays<br/>09:00-17:00</td>
                            <td>1-7 Muri Okunola Victoria Island Lagos State.</td>
                            <td className='city'>Victoria Island</td>
                            <td>
                            <a
                                target="_blank"
                                href="https://goo.gl/maps/mvfWCNLiioh1JHNQ6"
                                rel="noreferrer"
                            >
                                Get Directions
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>7RL Express</td>
                            <td>Mondays-Saturdays<br/>09:00-17:00</td>
                            <td>Skymall, Opposite Blenco supermarket, Sangotedo</td>
                            <td className='city'>Sangotedo</td>
                            <td>
                            <a
                                target="_blank"
                                href="https://goo.gl/maps/fBX3nXs7FHqcmSLY9"
                                rel="noreferrer"
                            >
                                Get Directions
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>7RL Express</td>
                            <td>Mondays-Saturdays<br/>09:00-17:00</td>
                            <td>
                                Town square Mall; Plot 8, CMD road, <br/>Magodo Phase II, Opposite
                                Magodo Brooks Estate North Gate
                            </td>

                            <td className='city'>Magodo</td>
                            <td>
                            <a
                                target="_blank"
                                href="https://goo.gl/maps/J1EfiySnuQ4fnec19"
                                rel="noreferrer"
                            >
                                Get Directions
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>7RL Express</td>
                            <td>Mondays-Saturdays<br/>09:00-17:00</td>
                            <td>
                                Moyo House, beside Ibara Police Station, <br/>opposite Ibara Baptist
                                Church, Abeokuta, Ogun state
                            </td>

                            <td className='city'>Abeokuta</td>
                            <td>
                            <a
                                target="_blank"
                                href="https://goo.gl/maps/Z4QhzUiqgNExnQ9XA"
                                rel="noreferrer"
                            >
                                Get Directions
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>7RL Express</td>
                            <td>Mondays-Saturdays<br/>09:00-17:00</td>
                            <td>Ado- Bayero Mall, Kano</td>
                            <td className='city'>Kano</td>

                            <td>
                            <a
                                target="_blank"
                                href="https://goo.gl/maps/VgSxDL3gWysMV7Qg9"
                                rel="noreferrer"
                            >
                                Get Directions
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LocationModal