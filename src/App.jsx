import { useEffect, useState } from 'react'
import Home from './Pages/Home'
import { HashLoader } from 'react-spinners'
import Routing from './Utils/Routing'

const App = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 3000) // Simulate a loading time of 3 seconds

    return () => clearTimeout(timer)
  }, [])
  return (
    loader ? (
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <HashLoader color="#36d7b7" />      
        </div>
    ) : (
      <Routing />
    )
  )
}

export default App