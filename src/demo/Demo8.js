import React from 'react';
import { useState,useEffect ,useLayoutEffect} from 'react'

/**
 * useLayoutEffect的优先级useEffct高，即使先写useEffect，
 * 后面再写useLayoutEffect，实际执行时他是先执行useLayoutEffect，
 * 可以将useLayoutEffect理解成一个补丁，比如在setCount时无法渲染就可以使用他，
 * 一般项目基本都用不到，而且useEffect的性能也比useLayoutEffect好。
 *
 *
 */
const Demo8=()=>{

    const [count,setCount] = useState(0);
    //一些异步操作都可以放在useEffect中处理，如果参数2数组中监听某个对象/属性，当变化时该方法还会执行
    useEffect(()=>{
        console.log("useEffect执行了！！！"+count)
    },[count]);

    //如果不加 [] 那么每次重新加载组件时都会执行该方法，如果加了只会执行一次
    useEffect(()=>{
        console.log("useEffect执行了~~~~~~"+count)
    },[]);

    //每次重新加载组件都会执行
    useEffect(()=>{
        console.log("useEffect执行了@@@@@@@@"+count)
    });

    //比useEffect先执行
    useLayoutEffect(()=>{
        console.log("useLayoutEffect执行了*****************"+count)
    });

    function addCount() {
        let newCount = count;
        setCount(newCount += 1);
    }

    return(
        <button onClick={addCount}>测试:{count}</button>
    )
}



export default Demo8;
