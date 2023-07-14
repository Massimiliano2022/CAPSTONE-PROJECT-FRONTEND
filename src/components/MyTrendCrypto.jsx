import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'
import { Card, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentCryptoData } from '../redux/actions'

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

const MyTrendCrypto = ({ selectedCrypto }) => {
    const cryptosPrice = useSelector(state => state.currentCryptoData.cryptoData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentCryptoData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCrypto]);

    const filteredCryptosPrice = cryptosPrice.filter(crypto => crypto.simbolo !== selectedCrypto.simbolo);

    return (
        <Card style={{ background: "#2d2d2d" }}>
            <Card.Body>
                <Card.Title className="mb-3">Crypto di tendenza</Card.Title>
                <Table className='text-light m-0'>
                    <tbody className="d-flex flex-column">
                        {filteredCryptosPrice.map(crypto => (
                            <tr key={crypto.id} className="d-flex flex-row justify-content-between align-items-center">
                                <td className="d-flex align-items-center p-0">
                                    <img src={cryptoLogos[crypto.simbolo.toLowerCase()]} alt={`${crypto.nome} Logo`} width={30} className="img-fluid object-fit-cover" />
                                    <span className="fs-6 ms-2">{crypto.simbolo}</span>
                                </td>
                                <td className="fs-6">$ {crypto.prezzo.toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
export default MyTrendCrypto;