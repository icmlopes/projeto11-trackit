import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import styled from "styled-components"

export default function History(){
    return (
        <Container>
            <NavBar/>
            <ContainerContent>
                <Title>
                    <h3>Histórico</h3>
                </Title>
                <p> Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ContainerContent>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
background-color: #E5E5E5;
height: 100vh;
`

const ContainerContent = styled.div`
padding: 30px 20px 0 20px;
p{
    font-size: 18px;
    color: #666666;
    margin-top: 20px;
}
`

const Title = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
h3{
    font-size: 23px;
    font-weight: 400;
    color: #126BA5;
}
`