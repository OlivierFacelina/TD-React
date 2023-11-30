import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

export default function Template() {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
