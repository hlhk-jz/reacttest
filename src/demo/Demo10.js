import { useMemo, useState,useEffect } from 'react'

const Hook = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)

    //useEffect 渲染之后执行，useMemo 在渲染之前执行
   /* useEffect(()=>{
        console.log("useEffect执行了！！！"+count)
    },[count]);*/
    /**
     * useMemo  为了性能优化存在的一个hook，把创建的函数和依赖项数组作为参数,
     * 它仅仅会在依赖项发生改变的时候，重新计算第一个参数的值，依赖不变时返回的值相同
     * useMemo 和 useCallback区别是，useCallback缓存返回旧的函数，useMemo返回值
     */
    const total = useMemo(()=>{
        console.log("useMemo 执行了！！！"+count)
        console.log('重新渲染'+count)
        let total = 0
        for (let i = 0; i <= count; i++) {total += i }
        return total
    },[count])

  /*  const total = CaclNum(count)
    function CaclNum() {
        console.log('重新渲染'+count)
        let total = 0
        for (let i = 0; i <= count; i++) {total += i }
        return total
    }
*/
    return (
        <>
            <p>计算数字之和{total}</p>
            <button onClick={(e) => setCount(count + 1)}>点击+1</button>
            <button onClick={(e) => setShow(!show)}>切换</button>
        </>
    )
}
export default Hook
