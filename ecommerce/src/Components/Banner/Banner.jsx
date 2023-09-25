import React from 'react'
import styled from 'styled-components'

export default function Banner() {
  return (
    <Box>

        <p>upto 70% off all t-shirt & accessories</p>

        <button>Explore More</button>
      
    </Box>
  )
}

const Box = styled.div`

width: 100%;
height: 9rem;

background-image: url('../../src/assets/Banner/img.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;

display: flex;
flex-direction: column;
gap: 0.5rem;
align-items: center;
justify-content: center;

text-align: center;

p{
    font-size: 1.75rem;
    color: white;
}


button{
    padding: 0.5rem 1rem;
}

`;
