import React from 'react'
import logo from './image/img.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='' className='img' />
            <h3>Ahmed Sabry Mahmoud</h3>
            <h4>Full Stack Developer</h4>
            <div className='socail-media'>
                <a href='www.linkedin.com/in/ahmed-sabry-41b0b5268'><FontAwesomeIcon icon={faLinkedin} size="3x" className='FontAwesomeIcon' /></a>
                <a href='https://github.com/SABRY225'><FontAwesomeIcon icon={faGithub} size="3x" className='FontAwesomeIcon' /></a>
            </div>
        </div>
    )
}

export default Header
