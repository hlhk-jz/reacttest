import './App.css';
import React from 'react';
import User from './user/user'
import Student from "./user/student";
import Home from "./user/home";
import LoginControl from "./user/LoginControl";
import ListTest from "./user/ListTest";

class App extends React.Component{
    //(构造函数，初始化状态值)  1
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    //(render渲染之后执行的操作   3
    componentDidMount() {
        /*this.timerID = setInterval(
            () => this.tick(),
            1000
        );*/
    }
    //当组件从DOM树删除的时候调用该方法
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    // 4
    tick() {
        console.log("执行了")
        this.setState({
            date: new Date()
        });
    }


    //渲染组件  2   5
   render(){
       const nums = [2,3,4,5];
       return (
           <div className="App">
               {/*<Student/>*/}
               {/*<Home isTrue={true}/>*/}
              {/* <LoginControl />*/}
              {/* <ListTest terNum={3}/>*/}
           </div>
       );
   }
}
export default App;
