import React from 'react'
import { Link } from 'react-router-dom'

const Units = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Units</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link to="/UnitOne" className="bg-zinc-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Unit One</h3>
          <p className='text-stone-300'>Inside the world of care</p>
        </Link>

        <Link to="/UnitTwo" className="bg-zinc-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Unit Two</h3>
          <p className='text-stone-300'>The power of machines</p>
        </Link>

        <Link to="/UnitThree" className="bg-zinc-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Unit Three</h3>
          <p className='text-stone-300'>Protect Nature, Protect Future</p>
        </Link>

        <Link to="/UnitFour" className="bg-zinc-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Unit Four</h3>
          <p className='text-stone-300'>Marine Live</p>
        </Link>

        <Link to="/UnitFive" className="bg-zinc-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Unit Five</h3>
          <p className='text-stone-300'>From muscles to mindset</p>
        </Link>
      </div>
    </div>
  )
}

export default Units