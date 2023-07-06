import './App.css'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App

