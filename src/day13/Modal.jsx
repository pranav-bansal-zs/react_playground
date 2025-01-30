import {useState} from "react";
import './Modal.css';
export default function Modal() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const data=[{title:'HTML',
        description:'HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web. It tells the web browser how to display text, links, images, and other forms of multimedia on a webpage. HTML sets up the basic structure of a website, and then CSS and JavaScript add style and interactivity to make it look and function better.'}]

function ModalContainer({onClose, data }){
            return (
              <>
                <div className="model-background" onClick={onClose}>
                <div className="content">
                  <button className="button-close" onClick={onClose}>❌</button>
                  <h1 className="title">{data.title}</h1>
                  <h3 className="description">{data.description}</h3>
                </div>
                </div>
              </>
            );
          };
    return (
        <div className="main-div">
            <button className="open" onClick={handleOpen}>Open me</button>

            {open && (<ModalContainer onClose={handleClose} data={data[0]}>
            </ModalContainer>)}
            </div>
    );
}
