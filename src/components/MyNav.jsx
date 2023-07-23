import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../img/DigitFin.png'
import { Button, Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccessReset, removeUtenteCorrente, removeWalletUtenteCorrente } from '../redux/actions';
import { BiSolidHome, BiSolidWallet } from 'react-icons/bi';
import { RiExchangeBoxFill } from "react-icons/ri";
import { BsFillPersonFill } from 'react-icons/bs';

const MyNav = () => {

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const dispatch = useDispatch();

    const navigator = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(removeUtenteCorrente());
        dispatch(removeWalletUtenteCorrente());
        dispatch(loginSuccessReset());
        navigator('/');
    };

    return (
        <>
            {/*INIZIO MOBILE DEVICE NAV */}
            <Navbar className="text-light text-center fixed-bottom d-flex justify-content-evenly d-sm-flex d-md-none" variant="dark" style={{ background: "#2d2d2d" }}>
                <NavLink to={"/"} className="nav-link d-flex flex-column align-items-center" activeclassname="active">
                    <BiSolidHome className='fs-3' />
                    Home
                </NavLink>
                <NavLink to={"/mercati"} className="nav-link d-flex flex-column align-items-center" activeclassname="active">
                    <RiExchangeBoxFill className='fs-3' />
                    Mercati
                </NavLink>
                <NavLink to={"/wallet"} className="nav-link d-flex flex-column align-items-center" activeclassname="active">
                    <BiSolidWallet className='fs-3' />
                    Wallet
                </NavLink>
                {utenteCorrente && utenteCorrente.utente ? (
                    <>
                        <Button
                            onClick={handleClick}
                            className="nav-link d-flex flex-column align-items-center btn btn-link" activeclassname="active"
                        >
                            <BsFillPersonFill className='fs-3' />
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <NavLink to={"/login"} className="nav-link d-flex flex-column align-items-center" activeclassname="active">
                            <BsFillPersonFill className='fs-3' />
                            Accedi
                        </NavLink>
                    </>
                )}
            </Navbar>
            {/*FINE MOBILE DEVICE NAV */}

            {/* INIZIO MEDIUM E LARGE DEVICE NAV */}
            <Navbar expand="md" className="sticky-top d-none d-md-block" variant="dark" style={{ background: "#2d2d2d" }}>
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
                                    <DropdownButton id="dropdown-basic-button" variant="warning" menuVariant="dark" title={`${utenteCorrente.utente.nome} ${utenteCorrente.utente.cognome}`}>
                                        <Dropdown.Item >
                                            <Link to={"/wallet"} className="nav-link">
                                                Wallet
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item >
                                            <Button
                                                onClick={handleClick}
                                                activeclassname="active"
                                                className="nav-link btn btn-link bg-dark text-light text-center rounded rounded-1 rounded-start-0 p-2 w-100"
                                            >
                                                Logout
                                            </Button>
                                        </Dropdown.Item>
                                    </DropdownButton>
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
                                        style={{ color: "black" }}
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
            {/*FINE MEDIUM E LARGE DEVICE NAV */}
        </>
    );
}
export default MyNav;