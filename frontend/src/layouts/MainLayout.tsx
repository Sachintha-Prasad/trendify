import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout
