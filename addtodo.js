import   { useState } from "react";


function MyForm(props) {
  const[Todo,setTodo]=useState('');
  const[Disc,setDisc]=useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!Todo || !Disc)
    {
        alert('todo or discription cann\'t be null');
    }
    else {
        props.addtodo(Todo,Disc);
        setTodo('');
        setDisc('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Todo:
      <input 
        type="text" 
        name="username" 
        value={Todo} 
        onChange={(e)=>{setTodo(e.target.value)}}
      />
      </label>
      <label>write discription:
        <input 
          type="text" 
          name="age" 
          value={Disc} 
          onChange={(e)=>{setDisc(e.target.value)}}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
export default MyForm;