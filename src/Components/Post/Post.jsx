import { useState } from 'react';
import "./post.css"
function Post(props) {
    const [count, setCount]=useState(props.like);
    function Plus(){
        const newvalue = count + 1;
        setCount(newvalue);
    }
    function Minus(){
      const newvalue = count -1;
      setCount(newvalue);
    }
    function Delete(event){
      props.deleteitem(event.target.getAttribute("uniqueid"))
    }
  return (
    <div className='post'>
      <div className='counter'>
        <button onClick={Plus}> +
        </button>
        <span>{count}</span>
        <button onClick={Minus}>-</button>
      </div>
      <div className='title'>
      <img  className="icon"src={props.usericon}></img>
      <span>{props.username}</span>
      <label>{props.time}</label>
      <button className='reply'>
      <img className='replyicon' src={props.replyicon}></img>
        Reply</button>
      <button
        uniqueid={props.uniqueid}
        className ="delete"
        onClick={Delete}>Delete
      </button>
      </div>
      <p>{props.content}</p></div>
      
  )
}

export default Post