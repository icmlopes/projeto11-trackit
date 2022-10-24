import styled from "styled-components";
import { InfoContext } from "../context/Info"
import { useContext } from "react"

export default function NavBar(){

    const {user, setUser} = useContext(InfoContext);

    return(

        <ContainerNav>
            <Items>
                <h1>TrackIt</h1>
                <img src={user.image} alt="foto perfil"/>
            </Items>
        </ContainerNav>
    )
}

const ContainerNav = styled.div`
background-color:#126BA5;
height: 70px; 
width: 50vh;
position: sticky;
top: 0;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
h1{
    font-family: playball;
    font-size: 39px;
    font-weight: 400;
    color: #FFFFFF;
}
img{
    width: 51px;
    height: 51px;
    border-radius: 100px;
}
`
const Items = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
padding-right: 10px;
padding-top: 8px;
`
