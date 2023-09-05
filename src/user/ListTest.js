import React from 'react';
/*
function ListTest() {
    const list1 = [1,2,3,4,5];
    const list2 = list1.map((a)=>
     <li key={a.toString()}>{a}</li>
    )
    return list2;
}
*/

/*function ListTest(prop) {
    const list = prop.nums;
    return list.map((s)=>
        <li key={s.toString()}>{s}</li>
    )
}*/


/*function ListTest(prop) {
    const list = prop.nums;
    return list.map((s,w)=>
        <li key={w}>{s}</li>
    )
}*/

/*class ListTest extends React.Component {
    constructor(props){
        super(props)
        this.state={num:0}
        this.show = this.show.bind(this)
    }

    /!*show(){
        this.setState({num:this.state.num+1})
    }*!/
    show(){
        //函数中参数1是当前state，参数2是父组件传递过来的 props 数据
        this.setState((state,props) => {
            console.log(state )
            return {num: props.terNum}
        });
    }

    render(){
       return (
           <div>
               <button onClick={this.show}>按钮</button>  <br/>
               <h1>{this.state.num}</h1>
           </div>
       )
    }
}*/

export default ListTest;
