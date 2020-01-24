import React from 'react'

import './Logo.css'

import logo from '../../assets/imgs/logo2.png'

export default props => 
    <aside ClassName='logo'>
        <a href="/" className='logo'>
            <img src={logo} alt='logo' />
        </a>
    </aside>