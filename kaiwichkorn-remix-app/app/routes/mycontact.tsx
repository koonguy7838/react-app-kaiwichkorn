import ToDoLists from "./toDoLists"; 
function Myprofile (){
  const name = "ไกรวิชกร เกตุบุบผา";
  const profile = "/imges/Sonic1.jpg";
  const info = "นักศึกษาสาขาวิชาเทคดนโลยีสารสนเทศคณะบริหารธุระกิจเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคดนดลยีราชมงคลตะวันออกวิทยาเขตจักรพงษภุวนารถ";
  
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={profile} title={name} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">
      {name}</div>
    <p className="text-gray-700 text-base">{info}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">เขียนโปรเเกรม</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">พักเที่ยง</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">กลับบ้าน</span>
  </div>
</div>
    
    );
}
export default function Mycontact () {
    return (
    
      <>
            <h1>Mycontact</h1>
            
            <hr />
            
            <Myprofile/>
            <ToDoLists/>
            

    </>
    );
}