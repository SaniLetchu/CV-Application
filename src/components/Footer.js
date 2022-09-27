import styled from 'styled-components';

const Text = styled.p`
  font-size: 0.8em;
  font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  color: whitesmoke;
`
const Wrapper = styled.section`
  padding: 0.5em;
  margin-top: auto;
  background-color: rgb(37, 37, 37);;
`

const Footer = () => {
  return (
    <Wrapper>
      <Text>Copyright © The Odin Project 2022, Sani Letchu</Text>
    </Wrapper>
  )
}

export default Footer