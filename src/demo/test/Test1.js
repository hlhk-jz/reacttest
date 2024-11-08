import React from 'react';
class Test1 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
        //show1不是箭头函数，所以需要绑定this，箭头函数不需要
        this.show1 = this.show1.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        console.log("111111111111111111")
        return state;
    }

    componentDidMount() {
        console.log("22222222222222222")
    }

    show=()=>{
        this.setState(
            {
               count:this.state.count + 1
            }
        )
    }

    show1(){
        this.setState({
            count: 555
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                {/*<button onClick={this.show}>点击</button>*/}
                <button onClick={this.show1}>点击</button>
            </div>
        )
    }
}
export default Test1;