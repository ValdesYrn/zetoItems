import { Route, Routes } from 'react-router-dom'
import PretPersonel from '../pages/Pret Personel'
import Home from '../pages/Home'
import Footer from './Footer'
import Navbar from './Header'
import CreditExpress from '../pages/Credit Express'
import CreditPro from '../pages/Crédit pro'
import NotFound from '../pages/404 Not Found'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/nos-offres/pr%C3%AAt-personnel"
          element={<PretPersonel />}
        />
        <Route path="/nos-offres/Credit-Express" element={<CreditExpress />} />
        <Route path="/nos-offres/Credit-Pro" element={<CreditPro />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
