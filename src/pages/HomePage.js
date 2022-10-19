import styled from "styled-components";
import logo from "../assets/img/Logo.png"
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "../components/useForm"
import axios from "axios"


export default function Home() {

    const [form, handleForm] = useForm ({email:"", password:""})
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(URL, form)

        promise.then(() => navigate("/hoje"))

        promise.catch((err) => {
            console.log(err.renponse.data)
        })
    }

    return (
        <>
            <ContainerLogo>
                 <img src={logo} alt="logo" />
            </ContainerLogo>
            <ContainerForm onSubmit={login}>
                    <input
                        type="email" required
                        name="email"
                        value={(form.email)}
                        placeholder="email"     
                        onChange={handleForm}               
                    />

                    <input
                        type="password" required
                        name="password"
                        value={form.password}
                        placeholder="senha"  
                        onChange={handleForm}                   
                    />
    
                    <button type="submit">
                        Entrar
                    </button>

            </ContainerForm>
            <Link to ={`/cadastro`}>
                    <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </>
    )
}





const ContainerLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 100px;
img{
    width: 30vh;
}
`

const ContainerForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
input{
    width: 285px;
    height: 45px;
    margin-top: 10px;
    padding-left: 10px;
    border-radius: 4px;
    border: 2px solid #D4D4D4;
    color: #D4D4D4;
    font-size: 20px;
}
button{
    width: 300px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 4px;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 20px;
    border: none;
    margin-top: 10px;
    margin-bottom: 20px;
}
p{
    color: #52B6FF;
    font-size: 14px;
    font-weight: 400;
}
`
