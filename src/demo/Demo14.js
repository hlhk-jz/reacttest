import React from 'react';

/**
 * 父组件调用子组件的方法或者dom通过 ref
 * 1. 首先在父组件中创建一个 ref
 * 2. 需要将 ref 对象作为 ref属性值传递给子组件，这样就可以通过 current 方法
 * 获取到子组件的实例来调用子组件的方法
 */
export default class Demo14 extends React.Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }
    focus = () => {
        //调用子组件的childMethod 方法
        this.child.current.childMethod();
        //this.child.current.childRef 子组件的文本框ref，在通过子组件的.current.value 获取输入框的值
        console.log("输入框的值："+this.child.current.childRef.current.value)
    }
    render() {
        return (
            <div>
                <Child ref={this.child}/>
                <button onClick={this.focus}>点击执行</button>
            </div>
        )
    }
}

//通过 this.childRef.current.value 这样就可以获取文本框里的值了
class Child extends React.Component {
    constructor() {
        super();
        this.childRef = React.createRef();
    }
     childMethod = ()=>{
        console.log("子组件方法执行")
    }
    render() {
         return <div>
             <h1>子组件</h1>
             <input type='text' ref={this.childRef}/>
         </div>
    }
}





