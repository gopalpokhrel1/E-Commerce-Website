import styled from 'styled-components'
import {CiStar} from 'react-icons/ci'
import {BiCartAdd} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import '../../App.css'

import { useDispatch } from 'react-redux'
import { AddItems } from '../../Redux/Slice/Slice'





export default function LargeBox({img, brand, name, price, obj}) {

const dispatch = useDispatch();

const handleitems = (item)=>{

    
    dispatch(
        AddItems(item)
    )
}






  return (
    <>
       
         
        <NavLink  to='/itemsDetails' className='navlink'>
        <Box  onClick={()=> handleitems(obj)}>
            <div className="photo">
                <img src={img} alt="Photo"  />
            </div>
            <div className="mid-body">
                <p>{brand}</p>
                <h3>{name}</h3>
                {/* <div className="rating">
                  <CiStar size={20}/>
                  <CiStar size={20}/>
                  <CiStar size={20}/>
                  <CiStar size={20}/>
                  <CiStar size={20}/>
                </div> */}
    
                {/* <div className="last">
                    <p>${price}</p>
                    <div className="cart">
                    <BiCartAdd size={20}/>
                    
                    </div>
    
                </div> */}
            </div>

          
        </Box>
       

        </NavLink>


</>
  )
}


const Box = styled.div`

cursor: pointer;

width: 15rem;
height: 16rem;

padding: 0.5rem 0rem;

border: 0.1rem solid #B0BAAE;
border-radius: 0.5rem;

.photo{
    width: 12rem;
    height: 10rem;
    border-radius: 1rem;
    background-color:  rgb(238, 238, 221);
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 8rem;
        height: 9rem;
      
    }


}

.mid-body{
    box-sizing: border-box;
    padding: 1.5rem 0rem 0rem 1rem;

    h3{
        padding-top: 0.5rem;
    }
}

.last{
    position: relative;
    padding: 0rem 1rem 0.2rem 0rem;

    color: #6bbde2;

        .cart{
            cursor: pointer;

            width: 2rem;
            height: 2rem;
    
            border-radius: 1rem;
            background-color: #7f807c49;
            right: 0rem;
           
      position: absolute;
      top: -0.5rem;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

`;
