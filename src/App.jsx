import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from './components/Contact Me/ContactMe'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <NavBar />
      <AboutMe />
      <Hero />
      <Skills />
      <Experience />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
