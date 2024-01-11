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
import Demo111 from './demo/Demo1'
import Greet from './demo/Demo2'
import Demo3 from './demo/Demo3'
import Demo8 from './demo/Demo8'
import Demo9 from './demo/Demo9'
import Hook from './demo/Demo10'
import Demo11 from './demo/Demo11'
import Demo12 from './demo/Demo12'
import Demo13 from './demo/Demo13'
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

    //方法也可以通过props传递给子类，事件进行调用该方法
    show(){
        console.log("======================")
    }

    render(){
        return <Demo13/>
        //return <Demo12/>
        //return <Demo11/>
        //return <Hook/>
        //return <Demo9/>
        //return <Demo8/>
        //return <Demo3/>
        // return <Demo1 name={"标题1"}/>
        // return <Demo2 name="ad" age="22"/>
        //return <Demo4 />
        //return <Demo5 name='张三' age='22' sex='男' show={this.show}/>
        //return <Demo6 list= {list}/>
        //return <Demo7 age={22} list={[1,2,3]} isTrue={true}/>
        //return <Demo1 name={'张三'}/>
        //return <Demo111/>
        //return <Greet name={'王五'}/>
    }

}
export default App;
