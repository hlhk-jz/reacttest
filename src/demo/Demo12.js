import React, { Component } from 'react'
import Proptypes from 'prop-types'

/**
 *  当一个组件创建了上下文后，其后代组件(子组件、孙子组件、曾孙组件…)都可以使用该上下文中的数据
 */
export default class Demo12 extends Component {

    // 1 给类组件创建静态属性childContextTypes，使用该属性对上下文中的数据进行约束
    static childContextTypes = {
        num1: Proptypes.number,
        num2: Proptypes.number,
    }

    // 2.给类组件创建方法getChildContext，该方法需要返回的是一个对象，对象和childContextTypes的数据需要一一对应
    getChildContext() {
        return {
            num1: 1,
            num2: 2,
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
        num2:Proptypes.number
    }
    constructor(props,context) {
        super(props,context)   //将context交给父类处理
        console.log("========="+this.context.num2)
    }
    render() {
        return <div>
            <h2>A组件{this.context.num1}</h2>
            <h1>A</h1>
            <B />
        </div>
    }
}
//孙组件使用context 上下文中数据
class B extends React.Component {
    //3. 当子组件想要获取Context组件的上下文的时候，子组件同样需要对接收的上下文进行约束
    static contextTypes = {
        num1:Proptypes.number
    }

/*    constructor(props, context) {
        //如果没有在super里写context，在构造方法里使用this会报错
        super(props,context)
        console.log(this.context.num1)
    }*/

    //4. 使用通过 this.context.xx直接获取到上下文中数据
    render() {
        return <div>
            <h1>B+{this.context.num1}</h1>
            <C/>
        </div>
    }
}

//函数里上下文获取，由于函数里没有this，所以只能通过第二个参数获取，获取之前仍然需要对数据进行约束，不然打印的是空对象。
function C(props, context) {
    console.log(context)
    return <div>
        <h1>C</h1>
    </div>
}
//函数组件也需要约束接收的上下文数据
C.contextTypes = {
    num1: Proptypes.number,
    num2: Proptypes.number,
}
