import React from "react";
import styled from "styled-components";

export default function AddSBox({ first, second, third, img }) {
  return (
    <Container img={img}>
      <div class="box">
        <p>{first}</p>
        <h1>{second}</h1>
        <button>{third}</button>
      </div>
    </Container>
  );
}

const Container = styled.div`

margin-top: 2rem;
  .box {
    width: 23vw;
    height: 15rem;
    background-color: rgb(209, 206, 206);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-image: url(${(props) => props.img});
    background-position: right;
    background-size: 50% 100%;
    background-repeat: no-repeat;

    text-align: center;

    @media (max-width:750px){
      width: 60vw;
      
    }

    h1 {
      font-size: 1.1rem;
    }

    @media (max-width: 750px) {
      h1 {
        font-size: 0.9rem;
      }
    }

    button {
      border: none;
      padding: 0.2rem;
      height: 2.5rem;
      font-size: 0.9rem;
    }
  }

`;
