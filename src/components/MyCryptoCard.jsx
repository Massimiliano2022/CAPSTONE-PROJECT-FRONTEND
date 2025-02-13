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
    matic: maticLogo,
    xrp: xrpLogo,
    doge: dogeLogo,
    sand: sandLogo
};

const MyCryptoCard = ({ crypto }) => {

    const cryptoSymbol = crypto.simbolo.toLowerCase();
    const variazioneColor = crypto.percententuale_variazione_1h < 0 ? "#E31903" : "#0FC67E";

    return (
        <Col md={6} className='mb-4'>
            <Card className='h-100' style={{ background: "#2d2d2d", minHeight: "250px" }}>
                <Link to={`/mercati/crypto/${cryptoSymbol}`} className="nav-link h-100">
                    <Card.Body className='p-4 fs-6 h-100 d-flex flex-column justify-content-between'>
                        <img src={cryptoLogos[cryptoSymbol]} alt='Bitcoin Logo' width={50} className="img-fluid object-fit-cover" />
                        <div className='d-flex justify-content-between py-4'>
                            <Card.Text className='m-0 w-33.3'>{crypto.simbolo}/USDT</Card.Text>
                            <Card.Text className='m-0 w-33.3'>{crypto.prezzo.toFixed(4)} $</Card.Text>
                            <Card.Text className='m-0 w-33.3' style={{ color: variazioneColor }}>{crypto.percententuale_variazione_1h}</Card.Text>
                        </div>
                        <div className='d-flex justify-content-start'>
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
                        </div>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    );
}
export default MyCryptoCard;