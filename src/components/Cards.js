import Card from 'react-bootstrap/Card';
import {CardGroup} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards(props) {
    return (
        <>

                    {props.films.map((film,index)=>(
                        <Card style={{ width: '18rem', backgroundColor: '#1C7293'}}>
                        <Card.Img variant="top" src={film.image}/>
                        <Card.Body styles={{ }}>
                            <Card.Title styles={{textAlign: 'center'}}>{film.title}</Card.Title>
                            <Link to ='/details' state={{film:film}}><Button variant="primary" >Strona filmu</Button></Link>
                        </Card.Body>
                    </Card>))}


        </>
    );
}

export default Cards;
