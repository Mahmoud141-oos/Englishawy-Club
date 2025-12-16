import React from 'react'
import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'
import Units from '../Components/Units/Units'
import Footer from '../Components/Footer'
import Class from './Class'

const Home = () => {
  return (
    <div className="container h-full mx-auto ">
      <hr className="md:my-8 my-2 text-[#36d7b73c]" />
      <Hero />
      <hr className="md:my-8 my-2 text-[#36d7b73c]" />
      <Units />
      <hr className="md:my-8 my-2 text-[#36d7b73c]" />
    </div>
  )
}

export default Home