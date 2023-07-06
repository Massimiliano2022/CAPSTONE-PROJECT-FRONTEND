import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'

import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const cryptoLogos = {
    btc: btcLogo,
    eth: ethLogo,
    ada: adaLogo,
    dot: dotLogo,
    matic:maticLogo,
    xrp:xrpLogo,
    doge:dogeLogo,
    sand:sandLogo
};

const MyCryptoCard = ({ crypto }) => {

    //console.log(crypto);

    const cryptoSymbol = crypto.simbolo.toLowerCase();
    const variazionePercentuale = crypto.percententuale_variazione_1h.toFixed(2);
    const prezzo = crypto.prezzo.toFixed(2);
    const variazioneColor = crypto.percententuale_variazione_1h < 0 ? "#E31903" : "#0FC67E";

    return (
        <Col md={6}>
            <Link to={`/crypto`} className="nav-link">
                <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                    <Card.Body>
                        <img src={cryptoLogos[cryptoSymbol]} alt='Bitcoin Logo' width={50} className="img-fluid object-fit-cover" />
                        <div className='d-flex justify-space-between py-4'>
                            <Col className="me-2">
                                <Card.Text>{crypto.simbolo}/USDT</Card.Text>
                            </Col>
                            <Col className="me-2">
                                <Card.Text>{prezzo} $</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text style={{color:variazioneColor}}>{variazionePercentuale}</Card.Text>
                            </Col>
                        </div>
                        <Button
                            type="button"
                            variant="success"
                            className="text-light rounded rounded-1 me-3"
                        >
                            Compra
                        </Button>
                        <Button
                            type="button"
                            variant="danger"
                            className="text-light rounded rounded-1"
                        >
                            Vendi
                        </Button>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}
export default MyCryptoCard;