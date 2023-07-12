import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'
import usdtLogo from '../img/usdt.png'

import { Card, Table } from "react-bootstrap";

const MyAssetTable = ({ walletCorrente }) => {

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

    const oggettoSaldo = {
        crypto: {
            simbolo: "USDT",
            prezzo: 1.00
        },
        quantita: walletCorrente.saldoDisponibile
    }

    const updatedListaAsset = [...walletCorrente.listaAsset, oggettoSaldo];

    return (
        <Card className="my-4" style={{ background: "#2d2d2d" }}>
            <Card.Body>
                <Table className='text-light m-0'>
                    <tbody className="d-flex flex-column">
                        {updatedListaAsset && updatedListaAsset.map(asset => (
                            <tr key={asset.crypto.simbolo} className="d-flex flex-row justify-content-between align-items-center my-2">
                                <td className="d-flex align-items-center p-0">
                                    <img src={cryptoLogos[asset.crypto.simbolo.toLowerCase()]} alt={`${crypto.nome} Logo`} width={40} className="img-fluid object-fit-cover" />
                                    <span className="ms-2">{asset.crypto.simbolo}</span>
                                </td>
                                <td className="d-flex flex-column text-end">
                                    {asset.quantita.toFixed(2)}
                                    <p className="text-muted">$ {(asset.crypto.prezzo * asset.quantita).toFixed(2)}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
export default MyAssetTable;