import styled from "styled-components";
import Signin from "./SignIn/Signin";



export default function Footer() {
  return (
    <>
    
    <Signin/>


    <Container>
      <div class="footer-grid">
        <div class="footer-flex">
          <div class="footer-content">
            <h1>Sasto</h1>

            <h2>contact us</h2>
            <ul>
              <li>
                <b>Address:</b>Kathmandu-Nepal
              </li>
              <li>
                <b>Phone:</b>9854215745,082-11256
              </li>
              <li>
                <b>Hours:</b> 10am-16pm/Mon-Fri
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-flex">
          <div class="footer-content1">
            <h2>About</h2>
            <ul>
              <li>About us</li>
              <li>Delivery information</li>
              <li>Privacy policy</li>
              <li>Terms and condition</li>
            </ul>
          </div>
        </div>
        <div class="footer-flex">
          <div class="footer-content1">
            <h2>My Account</h2>
            <ul>
              <li>Sign in</li>
              <li>View cart</li>
              <li>My watchlist</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-last">
        <p><i>@2023, HTML, CSS E-commerce templete</i></p>
    </div>
    </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #47402ea4;
  box-sizing: border-box;
  font-size: 0.9rem;

  .footer-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}

.footer-flex{
    display: flex;
    justify-content: center;
}

.footer-content{

    width: 15rem;
    height: 13rem;
    padding: 3rem 0rem 0rem 2rem;
}
.footer-content h2{
    font-size: 1.3rem;
    margin: 1rem 0rem 1rem 0rem;
}
.footer-content ul{
    list-style: none;}

.footer-content ul li{
    margin-top: 0.5rem;
}

.footer-content1{
    width: 15rem;
    height: 10rem;
    margin-top: 2rem;
    padding: 3rem 0rem 0rem 2rem;
}

.footer-content1 h2{
    font-size: 1.3rem;
    margin: 1rem 0rem 1rem 0rem;
}

.footer-content1 ul{
   list-style: none;
}

.footer-content1 ul li{
    cursor: pointer;
    margin: 0.5rem;
}

.footer-last{
    margin-top: 6rem;
    text-align: center;
}
`;
