import React from 'react'

const Card = ({children,bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} bg-gray-100 shadow-md rounded-lg p-6`}>
    {children}
    </div>
  )
}

export default Card
 