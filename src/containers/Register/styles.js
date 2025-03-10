import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

import BackgroundLogin from '../../assets/background-login.svg'
import Background from '../../assets/background-padrao.svg'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover; //Tamanho da imagem (Cover, estica a imagem para ficar corretamente na tela)
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background}');
    background-color:rgb(53, 52, 52);

    p{
        color: #FFF;
        font-size: 18px;
        font-weight: 800;

        a {
            text-decoration: underline;
        }
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #9758A6;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 45px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #FFF;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color:rgb(223, 44, 53);
        font-weight: 600;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #FFF;
`
