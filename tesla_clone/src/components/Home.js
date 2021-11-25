import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
             title="Model S"
             description="Order Online for Touchless Delivery"
             backgroundimg="model-s.jpg"
             leftbutton="custom order"
             rightbutton="existing inventry"
            />
            <Section
            title="Model y"
            description="Order Online for Touchless Delivery"
            backgroundimg="model-y.jpg"
            leftbutton="custom order"
            rightbutton="existing inventry"
            />
            <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundimg="model-3.jpg"
            leftbutton="custom order"
            rightbutton="existing inventry"
            />
            <Section
            title="Model x"
            description="Order Online for Touchless Delivery"
            backgroundimg="model-x.jpg"
            leftbutton="custom order"
            rightbutton="existing inventry"
            />
            <Section
            title="Lowest Cost Solar Panels in India"
            description="Money-Back guarantee"
            backgroundimg="solar-panel.jpg"
            leftbutton="order now"
            rightbutton="lern more"
            />
            <Section
            title="Solar for New Roof"
            description="Solar Roof Const Less Than a New Roof Plus Solar Panels"
            backgroundimg="solar-roof.jpg"
            leftbutton="order now"
            rightbutton="lern more"
            />
            <Section
            title="Accessories"
            description=""
            backgroundimg="accessories.jpg"
            leftbutton="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`