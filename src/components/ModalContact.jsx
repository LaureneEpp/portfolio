import Modal from "react-bootstrap/Modal";

export default function ModalContact(props) {
  return (
    <Modal
      {...props}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact me</Modal.Title>
      </Modal.Header>
      <Modal.Body>laurene.eppelle@gmail.com</Modal.Body>
    </Modal>
  );
}
