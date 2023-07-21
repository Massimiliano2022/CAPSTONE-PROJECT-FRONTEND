import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'
import { Card } from 'react-bootstrap'
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

    const dispatch = useDispatch();

    const cryptosPrice = useSelector(state => state.currentCryptoData.cryptoData);

    useEffect(() => {
        dispatch(getCurrentCryptoData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCrypto]);

    const filteredCryptosPrice = cryptosPrice.filter(crypto => crypto.simbolo !== selectedCrypto.simbolo);

    return (
        <Card className='h-100' style={{ background: "#2d2d2d"}}>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className="mb-3">Crypto di tendenza</Card.Title>
                <div>
                    {filteredCryptosPrice.map(crypto => (
                        <div key={crypto.id} className="d-flex flex-row justify-content-between align-items-center py-2">
                            <div className="d-flex align-items-center p-0 border-0">
                                <img src={cryptoLogos[crypto.simbolo.toLowerCase()]} alt={`${crypto.nome} Logo`} width={35} className="img-fluid object-fit-cover" />
                                <Card.Text className="ms-2">{crypto.simbolo}</Card.Text>
                            </div>
                            <div>
                                <Card.Text className="">$ {crypto.prezzo.toFixed(4)}</Card.Text>
                            </div>
                        </div>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};
export default MyTrendCrypto;