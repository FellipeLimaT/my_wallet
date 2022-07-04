import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


export default function Entry({ URL_BACK, token, entry }) {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(<p></p>);

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, []);

    function entryForm(e) {
        e.preventDefault();

        const promise = axios.post(URL_BACK + "/account", {
            entry,
            value: Number(value),
            description
        }, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })

        promise.then(res => {
            navigate("/");
        });

        promise.catch(err => {
            if (err.response.status === 400) {
                setError(<p>Preencha os campos corretamente</p>);
            } else if (err.response.status === 401) {
                navigate("/");
            } else {
                alert("Erro ao salvar a transação. Tente novamente!");
            }
            console.log(err);
        });

    }

    return (
        <EntryStyle>
            <Header>
                <h1>Nova {entry === "credit" ? "entrada" : "saída"}</h1>
            </Header>
            <form onSubmit={entryForm}>
                <input
                    type="number"
                    value={value}
                    placeholder="Valor"
                    onChange={e => setValue(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={description}
                    placeholder="Descrição"
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <button type="submit">
                    Salvar {entry === "credit" ? "entrada" : "saída"}
                </button>
            </form>
            {error}
        </EntryStyle>
    );
}

const EntryStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

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
`;

const Header = styled.div`
    width: 84vw;
    height: 12vh;
    
    display: flex;
    align-items: center;
    justify-content: space-between;   

    h1 {
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
    }
`;