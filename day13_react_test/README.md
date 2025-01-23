import React from "react";
import Modal from "./Modal";
import './App.css'
export default function App() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="main-div">
          <div className="primary-div">
            <button className="open" onClick={handleOpen}>Open me</button>
            <div className="modal">
            </div>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1>pranav</h1>
                    <h3>Making a modal</h3>
                </>
            </Modal>
            </div>
        </div>
    );
}


.main-div{
  align-items: center;
  justify-content: center;
  text-align: "center";
  height: 100vh;
  padding: 30;
  margin: "auto";
  position: relative;
}
.primary-div{
  z-index: 1;
}
.open{
  position: absolute;
  top: 400px;
  left:600px;
}
.modal{
  position: absolute;
  z-index:2;
}



.close-div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(51, 47, 47, 0.5);
}

.content {
    display: flex;
    flex-wrap:wrap;
    background: white;
    height: 240px;
    width: 240px;
    margin: auto;
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}



import React from "react";
import Modal from "./Modal";
import './App.css'
export default function App() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="main-div">
          <div className="primary-div">
            <button className="open" onClick={handleOpen}>Open me</button>
            <div className="modal">
            </div>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1>pranav</h1>
                    <h3>Making a modal</h3>
                </>
            </Modal>
            </div>
        </div>
    );
}



import './Modal.css'
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
            <div className="content">
            <button className="button-close" onClick={onClose}>❌</button>
                {children}
            </div>
    );
};

export default Modal;




fix the css 
