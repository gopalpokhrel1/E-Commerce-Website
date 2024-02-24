import styled from "styled-components"

export default function Shopbanner() {
  return (
    <Container>

        <h1>#Online Shopping</h1>
        <p>Save more with tokens & upto 70% off</p>
      
    </Container>
  )
}

const Container = styled.div`
text-align: center;

display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
flex-direction: column;

color: white;

h1{
    font-size: 3rem;
}

margin: 10rem 0rem 5rem 0rem;

width: 100%;
height: 20rem;
background-image: url('/Shopbanner/Shopbanner.png');
background-position: center;
background-repeat: no-repeat;
background-size: 100% 20rem;
`;
