'use client';

import { useRouter } from "next/navigation";

export default function Create(){
  const router = useRouter();
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;

      const options = {
        method : "POST",
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify({title,body})
      }

      fetch(process.env.NEXT_PUBLIC_API_URL+"topics",options)
        .then(res => res.json())
        .then(result =>{
          console.log(result);
          const lastId = result.id;
          router.push(`/read/${lastId}`);
          router.refresh();
        })

    }}>
      <p>
        <input type="text" placeholder="title" name="title" />
      </p>
      <p>
        <textarea placeholder="body" name="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  )
}