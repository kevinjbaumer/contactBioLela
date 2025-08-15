import { useState } from 'react'
import Header from './components/Header'
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import About from './components/about';


function App() {

  return (
   <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <footer className="mt-12 py-6 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center text-sm text-slate-600">© 2023 March Lena Recovery Support & Compassionate Care. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App

