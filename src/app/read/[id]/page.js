// 사용자와 상호작용 x -> Server Component

export default async function Read(props){
  const res = await fetch(`https://pretty-flannel-spirit.glitch.me/topics/${props.params.id}`,{cache:'no-store'});
  const topic = await res.json();
  console.log(topic)
  return (
    <>
      <h2>{topic.title}</h2>
      props :   {topic.body}
    </>
  )
}