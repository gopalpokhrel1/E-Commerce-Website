import styled from "styled-components"
import {GrMail} from 'react-icons/gr'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillClockCircle} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import { useEffect } from "react"

export default function Contact() {
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
            <h1>#Let's_Talk</h1>
        </div>

        <div className="body">
            <div className="left">
                <h1>GET IN TOUCH</h1>
                <ul>
                    <li><HiLocationMarker size={24}/> Kathmandu</li>
                    <li><GrMail size={20}/>helloworld@gmail.com</li>
                    <li><BsFillTelephoneFill size={20}/>082-235489</li>
                    <li><AiFillClockCircle size={24}/>10am-16pm/Mon-Fri</li>
                </ul>
            </div>

            <div className="right">
            <div className="map" ><iframe   frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=koteshwor+(Sasto)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe></div>
            </div>
        </div>

        <form action="">
            <h1>Let's Connect</h1>
          <div className="input">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" />
          </div>
          <div className="input">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input">
            <label htmlFor="location">Location</label>
            <input type="location" id="location" />
          </div>

          <button type="submit">Submit</button>
        </form>
      
    </Container>
  )
}

const Container = styled.div`

margin-top: 7rem;

.header{
    width: 100%;
    height: 12rem;

    background-image: url('/ContactUs/img1.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 12rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

   

}

.body{
    margin-top: 7rem;

width: 100%;
display: flex;
justify-content: space-around;
align-items: center;


        .left{
            ul{

                box-sizing: border-box;
                padding-top: 3rem;
                display: flex;
                flex-direction: column;

                list-style: none;
                gap: 1rem;
                li{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
            }
            h1{
                font-size: 1.5rem;
              font-weight  :lighter ;
            }
        }

        .right{
            .map{
                
                iframe{
                    width: 40rem;
                    height: 25rem;
                }
            }
        }
    }

    form{
        width: 50%;
        height: 30rem;

        background-color: #6f6f94;

        border-radius: 2rem;
        
        margin: 7rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;

        .input{
            display: flex;
            flex-direction: column;
            position: relative;

            label{
                background-color: #6f6f94;
                width: max-content;
                position: absolute;
                top: -0.8rem;
                left: 1rem;
                z-index: 10;
            }

            input{
                width: 20rem;
                height: 2.5rem;

                z-index: 1;

                padding: 0.5rem 0.5rem;
                background-color: transparent;

                border-radius: 0.5rem;
                border: 1px solid white;
                color: white;

                &:focus{
                    outline: none;
                }
                
            }
        }

        button{
            padding: 0.5rem 2rem;
            border: none;

            background-color: #d9e79a;
        }

        
    }


    @media (max-width:990px){
        .body{
            .right{
                .map{
                    iframe{
                        width: 25rem;
                        height: 20rem;
                    }
                }
            }
        }
    }
    @media (max-width:666px){
        .body{
         flex-direction: column;
         gap: 5rem;
        }
    }
    @media (max-width:410px){
        .body{
            .right{
                .map{
                    iframe{
                        width: 20rem;
                        height: 15rem;
                    }
                }
            }
        }
    }

    @media (max-width:647px){
        form{
            width: 60%;
        }
    }
    @media (max-width:547px){
        form{
            width: 80%;

            .input{
                input{
                    width: 15rem
                }
            }
        }
    }

`;
