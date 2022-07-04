import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginStyle } from "./Login.js";

export default function SignUp({ URL_BACK }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState(<p></p>);

    const navigate = useNavigate();

    function signUpForm(e) {
        e.preventDefault();

        const promise = axios.post(URL_BACK + "/signUp", {
            name,
            email,
            password
        })
        
        if (password !== passwordConfirmation) {
            setError(<p>As senhas devem ser iguais!</p>);
            return;
        }

        promise.then(res => {
            navigate("/login");
        });

        promise.catch(err => {
            if (err.response.status === 400) {
                setError(<p>A senha deve ter no mínimo 6 dígitos!</p>);
                setPassword("");
                setPasswordConfirmation("");
            } else if (err.response.status === 409) {
                setError(<p>Esse e-mail já foi cadastrado!</p>);
            } else {
                alert("Erro ao realizar o cadastro. Tente novamente!");
            }
            console.log(err);
        });

    }

    return (
        <LoginStyle>
            <h1>MyWallet</h1>
            <form onSubmit={signUpForm}>
                <input
                    type="text"
                    value={name}
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                    required
                />
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
                <input
                    type="password"
                    value={passwordConfirmation}
                    placeholder="Confirme a senha"
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    required
                />
                <button type="submit">
                    Cadastrar
                </button>
            </form>
            {error}
            <Link to="/login">
                Já tem uma conta? Entre agora!
            </Link>
        </LoginStyle>
    )
}

