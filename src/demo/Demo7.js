import React from 'react';
import propTypes from 'prop-types';
//prop-types 校验插件
class Demo7 extends React.Component{
  render() {
      //使用 for 循环遍历list
      const tlist = [];
      for (let i =0; i < this.props.list.length; i++) {
          tlist.push(<h2 key={i}>{this.props.list[i]}</h2>)
      }
      return <div>{tlist}</div>

      //可以使用 map 方式遍历list
    /*  return(
         <div>
             {
                 this.props.list.map(
                     (item, index) => <p key={index}>{item}</p>
                 )
             }
         </div>
      )*/
  }
}

Demo7.propTypes = {
    //判断list参数是否是 list
    list: propTypes.array,
    //判断 istrue 参数是否是布尔
    isTrue: propTypes.bool
}

export default Demo7;
