onmessage=(e)=>{
    let tableDatas=e.data.tableInfos[0].tableDatas;
    setInterval(() => {
        test(tableDatas);
    }, 0);
}
function test(tableDatas) {
    let count=0;
    tableDatas.forEach((item,index)=>{
        count += Array.from(Object.keys(item.columns)).length;
    })
    postMessage(count);
}