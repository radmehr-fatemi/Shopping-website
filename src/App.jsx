import React, { Component } from 'react';
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from './component/Header';
import Footer from './component/Footer';
import Landing from './component/Landing';
import Products from './component/Products';
import AbouteUs from './component/AboutUs';
import NotFound from './component/NotFound';
import DetailsPage from './component/DetailsPage';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<DetailsPage />} />
                    <Route path="/aboutus/*" element={<AbouteUs />}>
                        <Route path="programmer" element={<h1>Programmer</h1>} />
                        <Route path="drivers" element={<h1>Drivers</h1>} />
                    </Route>
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path="/*" element={<Navigate to="/notfound" />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default App;