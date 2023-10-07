import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomePageBox from "../../Small_Box/HomePageBox"

import { useSelector } from "react-redux";

export default function ItemsDetails() {
  const item = useSelector((state) => state.item);
  

  const arr = [item[0].img1, item[0].img2, item[0].img3, item[0].img4];

  

  const [i, setI] = useState(2);
  const [image, setImage] = useState(arr[i]);

  useEffect(() => {
    setImage(arr[i]);
  }, [i]);




  
  const [data,setData]= useState([]);

  const fetchdata= ()=>{
    const item = fetch('../../JSON/Shop.json')
    .then(value=>value.json())
    .then(val=> setData(val))
    .catch(console.log('Error was encounter'));
  }

  useEffect(()=>{
    fetchdata();
  }, [])


  

  return (
    <Container>
      {item.map((value) => (
        <>
          <div className="top">
            <div className="photo">
              <div className="main-photo">
                <img src={image} alt="photo" />
              </div>
              <div className="option">
                <button onClick={() => setI(0)}>
                  <img src={value.img1} alt="photo" />
                </button>
                <button onClick={() => setI(1)}>
                  <img src={value.img2} alt="photo" />
                </button>
                <button onClick={() => setI(2)}>
                  <img src={value.img3} alt="photo" />
                </button>
                <button onClick={() => setI(3)}>
                  <img src={value.img4} alt="photo" />
                </button>
              </div>
            </div>

            <div className="details">
              <h1>{value.title}</h1>
              <h2>{value.price}</h2>
              <select name="" id="">
                <option value="" disabled selected>
                  Select Option
                </option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
              </select>

              <div className="cart">
                <input type="number" placeholder="NO." />
                <button>Add Cart</button>
              </div>

              <h1>Products Details</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio nobis, repudiandae alias dolores at non expedita odio
                fugiat incidunt ab exercitationem cumque doloremque delectus sed
                praesentium dolorem laborum accusantium amet labore, deleniti
                hic ex possimus, voluptas maiores? Vero, totam ab similique
                corrupti, voluptas illum aspernatur, magnam quo odio maiores
                harum!
              </p>
            </div>
          </div>

         
        </>
      ))}

<div className="recommended">
  <h1>Recommended Items</h1>
  <div className="box">
    {data.map((value) => {
      if (value.type === item[0].type) {
        return <HomePageBox     img={value.img}
        brand={value.brand}
        name={value.name}
        price={value.price}   />;
      }
      return null;
    })}
  </div>
</div>

    </Container>
  );
}

const Container = styled.div`
  margin: 10rem auto 5rem auto;

  width: 80%;

  .top {
    display: flex;
    gap: 2rem;

    .photo {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .main-photo {
        width: 20.5rem;
        height: 19rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: 5px solid #b4a979;
        border-radius: 1rem;
        img {
          width: 16rem;
          height: 16rem;
        }
      }

      .option {
        display: flex;
        gap: 0.2rem;

        button {
          width: 5rem;
          height: 5rem;
          border: none;
          background-color: transparent;
          border: 1px solid black;

          cursor: pointer;

          img {
            width: 4.5rem;
            height: 4.5rem;
          }
        }
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      select {
        width: 7rem;
        height: 1.5rem;
      }

      .cart {
        input {
          width: 3rem;
          height: 2rem;

          padding: 0.3rem;
        }

        button {
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

    @media (max-width: 750px) {
      flex-direction: column;
    }
  }

  @media (max-width: 370px) {
    width: 100%;
  }

  .recommended {
    margin: 5rem 0rem;
    text-align: center;

    .box {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(9rem, 15rem));
      grid-gap: 1rem;

      justify-content: center;
    }
  }
`;
