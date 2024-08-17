import {useState} from 'react';
import "./Newpost.css"
import somo from "/assets/Images/somo.webp"
function Newpost(props) {
    const [inputvalue,setInputValue]=useState("");
    function sendpost(){
        props.Addnewpost(inputvalue);
        setInputValue("");
    }
    function handleonchange(event){
        setInputValue(event.target.value);
    }
  return (
    <div class="new">
        <img src={somo}></img>
        <input placeholder='Add a comment' value={inputvalue} onChange={handleonchange}></input>
        <button onClick={sendpost}>send</button>
    </div>
  )
}

export default Newpost