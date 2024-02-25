import styled from "styled-components";
import SmallBox from "../Small_Box/SmallBox";
import { useState, useEffect } from "react";

import file from '../../JSON/file.json';


export default function Features() {

    const [data, setData] = useState([]);

    const getdata = ()=>{
       setData(file);
    }

  

    useEffect(()=>{
        getdata();
    }, [])
  return (

    <Container>

        {
            data.map((element)=>{
                return(
                    <div className="item" key={element.id}>
                    <SmallBox  img={element.img} name={element.name}/>
                   </div>
                )
            })


}
    </Container>
  )
}

const Container = styled.div`

width: 100%;
margin: 8rem auto;

display: grid;
grid-template-columns: repeat(auto-fit, minmax(9rem, 10rem));
grid-gap: 3rem;
justify-content: center;

.item{


  display: flex;
  justify-content: center;
}
`;
