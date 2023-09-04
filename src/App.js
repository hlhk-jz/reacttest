import './App.css';
import React from 'react';
class App extends React.Component{
    //(构造函数，初始化状态值)
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    //(render渲染之后执行的操作
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    //当组件从DOM树删除的时候调用该方法
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        console.log("执行了")
        this.setState({
            date: new Date()
        });
    }
    //渲染组件
   render(){
       return (
           <div className="App">
               <h1>hello</h1>
               <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
           </div>
       );
   }
}
export default App;
