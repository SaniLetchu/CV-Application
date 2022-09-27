import styled from 'styled-components';
import { useState, useRef } from 'react';
import Form from './Form';
import CV from './CV';
import { useReactToPrint } from 'react-to-print'
import MyImage from '../Images/avatar.jpg';

const emptyPersonal = {
  firstname: "",
  lastname: "",
  title: "",
  address: "",
  phone: "",
  email: "",
  description: ""
}

const emptyExperience = {
  position: "",
  company: "",
  city: "",
  from: "",
  to: ""
}

const emptyEducation = {
  university: "",
  city: "",
  degree: "",
  subject: "",
  from: "",
  to: ""
}

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`

const Main = () => {
  const [personal, setPersonal] = useState(emptyPersonal)
  const [experiences, setExperiences] = useState([emptyExperience])
  const [educations, setEducations] = useState([emptyEducation])
  const [photo, setPhoto] = useState(MyImage)

  const componentRef = useRef()
  const handlePrint = useReactToPrint({ content: () => componentRef.current })

  return (
    <Wrapper>
      <Form experiences={experiences} setExperiences={setExperiences} educations={educations} setEducations={setEducations} personal={personal} setPersonal={setPersonal} emptyEducation={emptyEducation} emptyExperience={emptyExperience} photo={photo} setPhoto={setPhoto} handlePrint={handlePrint}/>
      <CV experiences={experiences} setExperiences={setExperiences} educations={educations} setEducations={setEducations} personal={personal} setPersonal={setPersonal} emptyEducation={emptyEducation} emptyExperience={emptyExperience} photo={photo} setPhoto={setPhoto} ref={componentRef}/>
    </Wrapper>
  )
}

export default Main