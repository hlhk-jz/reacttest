import React from 'react';

/**
 * 类组件中构造方法
 * 如果需要修改dom，需要绑定this方法，或者初始化 state时，才需要构造方法
 */
class Demo1 extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
        this.state={name:"王五"}
        this.show=this.show.bind(this)
    }

    render() {
        console.log(this.props)
        console.log(this.state.name)
        return(
            <h1 onClick={this.show}>测试:{this.state.name}</h1>
        )
    }
    show(){
        this.setState({name:"赵六"})
    }
}
export default Demo1;
