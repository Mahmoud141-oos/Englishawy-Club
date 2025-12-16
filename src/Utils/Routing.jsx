import React from 'react'
import UnitOne from '../Pages/Unites/UnitOne'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import UniteTwo from '../Pages/Unites/UnitTwo'
import UniteThree from '../Pages/Unites/UnitThree'
import UniteFour from '../Pages/Unites/UnitFour'
import UniteFive from '../Pages/Unites/UnitFive'
import Vocabulary from '../Components/Units/UnitOne/Words/Vocabulary'
import Grammar from '../Components/Units/UnitOne/Grammar/Grammar'

function Routing() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/UnitOne" element={<UnitOne />} />
                <Route path="/UnitOne/Vocabulary" element={<Vocabulary />} />
                <Route path="/UnitOne/Grammar" element={<Grammar />} />
                <Route path="/UnitTwo" element={<UniteTwo />} />
                <Route path="/UnitThree" element={<UniteThree />} />
                <Route path="/UnitFour" element={<UniteFour />} />
                <Route path="/UnitFive" element={<UniteFive />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Routing