import styled from 'styled-components';
import { forwardRef } from 'react';

const Heading = styled.h1`
  font-size: 3em;
  font-family: Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(35, 35, 35);
  margin: 0.5em;
`

const SmallHeadingBlack = styled.h1`
  font-size: 1.2em;
  font-family: Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(35, 35, 35);
  margin-top: -0.5em;
  padding-left: 2em;
  padding-right: 2em;
`

const SmallHeadingWhite = styled.h1`
  font-size: 1.2em;
  font-family: Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  margin-bottom: 0.5em;
  padding: 1px;
  align-self: start;
  word-wrap: break-word;
`

const SmallHeadingBLack1 = styled.h1`
  font-size: 1.2em;
  font-family: Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(35, 35, 35);
  margin-bottom: 0.5em;
  align-self: start;
  padding-left: 2em;
  padding-right: 2em;
  word-wrap: break-word;
`

const TextWhite = styled.p`
  font-size: 0.9em;
  font-family: Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  padding: 1px;
  margin: 0.5em;
  word-wrap: break-word;
  align-self: start;
`
const Wrapper = styled.section`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  border: 0;
  display: flex;
  width: 21cm;
  min-width: 21cm;
  max-width: 21cm;
  min-height: 29.7cm;
  background-color: rgb(240, 240, 240);
  @page {
    margin: 0;
    padding: 0;
  }
`

const WrapperLeft = styled.section`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding-left: 1rem;
  padding-right 1rem;
  max-width: 33%;
  align-items: center;
  background-color: rgb(35, 35, 35);
`
const WrapperRight = styled.section`
  display: flex;
  width: 66%;
  padding-left: 1rem;
  padding-right 1rem;
  max-width: 66%;
  flex-direction: column;
  align-items: center;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`

const SmallDiv = styled.div`
  display: flex;
  width: auto;
  margin-left: 2.6em;
  margin-right: 2.6em;
  justify-content: left;
`

const Image = styled.img`
  margin-top: 2em;
  width:  200px;
  height: 200px;
  object-fit: cover;
  clip-path: circle();
`

const Th = styled.th`
  text-align: left;
  word-wrap: break-word;
`

const Td = styled.td`
  overflow: hidden;
  word-wrap: break-word;
  padding-bottom: 5px;
  padding-top: 5px;
`

const Tr = styled.tr`

`


const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  word-wrap: break-word;
`

const CV = ({experiences, setExperiences, educations, setEducations, personal, setPersonal, emptyExperience, emptyEducation, photo, setPhoto}, ref) => {
  return (
    <Wrapper ref={ref}>
      <WrapperLeft>
        <Image src={photo}></Image>
        <SmallHeadingWhite>Contact</SmallHeadingWhite>
        <TextWhite>{personal.address}</TextWhite>
        <TextWhite>{personal.phone}</TextWhite>
        <TextWhite>{personal.email}</TextWhite>
        <SmallHeadingWhite>About</SmallHeadingWhite>
        <TextWhite>{personal.description}</TextWhite>
      </WrapperLeft>
      <WrapperRight>
        <Heading>{personal.firstname} {personal.lastname}</Heading>
        <SmallHeadingBlack>{personal.title}</SmallHeadingBlack>
        <SmallHeadingBLack1>Experience</SmallHeadingBLack1>
        <Div>
          {experiences.map((experience, index) => {
            return <SmallDiv key={index}>
              <Table>
                <col style={{width: '20%'}}></col>
                <col style={{width: '20%'}}></col>
                <thead>
                  <Tr>
                    <Th>{experience.from}-{experience.to}</Th>
                    <Th>{experience.position}</Th>
                  </Tr>
                </thead>
                <tbody>
                  <Tr>
                    <Td></Td>
                    <Td>{experience.company}, {experience.city}</Td>
                  </Tr>
                </tbody>
              </Table>
            </SmallDiv>
          })}
        </Div>
        <SmallHeadingBLack1>Education</SmallHeadingBLack1>
        <Div>
          {educations.map((education, index) => {
            return <SmallDiv key={index}>
              <Table>
                <col style={{width: '20%'}}></col>
                <col style={{width: '20%'}}></col>
                <thead>
                  <Tr>
                    <Th>{education.from}-{education.to}</Th>
                    <Th>{education.university}, {education.city}</Th>
                  </Tr>
                </thead>
                <tbody>
                  <Tr>
                    <Td></Td>
                    <Td>Degree: {education.degree}</Td>
                  </Tr>
                </tbody>
                <tbody>
                  <Tr>
                    <Td></Td>
                    <Td>Subject {education.subject}</Td>
                  </Tr>
                </tbody>
              </Table>
            </SmallDiv>
          })}
        </Div>
      </WrapperRight>
    </Wrapper>
  )
}

export default forwardRef(CV)