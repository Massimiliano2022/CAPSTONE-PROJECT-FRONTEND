import { Link } from 'react-router-dom';
import logo from '../img/DigitFin.png'
import { Container, Nav, Navbar } from "react-bootstrap";


const MyNav = () => {
    return (
        <Navbar expand="md" className="bg-body-tertiary sticky-top" style={{ background: "#2d2d2d" }}>
            <Container fluid className="px-5">
                <Navbar.Brand>
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" style={{ width: "175px" }} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-3 shadow-none" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link to={"/"} className="text-light nav-link">Deposita</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/"} className="text-light nav-link">Crypto</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/"} className="text-light nav-link">Wallet</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/"} className="text-light nav-link">Operazioni</Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="justify-content-end">    
                        <Link
                            to={"/"}
                            style={{ background: "#454545" }}
                            className="nav-link text-light text-center rounded rounded-1 rounded-start-0 p-2"
                        >
                            Accedi
                        </Link>
                        <Link
                            to={"/"}
                            style={{background:"#EBB60B"}}
                            className="nav-link text-dark text-center rounded rounded-1 rounded-start-0 p-2"
                        >
                            Registrati
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default MyNav;