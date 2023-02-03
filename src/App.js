import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import AddFilm from "./components/AddFilm";
import React from "react";
import Details from "./components/Details";
import {decodeToken, isExpired} from "react-jwt";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="signin" element={!isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <Login/>} />
                <Route path="signup" element={!isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <Register/>} />
                <Route path="/add" element={<AddFilm/>}></Route>
                <Route path="/details" element={<Details/>}></Route>
            </Routes>
        </>
    );
}
export default App;
