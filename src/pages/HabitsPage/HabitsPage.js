import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useState } from "react";
import color from "./color";
// import axios from "axios"

export default function HabitsPage() {

    // const [form, treatedForm] = useForm({ name: "", days: [] })

    // function startHabit(event) {
    //     event.preventDefault();

    //     const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    //      const promise = axios.post(URL, form)

    //      promise.then((res) => {
    //         console.log(res.data)
    //      })

    //      promise.catch((err) => {
    //         console.log(err.response.data)
    //      })
    // }

    // const habits = [{ name:{}, days:{days}}]
    // const [name, setName] = useState("")



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

    

    const [days, setDays] = useState(["A", "G", "D"])

    return (

        <CreateHabit>
            <ContainerForm /*onSubmit={startHabit}*/ >
                <input
                    type="text"
                    placeholder="nome do hábito"
                    name="name"
                />
                {days.map((d, i) => (
                    <button>
                        {d}
                    </button>
                ))}

            </ContainerForm>
            <ContainerChoice>
                <h3>Cancelar</h3>
                <button type="submit">Salvar</button>
            </ContainerChoice>
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
button{
    width: 20px;
    height: 20px;
    background-color: #FFFFFF;
    color: #cfcfcf;
    border: 1px solid #cfcfcf;
    margin-right: 3px;
    border-radius: 5px;
    padding: 1px;
 } 
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