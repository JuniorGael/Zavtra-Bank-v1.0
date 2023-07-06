import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InfoSecurity from './pages/InfoSecurity'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Leadership from './pages/Leadership'
import Error404 from './pages/Error404'
import Forms from './pages/Forms'
import DepositACAForm from './pages/DepositACAForm'
import DepositAgreementForm from './pages/DepositAgreementForm'
import DepositSlip from './pages/DepositSlip'
import DebtForm from './pages/DebtForm'
import ViewerDebt from './pages/pdfViewer/ViewerDebt'
import ViewerAgreement from './pages/pdfViewer/VewerAgreement'
import ViewerSlip from './pages/pdfViewer/ViewerSlip'
import ViewerDepositACA from './pages/pdfViewer/ViewerDepositACA'
import Banking from './pages/Banking'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/banking' element={<Banking />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/login" element={<Login />} />
      <Route path="/infoSecurity" element={<InfoSecurity />} />
      <Route path='/forms' element={<Forms />} />
      <Route path="/debt" element={<DebtForm />} />
      <Route path='/deposit-aca' element={<DepositACAForm />} />
      <Route path='/agreement' element={<DepositAgreementForm />} />
      <Route path='/slip' element={<DepositSlip />} />
      <Route path="/pdf-preview-debt" element={<ViewerDebt />} />
      <Route path="/pdf-preview-agreement" element={<ViewerAgreement />} />
      <Route path="/pdf-preview-slip" element={<ViewerSlip />} />
      <Route path="/pdf-preview-aca" element={<ViewerDepositACA />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes