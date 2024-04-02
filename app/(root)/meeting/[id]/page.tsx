import React from 'react'
// 
// Since we do not know the route name before time
// we will use dynamic routes so generate them dynamically
// when they are required and when we have necessary information
// in this case we do not know the meeting IDs. 
// 
const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>Meeting Room: #{params.id}</div>
  )
}

export default Meeting