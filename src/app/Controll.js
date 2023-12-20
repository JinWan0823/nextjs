"use client";
import Link from "next/link";
import { useParams,useRouter } from "next/navigation";



export function Controll() {
  const params = useParams();
  const id = params.id;
  const router =useRouter();

  const options = {
    method:"DELETE"
  }

  const deleteDB = ()=>{
    fetch(`http://localhost:9999/topics/`+id, options)
      .then(res=>res.json())
      .then((result)=>{
        console.log(result);
        router.push("/")
        router.refresh();
      })
  }

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? 
      <>
        <li>
          <Link href={`/update/${id}`}>Update</Link>
        </li>
        <li>
          <input type="button" value={'delete'} onClick={()=>deleteDB()}/>
        </li>
      </> : null
      }
    </ul>
  );
}
