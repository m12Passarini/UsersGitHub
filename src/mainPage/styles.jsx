import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    padding: 0.2rem;
`;

export const Logo = styled.div ``;

export const Title = styled.h1 `
    color: #FFF;
    font-size: 2.5rem;
    padding-bottom: 5rem;
`;

export const Form = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 583px;
`;


export const Input = styled.input `
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 64px;
    line-height: 64px;
    border: none;
    font-size: 24px;
    margin-right: 24px;
    padding: 0 24px;
    color: #FFF;
`;

export const Button = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #191919;
    width: 80px;
    height: 64px;
    border: 2px solid #FFF;
    transition: background 0.3s;
`;
