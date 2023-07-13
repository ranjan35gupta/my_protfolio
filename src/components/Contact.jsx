
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

import styled from 'styled-components'
import './contact.css'
import { Form } from 'react-router-dom'
import Map from './map/Map'

const Section = styled.div`
  height:100vh;
/* background-color:rgb(51, 153, 100); */
/* border: 2px solid green; */
scroll-snap-align: center;
`
const Container = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: space-between;
gap:50px;
@media screen and (max-width:768px) {
  height: 100%;
  justify-content: center;
  align-items:center;
  margin-top:19rem;
}


`

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
/* background-color:white; */
@media screen and (max-width:768px) {
  justify-content:center;
  
}

`

const Title = styled.h1`
font-weight:200;



`

const Forms = styled.form`
width:500px;
display: flex;
flex-direction:column;
gap:25px;
@media screen and (max-width:768px) {
  width: 250px;
  justify-content:center;
  align-items:center;
}


`

const Inputs = styled.input`
padding: 20px;
background-color:#e8e6e6;
border: none;
border-radius:5px;


`

const TextArea = styled.textarea`
padding:20px;
background-color:#e8e6e6;
border: none;
border-radius:5px;

`

const Button = styled.button`
background-color:rgb(245, 35, 179);
color: white;
 border:none;
 border-radius:5px;
 font-weight:bold;
 cursor: pointer;
 padding:13px;
`

const Right = styled.div`
flex:1;

@media screen and (max-width:768px) {
  display:none;
}
`



const Contact = () => {

const ref = useRef()
const [success,setSuccess] = useState(null)

  const handleSubmit=(e)=>{
  e.preventDefault();

  emailjs.sendForm('service_6ai75fw', 'template_z3plgxo', ref.current, 'tV9c91AJ_RUevKryL')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });

}

  return (
   <Section  id='contacts'>
    <Container>
      <Left>
        
        <Forms ref={ref} onSubmit={handleSubmit}>
        <Title>Contact Us</Title>
          <Inputs placeholder='Name' name='name'/>
          <Inputs placeholder='Email' name='email'/>
          <TextArea placeholder='Write your message' name='message' rows={10}/>
          <Button type='submit'>send</Button>
          {success &&
          "Your message has been sent. We 'll get back to you soon :)"}
        </Forms>
      </Left>
      <Right>
      <Map/>
      </Right>
    </Container>
   </Section>
  )
}

export default Contact