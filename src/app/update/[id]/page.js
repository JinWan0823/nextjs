'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update(){
  const router = useRouter();
  const params = useParams();
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  useEffect(()=>{
    fetch(`https://pretty-flannel-spirit.glitch.me/topics/${params.id}`)
      .then(res => res.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      })
  },[])
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;

      const options = {
        method : "PATCH",
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify({title,body})
      }

      fetch("https://pretty-flannel-spirit.glitch.me/topics/"+params.id,options)
        .then(res => res.json())
        .then(result =>{
          console.log(result);
          const lastId = result.id;
          router.push(`/read/${lastId}`);
          router.refresh();
        })

    }}>
      <p>
        <input type="text" placeholder="title" name="title" value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
      </p>
      <p>
        <textarea placeholder="body" name="body" value={body} onChange={(e)=>{
          setBody(e.target.value);
        }} />
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  )
}