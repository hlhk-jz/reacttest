import React,{useState} from 'react';

const MemoOne=(props)=>{
    console.log("执行了")
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const MemoTwe = ()=>{
    const [text, setText] = React.useState('Hello, world!');
    const setName = () => {
        console.log("执行了2222222222222")
        setText("wangwu")
    };
    return (
        <div>
            <button onClick={setName}>按钮</button>
            <MemoOne name={text}/>
        </div>
    )
}

export default MemoTwe;