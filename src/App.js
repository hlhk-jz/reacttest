import './App.css';
import React from 'react';
import Home from "./router/Home";
import About from "./router/About"
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    路由主页&nbsp;
                    <Link to="/first1">页面一</Link>&nbsp;
                    <Link to="/test">页面二</Link>
                    <Routes>
                        <Route path="/first1" element={<Home/>}/>
                        <Route path="/test" element={<About/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
