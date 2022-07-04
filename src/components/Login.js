import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


export default function Login({ setToken, URL_BACK }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(<p></p>);

    const navigate = useNavigate();

    useEffect(() => {

        const tokenExist = localStorage.getItem("token");

        if (tokenExist) {
            setToken(tokenExist);
            navigate("/");
        }
    }, []);

    function loginForm(e) {
        e.preventDefault();

        const promise = axios.post(URL_BACK + "/login", {
            email,
            password
        });

        promise.then(res => {
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
            navigate("/");
        });

        promise.catch(err => {
            setError(<p>Email e/ou senha incorretos</p>);
            console.log(err);
        });
    }

    return (
        <LoginStyle>
            <h1>MyWallet</h1>
            <form onSubmit={loginForm}>
                <input
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">
                    Entrar
                </button>
            </form>
            {error}
            <Link to="/signUp">
                Primeira vez? Cadastre-se!
            </Link>
        </LoginStyle>
    );
}

export const LoginStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: "Saira Stencil One", cursive;
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form > input {
        height: 58px;
        width: 326px;
        border-radius: 5px;
        border: 0;  
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 13px;
        font-size: 20px;

        &:hover {
            cursor: pointer;
          }
    }

    form > button {
        height: 46px;
        width: 326px;
        border-radius: 5px;
        border: 0;
        font-size: 20px;
        font-weight: 700;
        background-color: #A328D6;
        color: #FFFFFF;

        &:hover {
            cursor: pointer;
          }
    }

    p {
        margin-top: 4px;
        height: 16px;
        font-size: 15px;
        font-weight: 700;
        color: #C70000;
    }

    a {
        font-size: 15px;
        font-weight: 700;
        color: #FFFFFF;
        text-decoration: none;
        margin-top: 16px;
    }
`;