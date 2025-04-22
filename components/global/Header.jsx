import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">   
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header