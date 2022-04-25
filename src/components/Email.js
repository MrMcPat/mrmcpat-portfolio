import React, {useRef} from 'react'
import Modal from "react-bootstrap/Modal"
import emailjs from '@emailjs/browser'

function Email({show, handleClose}) {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          })
          e.target.reset()
      }

  return (
    <Modal className="email" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Email me!</Modal.Title>
    </Modal.Header>
    <form ref={form} onSubmit={sendEmail}>
    <Modal.Body style={{textAlign: "center"}}>
      <label>Name</label><br />
      <input type="text" name="name" /><br />
      <label>Email</label><br />
      <input type="email" name="email" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
    </Modal.Body>
    <Modal.Footer>
      <button variant="secondary" onClick={handleClose}>
        Close
      </button>
      <button type="submit">Send</button>
    </Modal.Footer>
    </form>
  </Modal>
  )
}

export default Email