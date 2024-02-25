import styled from "styled-components";
import { useState, useEffect } from "react";
import HomePageBox from '../Small_Box/HomePageBox'
import file from '../../JSON/Arrival.json';

export default function FeaturedProducts() {
  const [data, setData] = useState([]);

  const getdata = () => {
    setData(file);
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div style={{ marginTop: "10rem", textAlign: "center" }}>
        <h1 style={{ marginBottom: "1rem" }}>New Arrival</h1>
      </div>
      <Container>
        {data.map((element) => {
          return (
            <div className="item" key={element.id}>
              <HomePageBox
                img={element.img}
                brand={element.brand}
                name={element.name}
                price={element.price}
              />
            </div>
          );
        })}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;

  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 17rem));
  grid-gap: 1.5rem;
  justify-content: center;

  .item {

    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
