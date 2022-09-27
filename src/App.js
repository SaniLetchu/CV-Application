import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import styled from "styled-components"

const App = () => {
  const Body = styled.div`
    margin: 0;
    display: flex;
    height: 100vh;
    flex-direction: column;
  `
  return (
    <Body>
      <Header />
      <Main />
      <Footer />
    </Body>
  )
}

export default App