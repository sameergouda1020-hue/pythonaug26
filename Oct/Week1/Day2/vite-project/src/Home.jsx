function Home(props) {
  return (
    <div>
      This is Home page
      <br />

      Value : {props.v}
      <br />

      String : {props.str}
      <br />

      Array value : {props.arr}
      <br />

      Object Value : {JSON.stringify(props.obj)}
      <br />

      Object Name : {props.obj.name}
    </div>
  )
}

export default Home