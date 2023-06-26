import React from 'react'
import './App.css'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import Footer from './components/Footer'
import { AuthProvider } from './AuthContext'
import BackToTop from './components/BackToTop'

function App() {

  return (
    <AuthProvider>
      <Header />
      <main className='main'>
        <AppRoutes />
      </main>
      <Footer />
      <BackToTop/>
    </AuthProvider>
  )
}

export default App

