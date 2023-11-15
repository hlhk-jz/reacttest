import React from 'react';
//function函数方法和箭头方式方法使用
class Demo4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {isTrue:false,msg:'hellow'};
        //箭头函数方式不需要绑定this
        //this.updateCount = this.updateCount.bind(this);
    }
    render(){
        return (
            <button onClick={this.updateCount}>今天天气很{this.state.isTrue?'凉爽':'炎热'}</button>
        )
    }
    //setState方法中，参数1是个对象，2是回调。回调中可以获取修改后的值，因为是异步的如果在回调方法外获取值没有变化
    updateCount = () => {
       this.setState({isTrue:!this.state.isTrue,msg:'testmsg'},()=>{
           console.log("=========="+this.state.msg)
       })
        console.log(this.state.msg)
    }
}
export default Demo4;
