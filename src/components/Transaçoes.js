import React from 'react';
import styled from 'styled-components';

export default function Transacoes() {

    const [buttonDisabled, setButtonDisabled] = useState(false);
    return (
        <>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <InputWrapper>
                <form onSubmit={(event) => submitForm(event)}>
                    <input type="number" placeholder="Valor">
                    </input>
                    <input type="text" placeholder="Descrição">
                    </input>
                </form>
            </InputWrapper>
            
        </>
    )
}
const Header = styled.div`
    padding: 20px;
    h1{
        color: white;
        font-weight: bold;
    }
`
const InputWrapper = styled.div`
    input{
        border-radius: 5px;
        margin-bottom:10px;
        height: 50px;
        padding: 0 15px;
        font-size: 1.5rem;
        font-family:inherit;
    }
`
const Button = styled.button`
        font-size: 1.5rem;
        border-radius: 5px;
        background: ${props => props.color};
        height: 50px;
        color:#FFF;
        font-family:inherit;
        margin-bottom: 20px;
        cursor:pointer;
`