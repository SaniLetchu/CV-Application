import { Fragment } from 'react';
import { useState } from 'react';
import Steve from '../Images/steve.png'
import styled from 'styled-components';

const examplePersonal = {
  firstname: "Steve",
  lastname: "Jobs",
  title: "Software developer",
  address: "Road 12 A",
  phone: "123456789",
  email: "steve.jobs@gmail.com",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const exampleExperience = {
  position: "CEO",
  company: "Apple",
  city: "California",
  from: "1971",
  to: "2011"
}

const exampleEducation = {
  university: "University of Wisconsin",
  city: "Wisconsin",
  degree: "PhD",
  subject: "Computer Science",
  from: "1951",
  to: "1959"
}

const examplePhoto = Steve

const Heading = styled.h1`
  font-size: 1.2em;
  font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(37, 37, 37);
  margin: 0;
`
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1em;
  padding 0.3rem;
  border-radius: 5px;
  resize: none;
  font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(37, 37, 37);

  &:focus {
    outline: 1px solid black;
  }
`
const PhotoLabel = styled.label`
  border: none;
  outline: none;
  font-size: 1em;
  padding 0.3rem;
  background-color: white;
  border-radius: 5px;
  resize: none;
  font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(130, 130, 130);
`

const PhotoInput = styled.input`
  display: none;
  border: none;
  outline: none;
  font-size: 1em;
  padding 0.3rem;
  border-radius: 5px;
  resize: none;
  font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(37, 37, 37);
`
const DescriptionInput = styled.textarea`
  border: none;
  outline: none;
  font-size: 1em;
  resize: vertical;
  padding 0.3rem;
  border-radius: 5px;
  font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(37, 37, 37);
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: rgb(240, 240, 240);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Button = styled.button`
  padding: 1rem;
  font-size: 1em;
  color: whitesmoke;
  border-radius: 5px;
  font-weight: bold;
  background-color: rgb(37, 37, 37);
  &:hover {
    background-color: black;
  }
`

const Form = ({experiences, setExperiences, educations, setEducations, personal, setPersonal, emptyExperience, emptyEducation, photo, setPhoto, handlePrint}) => {

  const [photoplaceholder, setPhotoplaceholder] = useState("Photo")
  const handleChangePersonal = (event) => {
    const obj = {...personal}
    obj[event.target.name] = event.target.value
    setPersonal(obj)
  }

  const handleChangeExperience = (event, index) => {
    const list = [...experiences]
    const obj = {...list[index]}
    obj[event.target.name] = event.target.value
    list[index] = obj
    setExperiences(list)
  }

  const handleChangeExample = (event) => {
    setPhoto(examplePhoto)
    setPersonal(examplePersonal)
    setEducations([exampleEducation])
    setExperiences([exampleExperience])
  }



  const handlePhoto = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]))
    setPhotoplaceholder(event.target.files[0].name)
  }



  const handleChangeEducation = (event, index) => {
    const list = [...educations]
    const obj = {...list[index]}
    obj[event.target.name] = event.target.value
    list[index] = obj
    setEducations(list)
  }

  const addExperience = (event) => {
    setExperiences([...experiences, emptyExperience])
  }

  const addEducation = (event) => {
    setEducations([...educations, emptyEducation])
  }

  const handleDeleteExperience = (event) => {
    const list = [...experiences]
    list.splice(event.target.value, 1)
    setExperiences(list)
  }

  const handleDeleteEducation = (event) => {
    const list = [...educations]
    list.splice(event.target.value, 1)
    setEducations(list)
  }

  return (
    <Wrapper>
      <Heading>Personal information</Heading>
      <Input onChange={handleChangePersonal} name='firstname' value={personal.firstname} placeholder='First name'></Input>
      <Input onChange={handleChangePersonal} name='lastname' value={personal.lastname} placeholder='Last name'></Input>
      <PhotoLabel htmlFor='photo'>
        {photoplaceholder}
        <PhotoInput onInput={handlePhoto} name='img' id="photo" type='file' placeholder='Photo' accept="image/*"></PhotoInput>
      </PhotoLabel>
      <Input onChange={handleChangePersonal} name='title' value={personal.title} placeholder='Title'></Input>
      <Input onChange={handleChangePersonal} name='address' value={personal.address} placeholder='Address'></Input>
      <Input onChange={handleChangePersonal} name='phone' value={personal.phone} placeholder='Phone number'></Input>
      <Input onChange={handleChangePersonal} name='email' value={personal.email} placeholder='Email'></Input>
      <DescriptionInput onChange={handleChangePersonal} name='description' value={personal.description} placeholder='Description'></DescriptionInput>
      <Heading>Experience</Heading>
      {experiences.map((experience, index) => {
        return <Fragment key={index}>
          <Input value={experience.position} onChange={(event) => handleChangeExperience(event, index)} name='position' placeholder='Position'></Input>
          <Input value={experience.company} onChange={(event) => handleChangeExperience(event, index)} name='company' placeholder='Company'></Input>
          <Input value={experience.city} onChange={(event) => handleChangeExperience(event, index)} name='city' placeholder='City'></Input>
          <Input value={experience.from} onChange={(event) => handleChangeExperience(event, index)} name='from' placeholder='From'></Input>
          <Input value={experience.to} onChange={(event) => handleChangeExperience(event, index)} name='to' placeholder='To'></Input>
          <Button value={index} onClick={handleDeleteExperience}>Delete</Button>
        </Fragment>
      })}
      <Button onClick={addExperience}>Add Experience</Button>
      <Heading>Education</Heading>
      {educations.map((education, index) => {
        return <Fragment key={index}>
          <Input value={education.university} onChange={(event) => handleChangeEducation(event, index)} name='university' placeholder='University'></Input>
          <Input value={education.city} onChange={(event) => handleChangeEducation(event, index)} name='city' placeholder='City'></Input>
          <Input value={education.degree} onChange={(event) => handleChangeEducation(event, index)} name='degree' placeholder='Degree'></Input>
          <Input value={education.subject} onChange={(event) => handleChangeEducation(event, index)} name='subject' placeholder='Subject'></Input>
          <Input value={education.from} onChange={(event) => handleChangeEducation(event, index)} name='from' placeholder='From'></Input>
          <Input value={education.to} onChange={(event) => handleChangeEducation(event, index)} name='to' placeholder='To'></Input>
          <Button value={index} onClick={handleDeleteEducation}>Delete</Button>
        </Fragment>
      })}
      <Button onClick={addEducation}>Add Education</Button>
      <Button onClick={handlePrint}>Download PDF</Button>
      <Button onClick={handleChangeExample}>Load Example</Button>
    </Wrapper>
  )
}

export default Form