import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="text-gray-600">
            &copy; 2023 My Website. All rights reserved.
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-400">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <div className="text-center text-gray-600">
          <p>Follow us on:</p>
          <ul className="flex justify-center space-x-4">
            <li><a href="#facebook" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="#twitter" className="hover:text-gray-400">Twitter</a></li>
            <li><a href="#instagram" className="hover:text-gray-400">Instagram</a></li>
          </ul>   
          </div>
      </div>
    </footer>
  )
}

export default Footer