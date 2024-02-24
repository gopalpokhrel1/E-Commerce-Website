import styled from "styled-components"
import { useEffect } from "react";


export default function Blog() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Scroll to top when the component mounts
    scrollToTop();
  }, []); 
  return (
    <Container>
      <div className="header">
        <h1>#ReadMore</h1>
        <p>Read all case studies about our products</p>
      </div>

      <div className="grid">
        <div className="flex">
        <img src="/Blog/img1.jpg" alt="photo" />
            
        </div>
        <div className="flex">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, eum?</p>
            
        </div>
        <div className="flex">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, consequuntur?</p>
            
        </div>
        <div className="flex">
        <img src="/Blog/img2.jpg" alt="photo" />
        </div>
        <div className="flex">
        <img src="/Blog/img3.jpg" alt="photo" />
        </div>
        <div className="flex">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, cum.</p>
        </div>
        <div className="flex">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, ipsam.    
            </p>
        </div>
        <div className="flex">
        <img src="/Blog/img4.jpg" alt="photo" />
        </div>
      </div>



    </Container>
  )
}


const Container = styled.div`
 margin-top: 8rem;

 


 .header{
    width: 100%;
    height: 10rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    box-sizing: border-box;
    padding: 0.5rem;


    
    background-image: url('/Blog/Blog_header.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    h1{
        font-size: 2.5rem;
    }
    p{
        font-size: 0.9rem;
    }

 }

 .grid{
    width: 70%;
    margin: 4rem auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
    justify-content: center;
    grid-column-gap: 7rem;
    grid-row-gap: 2rem;

    .flex{
      display: flex;
      align-items: center;
      justify-content: center;
    }

 
 }

 .grid .flex img{
    width: 20rem;
    height: 20rem;
 }
 .grid .flex p{
    font-size: 1rem;
 }


 @media (max-width:1070px) {
  .grid{
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
  }
 }
 @media (max-width:769px) {
  .grid{
         grid-column-gap: 0.6rem;
         grid-template-columns: repeat(2, minmax(5rem, 15rem));
         grid-column-gap: 1rem;
         


         .flex{
          img{
            width: 13rem;
            height: 13rem;
          }
         }
  }
 }



`;
