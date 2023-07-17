import { Button, Modal } from "react-bootstrap";

const MyOperazioneModal = ({ showModal, handleCloseModal, modalTitle, modalMessage}) => {

    const handleClose = () => {
        handleCloseModal();
    }

    return (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="text-white">
            <Modal.Header className="text-white" style={{ background: "#2d2d2d" }} closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: "#2d2d2d" }}>
                <p className="m-0 fs-5">{modalMessage}</p>
            </Modal.Body>
            <Modal.Footer style={{ background: "#2d2d2d" }}>
                <Button variant="warning" onClick={handleClose}>Chiudi</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyOperazioneModal;