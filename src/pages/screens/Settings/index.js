import React, { useState } from "react";
import Header from "../../../components/header";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tables from "../../../components/Tables";

// import { Container } from './styles';

function Settings() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid home">
        <div className="col-12 text-center">
          <Header />
          <h1>settings Page...</h1>
          <div className="mt-4">
         
          </div>
        </div>
      </div>
      <div>
       
      </div>


{/* <!-- Modal --> */}
<div className="container-fluid ">
      <div className=" col-12 setting_Box  ">
        <div
          className="main_whitebox "
          style={{

          }}
        >
<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>


      <div>
        <Tables table1={true}/>
      </div>
      </div>
      </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Settings;
