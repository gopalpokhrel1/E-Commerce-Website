
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import LargeBox from '../../Small_Box/LargeBox';
import shopdata from '../../../JSON/Shop.json'



export default function Shop() {
  const [activeSlide, setActiveSlide] = useState(0);
  const itemCount = 16;
  const itemsPerSlide = 16;
  const slidesCount = Math.ceil(itemCount / itemsPerSlide);
  const slideWidth = 100 / slidesCount; 

  const handlePrev = () => {
    setActiveSlide((activeSlide - 1 + slidesCount) % slidesCount);
  };

  const handleNext = () => {
    setActiveSlide((activeSlide + 1) % slidesCount);
  };

 


  const [data,setData]= useState([]);
  

  const fetchdata= ()=>{
    setData(shopdata);
  }

  useEffect(()=>{
    fetchdata();
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  
      // Scroll to top when the component mounts
      scrollToTop();
  }, [])



  




  return (
    <Container>
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${activeSlide * slideWidth}%)` }}>
        {data.slice(activeSlide * itemsPerSlide, (activeSlide + 1) * itemsPerSlide).map((item, index) => (
            <div key={index} className="item">
              
              <LargeBox img={item.img} brand={item.brand} name={item.name} price={item.price} obj= {item.obj}/>
              
            </div>
          ))}
          </div>
      </div>
      <div className="slider-controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .slider-container {
    width: 80%;
    overflow: hidden;
    position: relative; // Add this for positioning the controls
  }

  .slider {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 15rem));
    justify-content: center;
    grid-gap: 2rem;
    transition: transform 0.5s ease-in-out;
  }

  .item {
    display: flex;
    justify-content: center;
  }

  .slider-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px ;

    margin-bottom: 10px;
    gap: 1rem;



  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: blue;
    color: white;
    border-radius: 2rem;

    
  }
`
