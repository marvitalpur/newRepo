import React from 'react';
import { Modal } from "react-bootstrap";

// import { Container } from './styles';

function modal1() {
  return (
    <>
    <div>
    <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <FiCheckCircle size={100} color="#f54d83" />
          <h3 className="mt-3">Profile updated Successfully</h3>
        </Modal.Body>

        <div className="col-12 d-flex justify-content-center mt-3 mb-3">
          <button
            onClick={() => {
              setShow(false);
            }}
            style={{
              fontSize: "1.4rem",
              backgroundColor: "#f54d83",
              paddingTop: "0.7rem",
              paddingBottom: "0.7rem",
              paddingInline: "2rem",
              color: "white",
              border: "none",
              textTransform: "capitalize",
              borderRadius: "1rem",
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
    </>
  )
}

export default modal1;