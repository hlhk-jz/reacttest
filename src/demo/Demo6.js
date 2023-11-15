//遍历父组件传递来的数据list
function Demo6(a) {
    const elements=[];
    a.list.forEach((item)=> {
        elements.push(
            <div>
                {item.name}&nbsp;
                <a>{item.name}a</a>
                <hr/>
            </div>
        )
    });

    const {name} = a.list[1];
    return (
        <div>{elements}
        <div>
            <ul>
                <li>姓名:{name}</li>
            </ul>
        </div>
        </div>
    )
}
export default Demo6;
