import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'
import usdtLogo from '../img/usdt.png'

import { Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyMainTablePrice = ({ cryptosPrice }) => {

    const cryptoLogos = {
        btc: btcLogo,
        eth: ethLogo,
        ada: adaLogo,
        dot: dotLogo,
        matic: maticLogo,
        xrp: xrpLogo,
        doge: dogeLogo,
        sand: sandLogo,
        usdt: usdtLogo
    };

    return (
        <Col className='p-0'>
            <Table className='text-light m-0 table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Prezzo</th>
                        <th>Variazione % 1h</th>
                        <th>Compra</th>
                        <th>Vendi</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptosPrice.map((crypto) => (
                        <tr key={crypto.id} className="border-1 align-middle">
                            <td><p className='mb-0'>{crypto.id}</p></td>
                            <td style={{ width: "25%" }}>
                                <div className='d-flex align-items-center'>
                                    <img src={cryptoLogos[crypto.simbolo.toLowerCase()]} alt={`${crypto.nome} Logo`} width={35} className="img-fluid object-fit-cover me-3" />
                                    <p className='mb-0'>{crypto.nome} <span className='text-muted'>{crypto.simbolo}</span></p>
                                </div>
                            </td>
                            <td><p className='text-start mb-0'>{crypto.prezzo ? crypto.prezzo.toFixed(4) : ''}</p></td>
                            <td><p className='text-start mb-0' style={{ color: crypto.percententuale_variazione_1h < 0 ? "#E31903" : "#0FC67E" }}>{crypto.percententuale_variazione_1h}</p></td>
                            <td>
                                <Link
                                    to={`/mercati/crypto/${crypto.simbolo.toLowerCase()}`}
                                    className="btn btn-success nav-link text-light rounded rounded-1 py-1">
                                    Compra
                                </Link>
                            </td>
                            <td>
                                <Link
                                    to={`/mercati/crypto/${crypto.simbolo.toLowerCase()}`}
                                    className="btn btn-danger nav-link text-light rounded rounded-1 py-1"
                                >
                                    Vendi
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>
    );
}
export default MyMainTablePrice;