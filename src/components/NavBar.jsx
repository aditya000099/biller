import React from 'react'
import { useNavigate } from 'react-router-dom' // Import the useNavigate hook
import { Button } from './ui/button'

const NavBar = () => {
  const navigate = useNavigate() // Initialize the useNavigate hook

  const handleButtonClick = () => {
    navigate('/new') // Navigate to the /new route
  }

  return (
    <div className='w-full p-4 rounded-2xl mt-6 border-spacing-[0.01] border-2'>
    <div className='flex flex-row'>
    <h1 className='text-2xl font-bold'>Biller</h1>
     
      <Button variant="outline" className='rounded-xl ml-12' onClick={handleButtonClick}>
        Create new order
      </Button>
      </div>
    </div>
  )
}

export default NavBar
