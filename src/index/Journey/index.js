import React from 'react'
import './journey.css'
import switchImg from '../imgs/switch.svg'

function Journey(props) {
  const { from, to, showCitySelector, exchangeFromTo } = props
  return (
    <div className='journey'>
      <div className='journey-station'>
        <input value={from} onClick={() => showCitySelector(true)} type="text" readOnly name="from" className='station-input'/>
      </div>
      <div className='journey-switch'>
        <img src={switchImg} alt="切换" width="70" height="40" onClick={() => exchangeFromTo()}/>
      </div>
      <div className='journey-station'>
        <input value={to} onClick={() => showCitySelector(false)} type="text" readOnly name="to" className='station-input'/>
      </div>
    </div>
  )
};

export default React.memo(Journey)
