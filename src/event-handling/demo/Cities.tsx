import React from 'react'
import ListGroup from './ListGroup'

const Cities = () => {
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata']
  //const cities: string[] = []
  
  const handleSelectCity = (city: string) => {
    console.log('Selected City:', city)
  }

  return (
    <>
      <ListGroup items={cities} heading='Cities' onSelectItem={handleSelectCity} />
    </>
  )
}

export default Cities