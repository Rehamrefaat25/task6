import React from 'react'
import amy from '/assets/Images/amy.png'
import max from '/assets/Images/max.png'
import reply from '/assets/Images/reply.svg'
import somo from '/assets/Images/somo.webp'
import Post from '../Post/Post'
import Newpost from '../Newpost/Newpost'
import './Comment.css'
import { useState } from 'react'
function Comment(props) {
    const [Arrayofobject, setArrayOfObjects]=useState([
        {
          like:12,
         id:1,
         usericon: amy,
         username:"amyrobson" ,
         time:"1 month ago" ,
         replyicon:reply,
         content:"impressive! though it seems the drug feature could be improver.But it looks incredible. You have nailed the design and the responsiveness at various breakpoins work really well."},
         { 
          like:5,
          id:2,
          usericon: max ,
          username:"maxblagun" ,
          time:"2 weeks ago" ,
          replyicon:reply,
          content:"waoh,your project looks awesome! How long have you been coding for? i an still new,but think i want to in to react as well soon.Perhaps you can give me an insight on where i can learn react? Thank you"},
      ]);
      function Addnewpost(postcontent){
let newobject={
    like:0,
    id:Arrayofobject.length+1 ,
    usericon: somo ,
    username:"juliusomo" ,
    time:"2day ago",
    replyicon:reply,
    content: postcontent,
} 
let newArrayofobject=[...Arrayofobject,newobject] ; 
 setArrayOfObjects(newArrayofobject);   }
 function deleteitem(postid){
    const arrayafterdelete = Arrayofobject.filter((Post)=>{
        return Post.id !=postid;
    });
    setArrayOfObjects(arrayafterdelete)
 }
  return (
    <>
    <div className='comment'
    >
        {Arrayofobject.map((post)=>{
            return(
                <Post key={post.id} 
                like={post.like}
                uniqueid={post.id}
                usericon={post.usericon}
                username={post.username}
                time={post.time}
                replyicon={post.replyicon}
                content={post.content}
                deleteitem={deleteitem}
                ></Post>
            )
        })
        }
    </div>
    <div>
        <Newpost Addnewpost={Addnewpost}></Newpost>
    </div>
    </>
  )
}

export default Comment