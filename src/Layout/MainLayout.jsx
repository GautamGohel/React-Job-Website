import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <ToastContainer/>
    </>
  )
}

export default Layout
