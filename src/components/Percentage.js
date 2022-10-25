import styled from "styled-components";
import { InfoContext } from "../context/Info"
import { useContext, useState } from "react"


export default function Percentage({todayHabit}){

    console.log(todayHabit.length)
    const total = todayHabit.length
    const totalDone = calculateTotalDone()
    const {user, setUser} = useContext(InfoContext);
    let percentage = totalDone/total*100

    function calculateTotalDone(){
        const habitsDone = []
        todayHabit.map((h) => {
            if (h.done === true)
            habitsDone.push(h.done)
        })
        return(habitsDone.length)
    } 

    console.log(totalDone)

    return(
        
        <Container>
            {percentage.toFixed(2)}% Concluído
        </Container>
    )
}

const Container = styled.div`
`
