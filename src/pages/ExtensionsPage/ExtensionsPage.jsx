import ExtensionCard from '../../components/ExtensionCard/ExtensionCard'
import FilterButton from '../../components/FilterButton/FilterButton'
import Header from '../../components/Header/Header'
import './ExtensionsPage.css'
import extensions from './../../data/extensionsData'
import React from 'react'

const ExtensionsPage = () => {
  return (
    <div className='container'>

      <Header/>
      <div className='ExtensionsList'>
        <h2 className='h4'>
          Extensions List
        </h2>
      
        <FilterButton/>
      </div>
        

           {/* 🧠 Map through the data */}
      <div className='card-container'>
        {extensions.map((item) => (
          <ExtensionCard
            key={item.id}
            icon={item.icon}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
      
    </div>
  )
}

export default ExtensionsPage
