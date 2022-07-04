import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Entry from './Entry.js';

export default function App() {

    const URL_BACK = "https://projeto13-mywallet-back-main.herokuapp.com";

    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [entry, setEntry] = useState("");

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/' 
                    element={
                        <Home 
                            name={name} 
                            setEntry={setEntry} 
                            setName={setName} 
                            token={token}
                            URL_BACK={URL_BACK}
                        />} 
                />
                <Route 
                    path='/login' 
                    element={
                        <Login 
                            setToken={setToken}
                            URL_BACK={URL_BACK}
                        />}
                />
                <Route 
                    path='/signUp' 
                    element={
                        <SignUp 
                            URL_BACK={URL_BACK}
                        />}
                    />
                <Route 
                    path='/entry' 
                    element={
                        <Entry 
                            token={token} 
                            entry={entry}
                            URL_BACK={URL_BACK}
                        />}
                />
            </Routes>
        </BrowserRouter>
    );
}