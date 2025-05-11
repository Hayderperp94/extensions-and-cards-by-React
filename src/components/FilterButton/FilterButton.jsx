import './FilterButton.css'
import React from 'react'

const FilterButton = () => {
  return (
    
    <div className='FilterButton'>
      <button className='button'>All</button>
      <button className='button'>Active</button>
      <button className='button'>Inactive</button>
    </div>
    
  )
}

export default FilterButton
