import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function Cards(props) {
    return (
        <>
            <div className={'cardView'}>
                {props.films.map((film, index) => (

                    <Card style={{width: '20%', backgroundColor: '#1C7293'}}>
                        <Card.Img variant="top" style={{width: '100%', height: '80%', backgroundColor: '#1C7293'}}
                                  src={film.image}/>
                        <Card.Body styles={{}}>
                            <Card.Title styles={{textAlign: 'center'}}>{film.title}</Card.Title>
                            <Link to='/details' state={{film: film}}><Button variant="primary">Strona
                                filmu</Button></Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>


        </>
    );
}

export default Cards;
