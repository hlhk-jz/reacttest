function usr() {
      return (
          <div style={headerStyle}>
              <h1>用户</h1>
          </div>
      )
          ;
}
var headerStyle={
    height:"50px",
    width:"50px",
    backgroundColor:"red",
    color:"green"
}

usr.defaultProps = {
    name: 'hahahahah'
}
export default usr;
