import React from 'react';
import { useState } from 'react'
//函数组件  useState 等价于类组件中 state
function Show1() {
    const [text,setText] = useState('hellow ')

    function updateText(evn) {
        setText(evn.target.value)
    }

    return (
        <div>
            <h1>{text}</h1>
            <input type='text' onChange={updateText}/>
        </div>
    )
}
export default Show1;