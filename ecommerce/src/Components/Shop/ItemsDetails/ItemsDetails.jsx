import React from 'react'
import styled from 'styled-components'
import LargeBox from '../../Small_Box/LargeBox';

export default function ItemsDetails() {
  return (
    <Container>

        

        <div className="top">
            <div className="photo">
                <div className="main-photo">
                    <img src='' alt="photo" />
                </div>
                <div className="option">
                    <button><img src="" alt="photo" /></button>
                    <button><img src="" alt="photo" /></button>
                    <button><img src="" alt="photo" /></button>
                    <button><img src="" alt="photo" /></button>
                </div>
            </div>

            <div className="details">
                <h1>Title</h1>
                <h2>Price</h2>
                <select name="" id="">
                    <option value="" disabled selected>Select Option</option>
                    <option value="">First</option>
                    <option value="">Second</option>
                    <option value="">Third</option>
                </select>

                <div className="cart">
                    <input type="number" placeholder='NO.'/>
                    <button>Add Cart</button>
                </div>

                <h1>Products Details</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nobis, repudiandae alias dolores at non expedita odio fugiat incidunt ab exercitationem cumque doloremque delectus sed praesentium dolorem laborum accusantium amet labore, deleniti hic ex possimus, voluptas maiores? Vero, totam ab similique corrupti, voluptas illum aspernatur, magnam quo odio maiores harum!</p>
            </div>
        </div>



        <div className="recommended">

            <h1>Recommended Items</h1>
            <div className="box">
                <LargeBox/>
                <LargeBox/>
                <LargeBox/>
                <LargeBox/>
            </div>
        </div>
      
    </Container>
  )
}

const Container = styled.div`

margin: 10rem auto 5rem auto;



width: 80%;

.top{
    display: flex;
    gap: 2rem;

    .photo{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .main-photo{
            width: 20.5rem;
                height: 19rem;

                border: 2px solid red;
            img{
                width: 10rem;
                height: 10rem;
            }
        }

        .option{
            display: flex;
            gap: 0.2rem;

            button{
                width: 5rem;
                height: 5rem;

                img{
                    width: 5rem;
                height: 5rem;
                }
            }
        }
    }



    .details{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        select{
            width: 7rem;
            height: 1.5rem;
        }

        .cart{
            
            input{
                width: 3rem;
                height: 2rem;

                padding: 0.3rem;
            }

            button{
                width: 5rem;
                height: 2rem;
                margin-left: 0.9rem;
                border: none;
                background-color: blue;
                color: white;
                border-radius: 0.9rem;
            }
        }
    }


    @media (max-width:750px){
       flex-direction: column;
    }

  
}

@media (max-width:370px)
    {
        width: 100%;
    }


    .recommended{
        margin: 5rem 0rem;
        text-align: center;

        .box{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(9rem, 15rem));
            grid-gap: 1rem;

            justify-content: center;
            
        }
    }

`;
