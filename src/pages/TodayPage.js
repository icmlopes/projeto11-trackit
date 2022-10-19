import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Check from "../assets/img/Check.png"



export default function TodayPage() {
    return (
        <Container>
            <NavBar/>
            <ContainerContent>
                <Day>
                    <h3>Segunda, 17/05</h3>
                    <h5>Nenhum hábito concluído ainda</h5>
                </Day>
                <ContainerHabit>
                    <Description>
                        <h1>Ler 1 Capítulo de livro</h1>
                        <h4>Sequência atual: 3 dias</h4>
                        <h4>Seu recorde: 5 dias</h4>
                    </Description>
                    <Symbol>
                        <img src={Check} alt="Símbolo check" />
                    </Symbol>
                </ContainerHabit>

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
    margin-top: 30px;
}
`
const Day = styled.div`
display: flex;
flex-direction: column;
h3{
    font-size: 23px;
    font-weight: 400;
    color: #126BA5;
}
h5{
    margin-top:8px;
    font-size: 18px;
    font-weight: 400;
    color: #bababa;

}
`
const ContainerHabit = styled.div`
margin-top: 30px;
background-color: white;
border-radius: 5px;
height: 84px;
padding: 0px 10px 0px 10px;
display: flex;
justify-content: space-between;
align-items:center;
`
const Description = styled.div`
color: #666666;
font-size: 13px;
h1{
    font-size:20px;
    font-weight: 400;
    margin-bottom: 5px;
}
h4{
    margin-bottom:3px;
}
`

const Symbol = styled.div`
width: 69px;
height: 69px;
background-color: #e7e7e7;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
`
