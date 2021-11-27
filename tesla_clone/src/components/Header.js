import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 15px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`

const Menu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
}

@media(max-width: 768px){
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    cursor: pointer;
 }
 `

 const CustomMenu = styled(MenuIcon)`
 cursor: pointer;`

 const ListItems = styled.div`
position: fixed;
 background-color: white;
 width: 300px;
 top: 0;
 right: 0;
 bottom: 0;
 list-style: none;
 display: flex;
 flex-direction: column;
 text-align: start;
 padding: 30px;
 font-weight: 600;
 transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
 transition: transform 0.2s;
 li{
     padding: 10px 0;
     border-bottom: 1px solid rgba(0, 0, 0, .3);
 }
 `

 const CloseIconWrap = styled.div`
 display: flex;
 justify-content: flex-end;`

 const CustomClose = styled(CloseIcon)`
 cursor: pointer;`

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    
    return (
        <Container>
           <a><img src="/images/logo.svg"/></a>
           <Menu>
               {cars && cars.map((car, index) =>(
                   <a key={index} href="#">{car}</a>
               ))}
           </Menu>
           <RightMenu>
               <a>shop</a>
               <a>tesla account</a>
               <CustomMenu onClick={()=> setBurgerStatus(true)}/>
           </RightMenu>
           <ListItems show={burgerStatus}>
               <CloseIconWrap>
                   <CustomClose onClick={()=> setBurgerStatus(false)}/>
               </CloseIconWrap>
               {cars && cars.map((car, index) => (
                    <li key={index}><a href="#">{car}</a></li>
               ))}
               <li><a href="#">Custom Order</a></li>
               <li><a href="#">Existing Inventry</a></li>
           </ListItems>
        </Container>
    )
}

export default Header
