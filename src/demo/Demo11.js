import React from 'react';

/**
 *  直接使用字符串方式 ref 警告，其它解决办法
 *  构造方法中 React.createRef()，然后在dom标签上ref绑定
 *  createRef方法：React.createRef方法可以创建ref并且给组件实例使用，这个方法会创建一个容器，
 *  该容器存放的是可以被ref所标识的节点，这个容器是专用的。
 */
class Demo11 extends React.Component{
    constructor(){
        super()
        this.imps = React.createRef();
    }
    show=()=>{
        //this.imps.current.value 这样就可以获取文本框里的值了
        console.log("==========="+this.imps.current.value)
    }

    render() {
        return(
            <div>
                <input ref={this.imps}  type="text" />
                <button onClick={this.show}>按钮</button>
            </div>
        )
    }
}
export default Demo11;
