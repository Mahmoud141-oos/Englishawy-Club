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
import Vocabulary2 from '../Components/Units/UnitTwo/Words/Vocabulary2'
import Grammar2 from '../Components/Units/UnitTwo/Grammar/Grammar2'
import Vocabulary3 from '../Components/Units/UnitThree/Words/Vocabulary3'
import Grammar3 from '../Components/Units/UnitThree/Grammar/Grammar3'
import Vocabulary4 from '../Components/Units/UnitFour/Words/Vocabulary4'
import Grammar4 from '../Components/Units/UnitFour/Grammar/Grammar4'
import Vocabulary5 from '../Components/Units/UnitFive/Words/Vocabulary5'
import Grammar5 from '../Components/Units/UnitFive/Grammar/Grammar5'


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
                <Route path="/UnitTwo/Vocabulary" element={<Vocabulary2 />} />
                <Route path="/UnitTwo/Grammar" element={<Grammar2 />} />

                <Route path="/UnitThree" element={<UniteThree />} />
                <Route path="/UnitThree/Vocabulary" element={<Vocabulary3 />} />
                <Route path="/UnitThree/Grammar" element={<Grammar3 />} />

                <Route path="/UnitFour" element={<UniteFour />} />
                <Route path="/UnitFour/Vocabulary" element={<Vocabulary4 />} />
                <Route path="/UnitFour/Grammar" element={<Grammar4 />} />

                <Route path="/UnitFive" element={<UniteFive />} />
                <Route path="/UnitFive/Vocabulary" element={<Vocabulary5 />} />
                <Route path="/UnitFive/Grammar" element={<Grammar5 />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Routing