import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Available from './pages/Available'
import Collections from './pages/Collections'
import CollectionDetail from './pages/CollectionDetail'
import PaintingDetail from './pages/PaintingDetail'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/available" element={<Available />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:slug" element={<CollectionDetail />} />
        <Route path="/paintings/:id" element={<PaintingDetail />} />
      </Routes>
      <Footer />
    </>
  )
}
