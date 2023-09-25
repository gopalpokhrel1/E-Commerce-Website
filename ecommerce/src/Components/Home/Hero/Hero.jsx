import React from 'react'
import styled from 'styled-components'
export default function Hero() {
  return (
   <Container>
    <div className="container-item">

        <div className="left-side">
            <p>Trade in Offer</p>
            <h1>Best Value Offer <br />
            <span style={{color:'#6bbde2'}}>On All Products</span>
            </h1>

            <p>Save more with tokens & upto 70% off</p>
            
                <img src="../../src/assets/DisplayPhoto/shop-now.png" alt="" />
            

        </div>

        <div className="right-side">
          
          <img src="../../src/assets/DisplayPhoto/girl photo.png"alt="" />

        </div>
    </div>
    
   </Container>
  )
}

const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: rgb(238, 238, 221);

.container-item{
    width: 80%;
    min-height: 100vh;
    margin: 0rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-side{

      text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;

        padding-top: 8rem;

        box-sizing: border-box;
      
            img{
                
                width: 10rem;
                height: 10rem;

                cursor: pointer;

            }
        }


        .right-side{
            padding-top: 5rem;
            img{
                width: 23rem;
            }
        }
    }
@media screen and (max-width:900px) {

    .container-item{
        width: 100%;
        padding: 0rem 2rem;
    }
    
}

@media screen and (max-width:740px) {

.container-item{
flex-direction: column;
justify-content: center;

.left-side{

    padding-top: 15rem;
    p{
        font-size: 0.8rem;
    }
}



.right-side{
    img{
        width: 18rem;
    }
}
}

}


`;
