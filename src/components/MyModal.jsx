import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyModal = ({title, body, showModal, setShowModal}) => {
  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton onClick={() => setShowModal(false)}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => setShowModal(false)} variant="danger">Close</Button>
      </Modal.Footer>
    </Modal>
    </div>

  )
}

export default MyModal