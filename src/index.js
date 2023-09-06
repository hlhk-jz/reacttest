import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// <App>的最外侧包襄了一个<BrowserRouter>或<HashRouter>
/*
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
        document.getElementById('root')
)
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);



