const todos = [
    {
        id:100,
        title:"สอนวิชาการเขรยนดปรเเกรมเว็บ กลุ่ม 1",
        checked:true
    },
    {
        id:200,
        title:"สอนวิชาการเขียนดปรเเกรมเว็บ กลุ่ม 2",
        checked:false
    },
    {
        id:300,
        title:"สอนวิชาเเพลตฟอรืม กลุ่ม 1",
        checked:false
    }
];
function Item ({title,chk} : {title: string,chk : boolean}){
    if(chk)
    return <li className='item'>{title} ✔️</li>; 
    else(title)
    return <li className='item'>{title} </li>; 

}

export default function ToDoLists () {
    const items = todos.map(item =>
        <Item title={item.title} chk={item.checked}/>
    );
    return(
    <>
    <h1>My to do lists:</h1>
    <ul>{items}</ul>
    </>
    )
}