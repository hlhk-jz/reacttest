import React from 'react';
class Demo1 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>测试：{this.props.name}</h1>
            </div>
        )
    }
}

function Demo2(props) {
    return (
        <div>
            <h1>测试：{props.name}</h1>
            <h1>测试：{props.age}</h1>
        </div>
    )
}

export default Demo2;
