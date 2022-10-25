import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useState, useContext, useEffect } from "react";
import axios from "axios"
import { InfoContext } from "../../context/Info";
import trash from "../../assets/img/Trash-can.png"

export default function HabitsPage() {


    const [openHabitInput, setOpenHabitInput] = useState(false)
    const [addHabit, setAddHabit] = useState([])

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
                    <CreateHabitInput
                        addHabit={addHabit}
                        setAddHabit={setAddHabit}
                        setOpenHabitInput={setOpenHabitInput}
                        handleOpenHabitInput={handleOpenHabitInput}
                    />
                    : <></>}
                <ExistingHabit
                    addHabit={addHabit}
                    setAddHabit={setAddHabit}
                />
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContainerContent>
            <Footer />
        </Container>
    )
}

function CreateHabitInput({ addHabit, setAddHabit, setOpenHabitInput, handleOpenHabitInput }) {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    const { user, setUser } = useContext(InfoContext);
    const [days, setDays] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)
    const [inputTitle, setInputTitle] = useState("")
    // const [addHabit, setAddHabit] = useState([])

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

        setOpenHabitInput(false)

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
            setAddHabit(res.data)
            console.log(res.data)
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
                    <Cancel type="reset" onClick={handleOpenHabitInput}>Cancelar</Cancel>
                    <Submit type="submit">Salvar</Submit>
                </ContainerChoice>
            </ContainerForm>

        </CreateHabit>

    )
}

function ExistingHabit({ addHabit, setAddHabit }) {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    const { user, setUser } = useContext(InfoContext);
    const [renderHabits, setRenderHabbits] = useState([])

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    useEffect(() => {
        const promise = axios.get(URL, config)

        promise.then((res) => {
            console.log(res.data)
            setRenderHabbits(res.data)

        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [addHabit])

    console.log(addHabit)
    console.log(addHabit.length)
    if (renderHabits.length === 0)
        return <div></div>

    else {
        return (
            <>
                {renderHabits.map((h) =>
                    <SingleHabit>
                        <ContainerExistingHabit>
                            <Decription>{h.name}</Decription>
                            <img src={trash} alt="Lixo" />
                        </ContainerExistingHabit>
                        <ContainerWeekDays>
                            <>
                                <PrintWeekDays week={week} days={h.days} />
                            </>
                        </ContainerWeekDays>
                    </SingleHabit>
                )
                }
            </>
        )

    }

}

function PrintWeekDays({ week, days }) {
    console.log(days);
    return (
        <ContainerWeekDays>
            {week.map((d, index) =>
                <WeekDays
                    selecionado={days.includes(index) ? true : false}
                >{d}</WeekDays>
            )}
        </ContainerWeekDays>
    )
}

const Container = styled.div`
background-color: #E5E5E5;
height: fit-content;

`

const ContainerContent = styled.div`
padding: 30px 20px 0 20px;
min-height: 100vh;
height: 100%;
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
    background-color: ${({ selecionado }) => selecionado === true ? "#CBCBCB" : "#FFFFFF"};
    color: ${({ selecionado }) => selecionado === true ? "#FFFFFF" : "#CBCBCB"};
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
`

const Submit = styled.button`
    background-color: #52B6FF;
    color: #FFFFFF;
    height: 35px;
    width: 84px;
    border: none;
    border-radius: 5px;
`

const Cancel = styled.button`
    margin-right: 20px;
    color: #52B6FF;
    font-size: 16px;
    font-weight: 400;
    background-color: transparent;
    border: none;
`

const SingleHabit = styled.div`
padding: 20px;
background-color: #FFFFFF;
height: 50px;
border-radius: 5px;
margin-top: 25px;

img{
    width: 13px;
    height: 15px;
}
`

const ContainerExistingHabit = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`
const WeekDays = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({ selecionado }) => selecionado === true ? "#CBCBCB" : "#FFFFFF"};
    color: ${({ selecionado }) => selecionado === true ? "#FFFFFF" : "#CBCBCB"};
    border: 1px solid #DBDBDB;
    margin-right: 3px;
    border-radius: 5px;
    padding: 1px;
    justify-content: center;
    align-items: center;
    display: flex;
`
const Decription = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: #666666;
`
const ContainerWeekDays = styled.div`
display: flex;
`