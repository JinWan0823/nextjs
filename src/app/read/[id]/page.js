// 사용자와 상호작용 x -> Server Component

export default async function Read(props){
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`,{cache:'no-store'});
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      props :   {topic.body}
    </>
  )
}