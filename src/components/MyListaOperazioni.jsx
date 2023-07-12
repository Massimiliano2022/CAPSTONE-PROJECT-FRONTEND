import { Card, Table } from "react-bootstrap";

const MyListaOperazioni = ({ lista }) => {

    console.log(lista);

    return (
        <Card className="mb-5 d-none d-sm-none d-md-block" style={{ background: "#2d2d2d" }}>
            <Card.Body>
                <Card.Title className="mb-3">Storico operazioni</Card.Title>
                <Table className='text-light m-0 wallet-table'>
                    <thead style={{ background: "#0B0E11" }}>
                        <tr>
                            <th>Data operazione</th>
                            <th>Tipo operazione</th>
                            <th>Crypto</th>
                            <th>Quantità</th>
                            <th>Prezzo acquisto</th>
                            <th>Prezzo vendita</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista && lista.map((operazione) => (
                            <tr key={operazione.id}>
                                <td>{operazione.dataOperazione}</td>
                                <td>{operazione.tipoOperazione}</td>
                                <td>{operazione.crypto.simbolo}</td>
                                <td>{operazione.quantita}</td>
                                <td>{operazione.prezzoAcquisto}</td>
                                <td>{operazione.prezzoVendita}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
export default MyListaOperazioni;