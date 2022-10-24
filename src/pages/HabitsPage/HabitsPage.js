import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useState, useContext } from "react";
import axios from "axios"
import { InfoContext } from "../../context/Info";

export default function HabitsPage() {

    const [openHabitInput, setOpenHabitInput] = useState(false)

    function handleOpenHabitInput() {
        if (openHabitInput === false) {
            setOpenHabitInput(true)
        } else (setOpenHabitInput(false))
    }

    return (
        <Container>
            <NavBar />
            <ContainerContent>
                <NewHabits>
                    <h3>Meus hábitos</h3>
                    <button onClick={handleOpenHabitInput}>+</button>
                </NewHabits>

                {openHabitInput ?
                    <CreateHabitInput />
                    : <></>}

                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContainerContent>
            <Footer />
        </Container>
    )
}

function CreateHabitInput() {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    const {user, setUser} = useContext(InfoContext);
    const [days, setDays] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)
    const [inputTitle, setInputTitle] = useState("")

    function handleSelectedDay(d, index) {
        console.log(index)
        // setIsDisabled(true)
        setDays([...days, index])
        if (!days.includes(index)) {
            setDays([...days, index])
        } else {
            const newList = days.filter(d => d !== index)
            setDays(newList)
        }
        console.log(days)
    }

    function handleSubmit(event) {
        event.preventDefault();

        const body = {
            name: inputTitle,
            days: days
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        console.log(body)
        console.log(user)

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        
        const promise = axios.post(URL, body, config)

         promise.then((res) => {
            console.log(res.data)
            console.log("Deu certo")
         })

         promise.catch((err) => {
            console.log(err.response.data)
         })
    }

    return (

        <CreateHabit>
            <ContainerForm onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="nome do hábito"
                    name="name"
                    onChange={(e) => setInputTitle(e.target.value)}
                />
                {week.map((d, index) => (
                    <Button type="button"
                        disabled={isDisabled}
                        onClick={() => handleSelectedDay(d, index)}
                        selecionado={days.includes(index) ? true : false}
                    >
                        {d}
                    </Button>
                ))}

                <ContainerChoice>
                    <h3>Cancelar</h3>
                    <button type="submit">Salvar</button>
                </ContainerChoice>
            </ContainerForm>

        </CreateHabit>

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
padding: 20px;
background-color: #FFFFFF;
height: 100px;
border-radius: 5px;
margin-top: 25px;
/* display: flex;
flex-direction: column; */
`

const ContainerForm = styled.form`
input{
    width: 95%;
    margin-bottom: 10px;
    border: solid 1px #D4D4D4; 
    border-radius: 5px;
    height: 30px;
    color: #DBDBDB;
    padding-left: 10px;
}
`

const Button = styled.button`
    width: 20px;
    height: 20px;
    background-color: ${({ selecionado }) => selecionado === true ? "yellow" : "blue"};
    color: #DBDBDB;
    border: 1px solid #DBDBDB;
    margin-right: 3px;
    border-radius: 5px;
    padding: 1px;
 `

// const Week = styled.div`
// flex-direction: row;
// display: flex;

// button{
//     width: 20px;
//     height: 20px;
//     background-color: #FFFFFF;
//     color: #cfcfcf;
//     border: 1px solid #cfcfcf;
//     margin-right: 3px;
//     border-radius: 5px;
//     display: flex;
//     justify-content: center;
// }
// `

const ContainerChoice = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 10px;
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