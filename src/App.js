import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {useState, useEffect} from 'react';
import Navbar from './components/Navbar.js';
import PlaceOne from './Pages/PlaceOne.js';
import PlaceTwo from './Pages/PlaceTwo.js';
import PlaceThree from './Pages/PlaceThree.js';
import PlaceFour from './Pages/PlaceFour.js';
import PlaceFive from './Pages/PlaceFive.js';
import PlaceSix from './Pages/PlaceSix.js';
import PlaceSeven from './Pages/PlaceSeven.js';
import PlaceEight from './Pages/PlaceEight.js';
import PlaceNine from './Pages/PlaceNine.js';
import Home from './Pages/Home.js';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/placeholder-link-1' element={<PlaceOne/>}/>
                <Route path='/placeholder-link-2' element={<PlaceTwo/>}/>
                <Route path='/placeholder-link-3' element={<PlaceThree/>}/>
                <Route path='/placeholder-link-4' element={<PlaceFour/>}/>
                <Route path='/placeholder-link-5' element={<PlaceFive/>}/>
                <Route path='/placeholder-link-6' element={<PlaceSix/>}/>
                <Route path='/placeholder-link-7' element={<PlaceSeven/>}/>
                <Route path='/placeholder-link-8' element={<PlaceEight/>}/>
                <Route path='/placeholder-link-9' element={<PlaceNine/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
