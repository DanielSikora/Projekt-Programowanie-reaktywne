import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./NavBarComponent";
import Cards from "./Cards";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {


    const [films, setFilms] = useState([])
    const getFilms = () => {
        axios.get('http://localhost:3001/api/posts')
            .then((restore) => {
                setFilms(restore.data)
            })
    }

    

    useEffect(() => {
        getFilms()
    }, [])


    return (
        <>

            <NavBarComponent></NavBarComponent>
            <div className={'home'}>
                <Cards films={films} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}></Cards>
                <Footer></Footer>
            </div>
            


        </>
    );
}

export default Home;




