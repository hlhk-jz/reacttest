import React from 'react';
import usr from "./user";

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        //使用bind来修改this的指向
        this.handleChange = this.handleChange.bind(this);
    }

/*    箭头函数方式
      handleChange=(event)=> {
        const target = event.target;
        const value = target.value;
        this.setState({
            value:value
        });
    }*/

    handleChange(event) {
         const target = event.target;
         const value = target.value;
            this.setState({
                value:value
            });
    }

    render() {
        return (
        <div>
            <label>
                 测试1:
                <input type="text"  value={this.state.value} onChange={this.handleChange}/>
            </label> <br/>

            <label> 测试2:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label><br />
        </div>
        );
  }}

export default Student;
