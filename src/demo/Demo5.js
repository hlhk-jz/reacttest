import React from 'react';
//类组件 props 使用
class Demo5 extends React.Component {
    render(){
        return (
             <ul>
               <li>姓名：{this.props.name}</li>
               <li>性别：{this.props.sex}</li>
               <li>年龄：{this.props.age+1}</li>
             </ul>
        )
    }
}

export default Demo5;
