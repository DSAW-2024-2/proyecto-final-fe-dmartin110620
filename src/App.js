// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login.tsx';
import Register from './components/Auth/Register.tsx';
import DriverHomePage from './components/Driver/DriverHomepage.tsx';
import PassengerHomePage from './components/Passenger/PassengerHomepage.tsx';
import './App.css';
import SearchWheels from './components/Passenger/SearchWheels.tsx';
import CreateWheels from './components/Driver/CreateWheels.tsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {}
                <Route path="/register" element={<Register />} /> {}
                <Route path="/driver" element={<DriverHomePage />} /> {}
                <Route path="/passenger" element={<PassengerHomePage />} /> {}
                <Route path="/search-wheels" element={<SearchWheels />} /> {}
                <Route path="/createwheels" element={<CreateWheels />} /> {}
            </Routes>
        </Router>
    );
};

export default App;
