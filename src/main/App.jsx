import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'

import Routers from './Routers'
import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routers />
            <Footer />
        </div>
    </BrowserRouter>
