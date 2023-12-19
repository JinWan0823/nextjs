export default function Layout(props){
  return (
    <form>
      <h2>Create</h2>
      {props.children}
      <input type="text" />
    </form>
  ) 
}