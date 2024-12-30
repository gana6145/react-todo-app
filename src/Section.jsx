import React from 'react'
import Appname from './Appname'
import Addtodo from './Addtodo'

const Section = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-gray-300 w-[70%] rounded-lg">
      <Appname/>
      <Addtodo/>
      
      
      
    </div>
  </div>
  )
}

export default Section
