import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <Container>
            <NavBar/>
            <ContainerContent>
                <NewHabits>
                    <h3>Meus hábitos</h3>
                    <button>+</button>
                </NewHabits>
                <CreateHabit>
                    <ContainerForm>
                        <input
                            type="text"
                            placeholder="nome do hábito"
                        />
                        <input
                            type="week"
                        />
                    </ContainerForm>
                    <ContainerChoice>
                        <h3>Cancelar</h3>
                        <button>Salvar</button>
                    </ContainerChoice>
                </CreateHabit>

                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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
const NewHabits = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
h3{
    font-size: 23px;
    font-weight: 400;
    color: #126BA5;
}
button{
    width: 35px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-weight: 400;
    font-size:27px;
    border: none;
    border-radius: 5px;
}
`
const CreateHabit = styled.div`
background-color: #FFFFFF;
height: 180px;
border-radius: 5px;
margin-top: 25px;
`

const ContainerForm = styled.form`
padding: 20px;
flex-direction: column;
display: flex;
input{
    margin-bottom: 10px;
    border: solid 1px #D4D4D4; 
    border-radius: 5px;
    height: 30px;
    color: #DBDBDB;
}
`

const ContainerChoice = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 20px;
align-items: center;
h3{
    margin-right: 20px;
    color: #52B6FF;
    font-size: 16px;
    font-weight: 400;
}
button{
    background-color: #52B6FF;
    color: #FFFFFF;
    height: 35px;
    width: 84px;
    border: none;
    border-radius: 5px;
}
`