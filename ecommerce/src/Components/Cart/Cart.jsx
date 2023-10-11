import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import React, {useState, useEffect } from "react";

import {remove} from '../../Redux/Slice/Cart'

export default function Cart() {

  const value = useSelector((state)=> state.cart.val);

  const dispatch = useDispatch();



  const total = value.reduce((acc, data) => acc + Number.parseInt(data.price), 0);

  console.log(total);



  const handledispatch =(val)=>{
    console.log(val)

    dispatch(
      remove(val)
    )
  }
  return (
    <Container>
      <div className="header">
      <h1>Your Cart</h1>
      </div>
      

      <div className="box">
        <div className="content">

          <table>
            <thead>
              <th>Item</th>
              <th>Product</th>
              <th>No.of Item</th>
              <th>Size</th>
              <th>Price</th>
            </thead>
            <tbody>
             {
              value.map((data)=>(
                <>
                <tr>
                 
                  <td><img src={data.img} alt="" /></td>
                  <td>{data.name}</td>
                  <td>{data.quantity}</td>
                  <td>{data.size}</td>
                  <td>${data.price}</td>
                  <td><button onClick={()=> handledispatch(data.name)} >delete</button></td>
                </tr>
                </>
              ))
             }

            </tbody>

          
          
          </table>

        </div>
      
      </div>


      <div className="coupon">
        <h3>Apply Coupon: <span><input type="text" /></span></h3>
      </div>

      <div className="calculate">
        <div className="left">
          <h1>Total Price: <span>{total}</span></h1>
        
          <h1>Shipping: <span>0</span></h1>
          
          <h1>Total Cost: <span>{total}</span></h1>
        </div>

       
      </div>
      
    </Container>
  )
}

const Container = styled.div`
 


width: 100%;
margin-top: 10rem;
.header{
  h1{
  text-align: center;
  color: #9494e0;
}
}

.box{
  margin-top: 3rem;
  width: 100%;
  overflow-y: scroll;

  .content{
    margin: 0rem auto;
    width: 70rem;

    table{
      width: 100%;

      thead th{
        padding: 0.2rem;
        background-color: #8989e0;
      }

      tbody{
        tr{
          td{
           text-align: center;
            
            img{
              width: 7rem;
              height: 5rem;
            }

            button{
              padding: 0.2rem 0.5rem;
              border: none;
              color: white;
              background-color: #a57272;
              border-radius: 1rem;
            }
        
        }
        }
      }
    }
  }
}

.coupon{
  margin: 5rem 3rem 0rem 3rem;
  font-size: 0.9rem;
  font-weight: lighter;
  input{
    width: 7rem;
    height: 1.5rem;
    padding-left: 0.1rem;
  }
}


.calculate{
  width: 15rem;
  height: 9rem;
  border: 2px solid black;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;

  padding: 1rem;

  float: right;

  margin-bottom: 4rem;

  margin-right: 2rem;


  h1{
    margin-bottom: 1rem;
    width: 13rem;
    font-size: 1rem;
    font-weight: lighter;
    color: black;
    display: flex;
    justify-content: space-between;


  }
}


`;