import React from 'react'
import styled from 'styled-components'
import AddBBox from './AddBBox';
import AddSBox from './AddSBox';

export default function Addition() {
  return (
    <>
    <Container>

        <AddBBox first= 'Crazy deals' second= 'Buy 1 Get 1 Free' third='The best classic dress in on sale at sasto' last= 'Learn More' img='../../src/assets/Additon/img1.png' />

        <AddBBox first= 'Spring/Summer' second= 'Upcoming Season'  last= 'Explore More' img='../../src/assets/Additon/img2.png' />


      
    </Container>

 <Container>
<AddSBox first= 'Seasonal Sale' second= 'Winter Collection' third='Learn More'  img= '../../src/assets/Additon/img3.png'/>

<AddSBox first= 'New Footwear Collection' second= 'Spring/Summer' third='Learn More'  img= '../../src/assets/Additon/img4.png'/>

<AddSBox first= 'T-shirts' second= 'Summer  T-shirts' third='Learn More'  img= '../../src/assets/Additon/img5.png'/>
</Container></>
  )
}

const Container = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;

    @media (max-width:850px){
      width: 100%;
      padding: 0rem 3rem 0rem 3rem;
    }
    @media (max-width:750px){
      width: 100%;
      padding: 0rem 2rem 0rem 2rem;

      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
`;
