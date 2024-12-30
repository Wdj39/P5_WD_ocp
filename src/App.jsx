import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './PAGES/home/home.jsx';
import Propos from './PAGES/propos/propos.jsx';
import Fiche from './PAGES/fiche/fiche.jsx';
import Error from './PAGES/error/error.jsx';
import Header from './COMPONENTS/header/header.jsx';
import Footer from './COMPONENTS/footer/footer.jsx';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propos" element={<Propos />} />
                <Route path="/fiche/:id" element={<Fiche />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
