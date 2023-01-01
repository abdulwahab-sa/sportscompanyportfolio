import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Container = styled.div`
    height: 2rem;
    background-color: #36454F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 1.8rem;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    
`

const IconSpan = styled.div`
  margin-left: 0.8rem;
  display: flex;
`

const iconStyles = {
  fontSize: "1em",
  color: "white"
}

const ContactWrapper = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: white;
  font-family: 'Montserrat', sans-serif;
`


function Contactbar() {
  return (
    <Container>
<Wrapper>
  <IconSpan>
  <FaFacebook style={iconStyles}/>
  </IconSpan>
  <IconSpan>
  <FaInstagram style={iconStyles}/>

  </IconSpan>
  <IconSpan>

  <FaLinkedinIn style={iconStyles}/>
  </IconSpan>

</Wrapper>

<ContactWrapper>

<span>info@tradecitycorp.com  |  (92)-3005025290 </span>

</ContactWrapper>

    </Container>
  )
}

export default Contactbar