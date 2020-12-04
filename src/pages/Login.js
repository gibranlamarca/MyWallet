import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function Login() {
    const [signUpState, setSignUpState] = useState(false);
    const history = useHistory();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const { setLogIn, setSignUp, logIn, signUp, setUserData } = useContext(UserContext);
    function submitForm(event) {
        event.preventDefault();
        if (signUpState) {
            trySignUp();
        } else tryLogin();
    }
    function tryLogin() {
        if (buttonDisabled) return;
        const cont = validateForm(logIn);
        if (cont === 0) {
            setButtonDisabled(true);
            const request = axios.post('http://localhost:3000/signin', logIn);

            request.then((response) => {
                const userData = {...response.data};
                console.log(userData);
                 localStorage.setItem('token', response.data.token);
                 localStorage.setItem('avatar',response.data.user.avatar);
                 localStorage.setItem('username',response.data.user.username);
                 localStorage.setItem('id',response.data.user.id);
                 localStorage.setItem('email',response.data.user.email);
                setUserData(userData);
                history.push('/registros');
            });
            request.catch((error) => {
                alert('E-mail/senha inválidos')
                setButtonDisabled(false);
            });
        }
    }
    function trySignUp() {
        const cont = validateForm(signUp);
        if (buttonDisabled) return;
        if (cont === 0) {
            setButtonDisabled(true);
            const request = axios.post('http://localhost:3000/signup', signUp);

            request.then((response) => {
                alert('Usuário cadastrado!');
                setSignUpState(false);
                setButtonDisabled(false);
            });
            request.catch((error) => {
                console.log(error);
                alert('Erro ao cadastrar! Verifique os campos!')
                setButtonDisabled(false);
            });
        }
    }
    function validateForm(obj) {
        let cont = 0;
        const entries = Object.entries(obj);
        entries.forEach(entrie => {
            if (entrie[1] === "") {
                cont++;
                alert(`Preencha o campo ${entrie[0]}`);
            }
        });
        return cont;
    }
    return (
        <>
            <Title>
                <h1>MyWallet</h1>
            </Title>
            <InputWrapper>
            <form onSubmit={(event) => submitForm(event)}>
                {
                    signUpState ?
                        <Form color={buttonDisabled ? 'lightgrey' : '#A328D6'}>
                            <input type="text" placeholder="Nome" value={signUp.username} onChange={e => setSignUp({ ...signUp, 'username': e.target.value })} />
                            <input type="email" placeholder="E-mail" value={signUp.email} onChange={e => setSignUp({ ...signUp, 'email': e.target.value })} />
                            <input type="password" placeholder="Senha" value={signUp.password} onChange={e => setSignUp({ ...signUp, 'password': e.target.value })} />
                            <input type="password" placeholder="Confirme a senha" value={signUp.confirmationPassword} onChange={e => setSignUp({ ...signUp, 'confirmationPassword': e.target.value })} />

                            <button type="submit">Cadastrar</button>
                        </Form>
                        :
                        <Form color={buttonDisabled ? 'lightgrey' : '#A328D6'}>
                            <input type="email" placeholder="e-mail" value={logIn.email} onChange={e => setLogIn({ ...logIn, 'email': e.target.value })} />
                            <input type="password" placeholder="password" value={logIn.password} onChange={e => setLogIn({ ...logIn, 'password': e.target.value })} />
                            <button type="submit">Entrar</button>
                        </Form>
                }
            </form>
            <span onClick={() => { setSignUpState(!signUpState) }}>
                {signUpState ? 'Já tem uma conta? Entre agora!' : 'Primeira vez? Cadastre-se!'}
            </span>
            </InputWrapper>
        </>
    )
}

const Title = styled.div`
    color: white;
    text-align: center;
    font-size: 2rem;
    margin-top: 30vh;
    align-items: center;
`
const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    margin-top: 20px;
    input{
        border-radius: 5px;
        margin-bottom:10px;
        height: 50px;
        padding: 0 15px;
        font-size: 1.5rem;
        font-family:inherit;
    }
    input::placeholder{
        color: rgba(159,159,159,0.8);
        font-weight: lighter;
    }
    button{
        font-size: 1.5rem;
        border-radius: 5px;
        background: ${props => props.color};
        height: 50px;
        color:#FFF;
        font-family:inherit;
        margin-bottom: 20px;
        cursor:pointer;
    }
    `;
const InputWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    span{
        border-bottom-width: 1px;
        border-bottom-style: solid;
        cursor: pointer;
        color: #FFF;
        font-size: 1rem;
        font-family:'Lato', sans-serif;
        letter-spacing: 1.2px;
    }
    `