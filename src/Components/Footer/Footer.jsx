import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Edusite. All rights reserved.</p>

      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </footer>
  )
}

export default Footer
