import React, { useCallback, useState, useEffect } from 'react';

function Demo9() {
    const [query, setQuery] = useState(1);
    const [queryOther, setQueryOther] = useState(1);
    const fecthData = () => {
        console.log('新的fetch');
        return query;
    }
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

function Child( {fecthData} ) {
    console.log('子组件相关内容');
    useEffect(() => {
        const querN = fecthData();
        console.log('子组件调用该函数获取到相关内容', querN);
    }, [fecthData])
    return <div>
        123
    </div>
}

export default Demo9;
