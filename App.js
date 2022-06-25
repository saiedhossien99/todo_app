
import './App.css';
import Todos from'./pages/todo'
import MyForm from './pages/addtodo'
import React,{useState,useEffect} from 'react';


function App() {
  let initodo;
  if(localStorage.getItem("list")==null)
  {
    initodo=[];
  }
  else
  {
    initodo=JSON.parse(localStorage.getItem("list"));
  }
  const [list,setlist]=useState(initodo);
  useEffect(()=>{
    initodo=localStorage.setItem('list',JSON.stringify(list));
    
  },[list]);

function remove(props)
{
  setlist(list.filter((e)=>{
    return e!=props;
  }));
  initodo=localStorage.setItem('list',JSON.stringify(list));
}

function addtodo(todo,disc)
{
  let sno;
  
  if(list.length===0)
  {
    sno=0;
  }
   else 
    {
     sno=list[list.length-1].sno+1;
    }
    const _mytodo={
      sno:sno,
      name:todo,
      disc:disc

    }
    console.log(_mytodo);
    setlist([...list,_mytodo]);
  
}


  return (
    <div className="App">
     <MyForm addtodo={addtodo}/>
     <Todos list={list}remove={remove}/>
    
    </div>
  );
}

export default App;
