import { BsDiscord,BsTelegram,BsTwitter,BsInstagram } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () =>{
    return(
        <>
        <Container fluid className="d-none d-md-block py-5" style={{background: "#2d2d2d"}}>
            <Row className="d-flex text-light px-5">
                <Col className="p-0">
                    <p className="fs-5 mb-1">Chi siamo</p>
                    <p className="fs-5 m-0 text-muted">Informazioni</p>
                    <p className="fs-5 m-0 text-muted">Privacy</p>
                    <p className="fs-5 m-0 text-muted">Avvisi</p>
                    <p className="fs-5 m-0 text-muted">Annunci</p>
                    <p className="fs-5 m-0 text-muted">Notizie</p>
                </Col>
                <Col className="p-0">
                    <p className="fs-5 mb-1">Prodotti</p>
                    <p className="fs-5 m-0 text-muted">Exchange</p>
                    <p className="fs-5 m-0 text-muted">Accademy</p>
                    <p className="fs-5 m-0 text-muted">NFT</p>
                    <p className="fs-5 m-0 text-muted">Report fiscale</p>
                </Col>
                <Col className="p-0">
                    <p className="fs-5 mb-1">Servizio</p>
                    <p className="fs-5 m-0 text-muted">Download</p>
                    <p className="fs-5 m-0 text-muted">Applicazione desktop</p>
                    <p className="fs-5 m-0 text-muted">Acquista criptovalute</p>
                    <p className="fs-5 m-0 text-muted">Referral</p>
                    <p className="fs-5 m-0 text-muted">Affiliate</p>
                </Col>
                <Col className="p-0">
                    <p className="fs-5 mb-1">Supporto</p>
                    <p className="fs-5 m-0 text-muted">Centro di supporto</p>
                    <p className="fs-5 m-0 text-muted">Chat di supporto</p>
                    <p className="fs-5 m-0 text-muted">Commissioni</p>
                    <p className="fs-5 m-0 text-muted">Regole di trading</p>
                </Col>
                <Col className="p-0">
                    <p className="fs-5 mb-1">Apprendi</p>
                    <p className="fs-5 m-0 text-muted">Learn & Earn</p>
                    <p className="fs-5 m-0 text-muted">Esplora i prezzi crypto</p>
                    <p className="fs-5 m-0 text-muted">Prezzo Bitcoin</p>
                    <p className="fs-5 m-0 text-muted">Prezzo Ethereum</p>
                </Col>
                <Col className="p-0">
                    <p className="fs-5 mb-1">Community</p>
                    <div className="d-flex flex-row mt-2">
                        <BsDiscord className="fs-5 me-2 text-muted"/>
                        <BsTelegram className="fs-5 me-2 text-muted"/>
                        <BsTwitter className="fs-5 me-2 text-muted"/>
                        <BsInstagram className="fs-5 me-2 text-muted"/>
                    </div>
                </Col>                 
            </Row>
        </Container>    
        </>        
    );
}
export default MyFooter;