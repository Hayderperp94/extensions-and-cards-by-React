import './ExtensionCard.css'
import React from 'react'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
const ExtensionCard = (props) => {
  const { icon, name, description } = props;
  return (
    <div className='card'>
    
    <div className='flex'>
      
    <img src={icon} alt="" />
    

    
    <div className='text'>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>

    </div>

    <div className='flex1'>
      <button>Remove</button>
      <ToggleSwitch/>
    </div>
    </div>
  )
}

export default ExtensionCard
