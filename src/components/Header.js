import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 3em;
  font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  color: whitesmoke;
`
const Wrapper = styled.section`
  padding: 1em;
  background-color: rgb(37, 37, 37);;
`

const Header = () => {
  return (
    <Wrapper>
      <Heading>CV CREATOR</Heading>
    </Wrapper>
  )
}

export default Header