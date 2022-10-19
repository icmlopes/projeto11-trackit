import GlobalStyle from "./assets/styles/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import HabitsPage from "./pages/HabitsPage"
import TodayPage from "./pages/TodayPage"
import HistoryPage from "./pages/HistoryPage"

export default function App(){
    return (
        <BrowserRouter>
            <ContainerScreen>
                <GlobalStyle/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/cadastro" element={<RegisterPage/>} />
                    <Route path="/hoje" element={<TodayPage/>}/>
                    <Route path="/habitos" element={<HabitsPage/>}/>
                    <Route path="/historico" element={<HistoryPage/>}/>
                </Routes>
            </ContainerScreen>
        </BrowserRouter>
    )
}

const ContainerScreen = styled.div`
background-color: #FFFFFF; 
width: 50vh;
height: 100vh;
margin: 0 auto;
`