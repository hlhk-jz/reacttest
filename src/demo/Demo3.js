import React from 'react';
import { useState,useEffect } from 'react'

/**Hooks钩子函数
 * useState 语法 const [count, setCount] = useState(0);
 * 参数1初始属性，参数2相当于setState,当调用参数2时就会执行类似
 * setState操作，后面的0是参数1的初始值
 *
 * useEffect 副作用钩子函数，需要异步操作都可以在里面执行，比如调用后端接口等
 * useEffect接受两个参数：一个是副作用函数，另一个是依赖数组。
 * 执行一次副作用操作：如果依赖数组为空，副作用函数只会在组件首次渲染时执行一次
 */
//计数器实现：类组件方式，和 函数式HOOK中的钩子函数useState方式
class Demo3  extends React.Component{
    constructor(props){
        super(props);
        this.state={num:0}
    }

    render() {
        return(
            <h1 onClick={this.show}>NUM：{this.state.num}</h1>
        )
    }

    show=()=>{
        this.setState({num:this.state.num+1})
    }
}

//函数组件通过HOOK钩子函数实现计数器
//用函数组件实现了一个功能完全一样的计数器，代码看起来更加的轻便简洁，没有
// 了继承，没有了渲染逻辑，没有了生命周期等。这就是hooks存在的意义。
// count：初始的状态属性，指向状态当前值，类似this.state
// setCount：修改状态属性值的函数，用来更新状态，类似setState
// 0：状态的初始值，count
//const Count = () => {
function Count() {
    const [count, setCount] = useState(0); // 将0设置为count的初始值

    function addCount() {
        let newCount = count;
        setCount(newCount += 1);
    }
   /* const addCount = () => {
        let newCount = count;
        setCount(newCount += 1);
    }*/

    return (
        <div>
            <h1 onClick={addCount}>NUM：{count}</h1>
        </div>
    )
}

//可以用箭头函数，也可以用 function
const Loding=()=>{
    const [isTrue,setLoding] = useState(true)

    //一些异步操作都可以放在useEffect中处理
    useEffect(()=>{
        setTimeout(()=>{
            setLoding(false)
        },3000)
        console.log("useEffect执行了！！！")
    },[]);

    return(
        isTrue?<h1>登录</h1>:<h1>欢迎</h1>
    )
}

export default Loding;
