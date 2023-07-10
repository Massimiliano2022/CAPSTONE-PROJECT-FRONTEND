import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../img/DigitFin.png'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { removeUtenteCorrente, removeWalletUtenteCorrente } from '../redux/actions';


const MyNav = () => {

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const dispatch = useDispatch();

    const navigator = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(removeUtenteCorrente());
        dispatch(removeWalletUtenteCorrente());
        navigator('/');
    };

    return (
        <Navbar expand="md" className="sticky-top" variant="dark" style={{ background: "#2d2d2d" }}>
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
                            <NavLink to={"/"} className="nav-link" activeclassname="active">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to={"/mercati"} className="nav-link" activeclassname="active">Mercati</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to={"/wallet"} className="nav-link" activeclassname="active">Wallet</NavLink>
                        </Nav.Item>
                        {/*<Nav.Item>
                            <Link to={"/"} className="nav-link">Deposita</Link>
                        </Nav.Item>*/}
                    </Nav>
                    <Nav className="justify-content-end">
                        {utenteCorrente && utenteCorrente.utente ? (
                            <>
                                <NavLink to={"/wallet"} className="nav-link text-muted">
                                    Utente: 
                                    <span className="text-light"> {utenteCorrente.utente.nome} {utenteCorrente.utente.cognome}</span>
                                </NavLink>
                                <Button
                                    onClick={handleClick}
                                    className="btn btn-dark nav-link text-light text-center rounded rounded-1 rounded-start-0 p-2"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to={"/login"}
                                    className="btn btn-dark nav-link text-light text-center rounded rounded-1 rounded-start-0 p-2"
                                >
                                    Accedi
                                </NavLink>
                                <NavLink
                                    to={"/signup"}
                                    style={{color:"black"}}
                                    className="btn btn-warning nav-link text-center rounded rounded-1 rounded-start-0 p-2"
                                >
                                    Registrati
                                </NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default MyNav;