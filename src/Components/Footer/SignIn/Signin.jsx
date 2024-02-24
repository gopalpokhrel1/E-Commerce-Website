import styled  from "styled-components"

export default function Signin() {
  return (
    <Banner>
        <div className="first">
        <h1>Sign Up for Newsletter</h1>
            <p>Get E-mail updates about our latest shop and special offers</p>
        </div>

    <div className="last">
    <input type="text" placeholder="Enter your email" />
        <button>Sign In</button>
    </div>
      
    </Banner>
  )
}

const Banner = styled.div`
margin: 2rem 0rem;

width: 100%;
background-image: url('/Banner/img2.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: 100% 10rem;
display: flex;
justify-content: space-around;
align-items: center;
color: white;
padding: 2rem 0rem;

font-size: 0.8rem;
text-align: center;




@media (max-width:765px) {
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}


input{
    width: 17rem;
    height: 2.5rem;
    outline: none;
    border: 1px solid transparent ;
    padding-left: 1rem;
    background-color: #4c4c50;
    color: white;

    &::placeholder{
        font-size: 0.9rem;
        color: white;
    }

    @media (max-width:520px){
        width: 50vw;
    }
}
button{
    width: 5rem;
    height: 2.5rem;
    border: none;

    &:hover{
        background-color: #4c9cdd;
        cursor: pointer;
    }

}

`;
