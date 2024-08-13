import React from 'react'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <React.Fragment>
            <ToastContainer />
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default MainLayout
