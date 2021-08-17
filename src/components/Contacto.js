import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";

const Contacto = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button className="btn btn-grad shadow-none btn-primary" onClick={handleShow}>Contacto</Button>
  
            <Modal show={show} onHide={handleClose} contentClassName="border-0 shadow-none rounded-0">
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="text-dark font-weight-bold">Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-dark text-center font-weight-bold">
                    <p><span style={{color: "#f34595", fontWeight: "600"}} className="mr-2">T.</span> (993) 432 5614</p>
                    <p><span style={{color: "#f34595", fontWeight: "600"}} className="mr-2">C.</span> jesusgleztr94@gmail.com</p>
                    <p><span style={{color: "#f34595", fontWeight: "600"}} className="mr-2">C.</span> chuy_2808@hotmail.com</p>
                    <div className="social mt-3" style={{fontSize: "25px"}}>
                        <a style={{textDecoration: "none"}} href="https://www.facebook.com/angelotr12/" target="_blank" rel="noopener noreferrer"> <i className="devicon-facebook-plain colored mr-2"></i> </a>
                        <a style={{textDecoration: "none"}} href="https://github.com/epsilonxaos" target="_blank" rel="noopener noreferrer"> <i className="devicon-github-original colored mr-2"></i> </a>
                        <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/jesus-gonzalez-207819209" target="_blank" rel="noopener noreferrer"> <i className="devicon-linkedin-plain colored mr-2"></i> </a>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button className="btn btn-grad active" onClick={handleClose}> Cerrar </Button>
                </Modal.Footer>
            </Modal>
      </>
    )
}

export default Contacto;