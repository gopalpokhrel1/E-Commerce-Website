import styled from "styled-components"
import Features from "../Features/Features";
import { useEffect } from "react";


export default function About() {
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
         <h1>Who We Are?</h1>

        </div>
        
        <div className="body">
            <div className="img">
                <img src="/About/img1.jpg" alt="Photo" />
            </div>

            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a omnis. Officiis nulla ut maxime iste dicta, assumenda quo quod in, numquam sunt ipsa. Reiciendis minima enim adipisci consequuntur aspernatur magni atque saepe repudiandae maxime, totam impedit, similique doloribus dolore cum quis. Maiores est provident voluptas! Omnis eligendi neque illo dolorum, ducimus soluta natus harum! Quidem commodi aut odit laudantium quas eos odio minus ipsum velit, aperiam ullam tenetur sapiente dignissimos amet reprehenderit, sequi minima ipsa corrupti officia facilis. Sunt sit dolorem atque incidunt accusantium est deserunt, eaque eum totam! Quia reprehenderit minus earum corrupti, ex et maiores soluta commodi.</p>
            </div>

        </div>

        <Features/>
      
    </Container>
  )
}

const Container = styled.div`
width: 100%;
box-sizing: border-box;

.header{
    width: 100%;
    height: 10rem;
    margin-top: 7rem;

    background-image: url('/About/img2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 10rem;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    h1{
        font-size: 2.5rem;
        
    }

    
}

.body{
    box-sizing: border-box;

    margin: 6rem auto;
 width: 100%;
  
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(20rem, 30rem));

 justify-content: center;
 grid-gap: 4rem;

   .img{

    img{
       width: 30rem;
    }
   }


}



@media (max-width:488px){
    
    .body{

        display: block;
        .img{
            width: 100%;
            display: flex;
            justify-content: center;

            img{
                width: calc(100% - 5%);
            }
        }

   
}
}



`;
