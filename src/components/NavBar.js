import styled from "styled-components";

export default function NavBar(){
    return(
        <ContainerNav>
            <Items>
                <h1>TrackIt</h1>
                <img src="https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj" alt="foto perfil"/>
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
