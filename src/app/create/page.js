<<<<<<< HEAD
export default function Create() {
  return <>Create</>;
}
=======
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

      fetch("https://pretty-flannel-spirit.glitch.me/topics",options)
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
>>>>>>> 414a0736745d95aa177055979bd2324d53b72b78
