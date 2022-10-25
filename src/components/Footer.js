import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer (){
    return (
        <ContainerFooter>
            <Container>
                <Link to={`/habitos`}>
                    <h2>Hábitos</h2>
                </Link>
                <Link to={`/hoje`}>
                    <p>Hoje</p>
                </Link>
                <Link to={`/historico`}>
                    <h2>Histórico</h2>
                </Link>
            </Container>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
height: 70px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
color: #52B6FF;

`
const Container = styled.div`
width: 50vh;
display: flex;
align-items: center;
justify-content: space-around;

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