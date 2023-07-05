import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../img/DigitFin.png'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { removeUtenteCorrente } from '../redux/actions';


const MyNav = () => {

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const dispatch = useDispatch();

    const navigator=useNavigate();

    console.log(utenteCorrente);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(removeUtenteCorrente());
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
                        {utenteCorrente ? (
                            <Button
                                onClick={handleClick}
                                className="btn btn-dark nav-link text-center rounded rounded-1 rounded-start-0 p-2"
                                style={{ background: "#454545" }}
                            >
                                Logout
                            </Button>
                        ) : (
                            <>
                                <NavLink
                                    to={"/login"}
                                    activeclassname="active"
                                    style={{ background: "#454545" }}
                                    className="nav-link text-center rounded rounded-1 rounded-start-0 p-2"
                                >
                                    Accedi
                                </NavLink>
                                <NavLink
                                    to={"/signup"}
                                    activeclassname="active"
                                    className="btn btn-warning text-dark nav-link text-center rounded rounded-1 rounded-start-0 p-2"
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