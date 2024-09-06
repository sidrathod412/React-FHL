import React from 'react'

const Message = () => {
  // JSX: JavaScript XML
  const name = null;

  // We can write logic in JSX using curly braces
  if(name === null){
    return <h1>Hello World!</h1>
  }

  return <h1>Hello {name}!</h1>
}

export default Message