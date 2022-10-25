import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Check from "../assets/img/Check.png"
import { InfoContext } from "../context/Info";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs"
import Percentage from "../components/Percentage";


export default function TodayPage() {

    console.log(dayjs())
    const { user, setUser } = useContext(InfoContext);
    const [todayHabit, setTodayHabit] = useState([])
    const date = dayjs().locale("pt-br").format("dddd, DD/MM").replace("-feira", "");
    const [renderHabit, setRenderHabit] = useState(false)

    useEffect(() => {

        if (user.token !== undefined) {

            console.log(user.token)
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }

            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

            const promise = axios.get(URL, config)

            promise.then((res) => {
                console.log(res.data)
                setTodayHabit(res.data)
            })

            promise.catch((err) => {
                console.log(err.response.data)
            })
        }

    }, [user, renderHabit])

    function handleCheck(h) {

        if (user.token !== undefined && h.done === false) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }

            console.log(user.token)

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`

            const promise = axios.post(URL, h.id, config)

            promise.then((res) => {
                if (renderHabit === true) setRenderHabit(false)
                if (renderHabit === false) setRenderHabit(true)
                console.log(res.data)
            })

            promise.catch((err) => {
                console.log(err.response.data)
            })
            console.log(h)
        }

        if (user.token !== undefined && h.done === true) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }

            console.log(user.token)

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`

            const promise = axios.post(URL, h.id, config)

            promise.then((res) => {
                if (renderHabit === true) setRenderHabit(false)
                if (renderHabit === false) setRenderHabit(true)
                console.log(res.data)
            })

            promise.catch((err) => {
                console.log(err.response.data)
            })
            console.log(h)
        }


    }


    if (todayHabit.length === 0) {
        return (
            <ContainerWrapper>
                <NavBar />
                <ContainerContent>
                    <Day>
                        <h3>{date}</h3>
                        <h5>Nenhum hábito concluído ainda</h5>
                    </Day>
                </ContainerContent>
                <Footer />
            </ContainerWrapper>
        )
    }

    else {
        return (
            <ContainerWrapper>
                <Container>
                    <NavBar />
                    <ContainerContent>
                        <Day>
                            <h3>{date}</h3>
                            <Percentage 
                            todayHabit = {todayHabit}
                            >Nenhum hábito concluído ainda</Percentage>
                        </Day>

                        {todayHabit.map((h) =>

                            <ContainerHabit>
                                <Description>
                                    <h1>{h.name}</h1>
                                    <h4>Sequência atual: {h.currentSequence} dias</h4>
                                    <h4>Seu recorde: {h.highestSequence} dias</h4>
                                </Description>

                                <Symbol
                                    onClick={() => handleCheck(h)}
                                    selecionado={h.done ? true : false}
                                >
                                    <img src={Check} alt="Símbolo check" />
                                </Symbol>
                            </ContainerHabit>
                        )}

                    </ContainerContent>
                    <Footer />
                </Container>
            </ContainerWrapper>

        )
    }
}

const Container = styled.div`
background-color: #E5E5E5;
height: fit-content;
padding-bottom: 100px;
`
const ContainerWrapper = styled.div`
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

const Symbol = styled.button`
width: 69px;
height: 69px;
background-color: ${({ selecionado }) => selecionado === true ? "green" : "#e7e7e7"};;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
border: none;
`
