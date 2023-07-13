import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'
import usdtLogo from '../img/usdt.png'

import { Card, Spinner, Table } from "react-bootstrap";
import { useEffect, useState } from 'react'

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

    const [updatedListaAsset, setUpdatedListaAsset] = useState([]);
    const [totaleParzialeSaldo, setTotaleParzialeSaldo] = useState();

    useEffect(() => {
        if (walletCorrente && walletCorrente.listaAsset) {
            const oggettoSaldo = {
                crypto: {
                    simbolo: "USDT",
                    prezzo: 1.0,
                },
                quantita: walletCorrente.saldoDisponibile,
            };

            const updatedListaAsset = [...walletCorrente.listaAsset, oggettoSaldo];
            setUpdatedListaAsset(updatedListaAsset);

            setTotaleParzialeSaldo(updatedListaAsset.reduce((total, asset) => total + (asset.crypto.prezzo * asset.quantita), 0).toFixed(2));

        }
    }, [walletCorrente]);

    return (
        <>
            {!walletCorrente && !walletCorrente.listaAsset && !totaleParzialeSaldo ? (
                <div className="d-flex justify-content-center align-items-center" >
                    <Spinner animation="grow" variant="warning" />
                </div>
            ) : (
                <Card className="my-4" style={{ background: "#2d2d2d" }}>
                    <Card.Body>
                        <Table className='text-light m-0'>
                            <tbody className="d-flex flex-column">
                                <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                    <td className="d-flex align-items-center p-0">
                                        <h5>Saldo totale :</h5>
                                    </td>
                                    <td className="d-flex flex-column text-end">
                                        <h5>$ {totaleParzialeSaldo}</h5>
                                    </td>
                                </tr>
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
            )}
        </>
    );
}
export default MyAssetTable;