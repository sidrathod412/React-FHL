import React from 'react'
import ListGroup from './ListGroup'

const Cities = () => {
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata']
  //const cities: string[] = []
  

  return (
    <>
      <ListGroup items={cities} heading='Cities' />
    </>
  )
}

export default Cities