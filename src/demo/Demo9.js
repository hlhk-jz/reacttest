import React, { useCallback, useState, useEffect } from 'react';
//https://blog.csdn.net/m0_46612221/article/details/123384046
function Demo9() {
    const [query, setQuery] = useState(1);
    const [queryOther, setQueryOther] = useState(1);
    /**
     * 点击 +1 按钮时，因为setQuery使得父组件重新渲染，query 即使没有发生变化，Child fecthData也会执行
     *
     * 使用 useCallback useCallBack 的本质工作不是在依赖不变的情况下阻止函数创建，
     * 而是在依赖不变的情况下不返回新的函数地址而返回旧的函数地址。点击other+1 没使得
     * query 发生变化，所以不会返回 fecthData 新的地址，而在子组件中又通过 useEffect 对
     * fecthData 监听，没创建就不会执行，所以子组件不会发起请求
     * 虽然子组件不会执行 fecthData 方法了，但是子组件还是会随着父组件刷新，这里使用了 useCallBack
     * 后每次执行到这里内部比对是否变化，还有存一下之前的函数，消耗更大了，所以并不会优化性能。解决
     * 办法是配合子组件使用 React.memo 来解决
     *
     * React.memo 此方法内会对 props 做一个浅层比较，如果如果 props 没
     * 有发生改变（useCallback的存在使得props没变化地址也没有变化），
     * 则不会重新渲染此组件。但是如果只单独使用 React.memo 父组件重新构建的时候，
     * 会重新构建父组件中的所有函数，,新的函数地址传入到子组件中被props检测到栈地址更新。
     * 也就引发了子组件的重新渲染。
     *
     * useCallback使用总结：
     * 可以使用useCallback可以监听到相应状态变化，使得父/子组件做出响应。
     * 但是滥用useCallback会影响性能，需搭配React.memo进行使用，否则适得其反。
     */
    const fecthData = useCallback(() => {
        console.log('新的fetch');
        return query;
    }, [query])
   /* const fecthData = () => {
        console.log('新的fetch');
        return query;
    }*/

    const add = () => {
        console.log('点击add');
        setQuery(query + 1);
    }
    const addOther = () => {
        console.log('点击addOther');
        setQueryOther(queryOther + 1);
    }
    return (
        <>
            <Child fecthData={fecthData} />
            <button onClick={add}>+1</button>
            <button onClick={addOther}>other+1</button>
            <div>{ query }</div>
        </>
    );
}

/*function Child( {fecthData} ) {
    console.log('子组件相关内容');
    useEffect(() => {
        const querN = fecthData();
        console.log('子组件调用该函数获取到相关内容', querN);
    }, [fecthData])
    return <div>
        123
    </div>
}*/
/**
 * 点击 other+1 时，父组件重新渲染，query 没发生变化，所以函数 fecthData 没有新创建，
 * React.memo 检测子组件 Child props(值 函数等没发生变化)，所以子组件也不会渲染
 */
const Child = React.memo(({ fecthData }) => {
    console.log('子组件相关内容');
    useEffect(() => {
        const querN = fecthData();
        console.log('子组件调用该函数获取到相关内容', querN);
    }, [fecthData])
    return <div>
        123
    </div>
})


export default Demo9;
