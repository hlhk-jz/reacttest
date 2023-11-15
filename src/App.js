import './App.css';
import React from 'react';
import Home from "./router/Home";
import About from "./router/About"
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Demo2 from './user/Ceshi'
import Demo4 from './demo/Demo4'
import Demo5 from './demo/Demo5'
import Demo6 from './demo/Demo6'
import Demo7 from './demo/Demo7'
import Demo1 from './demo/Demo1'
/* 路由 BrowserRouter 和 HashRouter 都可以实现路由功能
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
}*/
var list = [{name:'王五'},{name:'张三'}]
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render(){
        // return <Demo1 name={"标题1"}/>
        // return <Demo2 name="ad" age="22"/>
        //return <Demo4 />
        //return <Demo5 name='张三' age='22' sex='男'/>
        //return <Demo6 list= {list}/>
        //return <Demo7 age={22} list={[1,2,3]} isTrue={true}/>
        return <Demo1 name={'张三'}/>
    }
}
export default App;
