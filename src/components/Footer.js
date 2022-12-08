import Card from 'react-bootstrap/Card';
import {CardGroup} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <>
            <div>
                <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
                    <div className="container text-center">
                        <small>Copyright &copy; Daniel Sikora</small>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;
