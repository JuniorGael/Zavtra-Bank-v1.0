import './App.css'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Header />
      <ToastContainer />
      <main className='main'>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App

