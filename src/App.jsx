import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Gallery from './Gallery'


function App() {

  const galleryItem = [
    {
      image: "dist/assets/images/gallery-1.jpg",
    },

    {
      image: "dist/assets/images/gallery-2.jpg",
    },

    {
      image: "dist/assets/images/gallery-3.jpg",
    },

    {
      image: "dist/assets/images/gallery-4.jpg",
    },

    {
      image: "dist/assets/images/gallery-5.jpg",
    },

    {
      image: "dist/assets/images/gallery-6.jpg",
    },

    {
      image: "dist/assets/images/gallery-7.jpg",
    },

    {
      image: "dist/assets/images/gallery-8.jpg",
    },

    {
      image: "dist/assets/images/gallery-9.jpg",
    },

    {
      image: "dist/assets/images/gallery-10.jpg",
    },

    {
      image: "dist/assets/images/gallery-11.jpg",
    },

    {
      image: "dist/assets/images/gallery-12.jpg",
    },

    {
      image: "dist/assets/images/gallery-13.jpg",
    },

    {
      image: "dist/assets/images/gallery-14.jpg",
    },

    {
      image: "assets/images/gallery-15.jpg",
    },

    {
      image: "dist/assets/images/gallery-16.jpg",
    },
  ]

  const contactUs = [
    {
      contactUsHeading: "Contact Us",
      contactUsContent: "Praesent tellus magna, consectetur sit amet volutpat eu, pulvinar vitae sem. Sed ultrices. bg white 80% alpha. btn #066",
      contactUsTel: "Tel: ",
      contactUsEmail: "Email: info@company.com",
      mapBtn: " Open Maps"
    }
  ]


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home galleryImage={galleryItem}/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/gallery' element={<Gallery galleryImage1={galleryItem}/>}/>
      <Route path='/contact' element={<Contact contactUsContent={contactUs}/>}/>
      <Route path='/services' element={<Services />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
