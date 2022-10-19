import styled from "styled-components"
import logo  from "../assets/img/Logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "../components/useForm"
import axios from "axios"



export default function RegisterPage(){

    const [form, handleForm] = useForm({email:"", name:"", image:"", password:""});
    const navigate = useNavigate()


    function register(event){
        event.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
         const promise = axios.post(URL, form)

         promise.then(() => navigate("/"))

         promise.catch((err) => {
            console.log(err.response.data)
         })
    }

    return(
        <Container>
            <ContainerLogo>
                <img src={logo} alt="logo"></img>
            </ContainerLogo>
            <ContainerForm onSubmit={register}> 
                    <input
                        type="email" required
                        name="email"
                        placeholder="email"
                        value={form.email}    
                        onChange={handleForm}               
                    />

                    <input
                        type="password" required
                        name="password"
                        placeholder="senha"  
                        value={form.password}  
                        onChange={handleForm}                       
                    />

                    <input
                        type="text" required
                        name="name"
                        placeholder="nome"
                        value={form.name}  
                        onChange={handleForm}     
                    />

                    <input
                        type="url" required
                        name="image"
                        placeholder="foto"
                        value={form.image}  
                        onChange={handleForm}     
                    />
            
                    <button type="submit">
                        Cadastrar
                    </button>
        
            </ContainerForm>
            <Link to ={`/`}>
                    <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
p{
    color: #52B6FF;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: center;
}
`

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
`