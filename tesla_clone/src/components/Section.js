import React from 'react'
import styled from "styled-components"

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image: ${props => `url("/images/${props.bgImage}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const TitleText = styled.div`
padding-top: 15vh;
text-align: center;
`
const Buttons = styled.div``

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media(max-width: 756px){
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color: rgb(23, 26, 32, 0.8 );
height: 40px;
width: 256px;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
opacity: 0.85;
cursor: pointer;
font-size: 15px;
text-transform: uppercase;
margin: 8px;
`

const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.65;`

const DownArrow = styled.img`
height: 40px;
animation: animate infinite 1.5s;`



function Section(props) {
    return (
        <Wrap bgImage={props.backgroundimg}>
            <TitleText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </TitleText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>{props.leftbutton}</LeftButton>
                {props.rightbutton && 
                <RightButton>{props.rightbutton}</RightButton>
                } 
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section
