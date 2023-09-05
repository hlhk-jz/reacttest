function Login() {
    return <div><h1>登录页面</h1></div>
}

function Page() {
    return <div><h1>首页</h1></div>
}
function Home(prop) {
    if(prop.isTrue){
        return <Page />
    }
  return <Login/>
}
export default Home;
