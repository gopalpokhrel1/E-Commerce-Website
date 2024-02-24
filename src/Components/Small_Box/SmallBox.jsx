import styled from 'styled-components'

export default function SmallBox({img, name}) {
  return (
    <>
   
    <Box>
        <img src={img} alt="photo" />
         <button>{name}</button>

    </Box>

      
    </>
  )
}


const Box = styled.div`

width: 10rem;
height: 10rem;
border-radius: 0.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;
padding: 0.2rem 0rem;
gap: 0.2rem;

background-color: rgb(238, 238, 221); 

img{
    width: 9rem;
    height: 7rem;


}

button{
    border: none;
    padding: 0.2rem 0.5rem;

    background-color: rgb(252, 252, 188) ;
}

`;
