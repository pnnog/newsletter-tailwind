import { useState } from "react"
import ArticleList from "./components/ArticleList"
import Form  from "./components/Form"
import { Header } from "./components/Header/Header"

const App = () =>{

  const [userData,setUserData] = useState(null)

  const hasUser = !!userData

  return (
    <>
      <Header userData = {userData} />
      {hasUser && <ArticleList/>}
      {!hasUser && <Form setUserData = {setUserData} />}
    </>
  )
  
}

export default App