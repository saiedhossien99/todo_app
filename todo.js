
import '../App'
import './todo.css'

function Todo(props){

   
 
 
 function show(list)
 {
     if(list.length ===0)
     {
         return(<h1>their is nothing to do</h1>);
     }
     else{
   return list.map((item,i)=>{
        return(<div className="component" key={props.sno} >
            <h1>{item.sno+1}. {item.name}</h1>
            <h3>{item.disc}</h3>
            <button id="btn" onClick={()=>props.remove(item)} >remove</button>
        </div>);
    });
}
 }

return(
    <>
      <h1 id='title'>to do list</h1>
     {show(props.list)}
        
    </>
);

}
export default Todo;