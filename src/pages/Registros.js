import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import {RiLogoutBoxRLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default function Registros() {
    const { userData } = useContext(UserContext);
    console.log(userData);
    return (
        <>
            <Header>
                <h1>Olá, {userData && userData.name}</h1>
                <RiLogoutBoxRLine />
            </Header>
            <WhiteBox>
                <h1>Não há registros de entrada ou saída</h1>
            </WhiteBox>
            <PlusMinus>
                <Link to ='/registros/entradas'>
                <div className="plus">
                    <span>+</span>
                    <h1>
                        Nova<br></br>entrada
                    </h1>
                </div>
                </Link>
                <Link to ='/registros/saidas'>
                <div className="minus">
                    <span>-</span>
                    <h1>
                        Nova<br></br>saída
                    </h1>
                </div>
                </Link>
            </PlusMinus>
        </>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    h1{
        color:white;
        font-size: 2em;
    }
    svg{
        color: white;
        font-size: 2em;
    }
`
const WhiteBox = styled.ul`
    background:white;
    border-radius:5px;
    height: 67vh;
    width: 86vw;
    margin: 0 auto;
    h1{
        text-align: center;
        padding-top: 60%;
        font-size: 1.3rem;
        color: gray;
    }
`
const PlusMinus = styled.div`
    color: white;
    display: flex;
    width: 86vw;
    height: 18.5vh;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 15px;
    .plus{
        cursor: pointer;
        background: #A328D6;
        width: 48.5%;
        border-radius:5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1.5rem;
        padding: 10px;
    }
    .minus{
        cursor: pointer;
        background: #A328D6;
        width: 48.5%;
        border-radius:5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1.5rem;
        padding: 10px;
    }
    h1{
        margin-top: 20px;
    }

`