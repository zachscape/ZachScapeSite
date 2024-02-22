import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import "./Footer.css";

export default function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { name: name, email: email, message: message };
    const baseUrl = 'http://localhost:3000'
    axios.post("http://localhost:3000/api/contact", data)
    .then(response => {
      console.log(response);
      response.json()
      setShowSuccess(true);
          console.log("success")
          setTimeout(() => {
            setShowSuccess(false);
          }, 10000);
    })
    .catch(error => {
      console.log(error);
    });
  };

  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="footer">
      {showSuccess && (
        <div className="message success" style={{ bottom: 0 }}>
        Success
      </div>
      )}

      <div className="footer-links">
        <a className="contact-link" onClick={handleShow}>
          Contact
        </a>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="main-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Send a message
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="contact-modal">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="name"
                value={name}
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email"
                value={email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                type="text"
                id="message"
                placeholder="message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" onClick={handleClose}>
                Send
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>

      <h1 className="copyright">Copyright ZachScape, All Rights Reserved.</h1>
    </div>
  );
}

