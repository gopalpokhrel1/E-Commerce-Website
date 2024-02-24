import React from "react";
import styled from "styled-components";

export default function AddBBox({first, second, third, last, img}) {
  return (
    <Box img={img} >
      <div className="item"  >
      <p>{first}</p>
      <h1>{second}</h1>
      <p>{third}</p>
      <button>{last}</button>
      </div>
    </Box>
  );
}

const Box = styled.div`




.item{
  width: 35vw;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: rgb(209, 206, 206);
  background-image: url(${props => props.img});
  background-position: right;
  background-size: 50% 100%;
  background-repeat: no-repeat;

  text-align: center;

  @media (max-width:750px){
      width: 80vw;
      height: 20rem;
      
    }

  
  button{
        border: none;
        padding: 0.2rem;
        height: 2.5rem;
    font-size: 0.9rem;
    }


}
 

`;
