import React, { Component } from 'react'
import Proptypes from 'prop-types'

/**
 *  当一个组件创建了上下文后，其后代组件(子组件、孙子组件、曾孙组件…)都可以使用该上下文中的数据
 *
 *  子组件改变 context 中数据，通过
 */
export default class Demo13 extends Component {
    state={
        num1:1
    }

    // 1 给类组件创建静态属性childContextTypes，使用该属性对上下文中的数据进行约束
    static childContextTypes = {
        num1: Proptypes.number,
        num2: Proptypes.number,
        //PropTypes.func 必须是函数约束
        onChange:Proptypes.func,
    }

    // 2.给类组件创建方法getChildContext，该方法需要返回的是一个对象，对象和childContextTypes的数据需要一一对应
    // 获取上下文中的数据
    getChildContext() {
        return {
            num1: this.state.num1,
            num2: 2,
            onChange:()=>{
                this.setState({
                    num1:this.state.num1 + 1
                })
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Context</h1>
                <A />
            </div>
        )
    }
}

class A extends React.Component {
    static contextTypes = {
        num1:Proptypes.number,
        num2:Proptypes.number,
        onChange:Proptypes.func,
    }

    render() {
        return <div>
            <h2>A组件{this.context.num1}</h2>
            <button onClick={this.context.onChange}>+1</button>
        </div>
    }
}
