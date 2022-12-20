import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import AddFilm from "./components/AddFilm";
import React from "react";
import Details from "./components/Details";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/signin" element={<Login/>}></Route>
                <Route path="/signup" element={<Register/>}></Route>
                <Route path="/add" element={<AddFilm/>}></Route>
                <Route path="/details" element={<Details/>}></Route>
            </Routes>
        </>
    );
}
export default App;
