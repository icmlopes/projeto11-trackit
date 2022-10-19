import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer (){
    return (
        <ContainerFooter>
            <Link to={`/habitos`}>
                <h2>Hábitos</h2>
            </Link>
            <p>Hoje</p>
            <h2>Histórico</h2>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
width: 375px;
height: 70px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
justify-content: space-around;
align-items: center;
color: #52B6FF;
font-size: 18px;
font-weight: 400;
p{
    color: #FFFFFF;
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
`