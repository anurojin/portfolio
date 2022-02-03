import { Link } from "react-scroll";
import "./Navbar.css";

import Section from "./Section";
import Modal from "react-modal";
import { useState } from "react";
import "./Modal.css";
import Resume from "./Resume";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <nav>
      <ul className="header">
        <li>
          
          <Link className="l"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
            
          </Link>
        </li>
        <li>
          <Link className="l"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact Me
          </Link>
        </li>
        <li>
          
           <button className="modal-btn" onClick={toggleModal}>GET CV</button>
          <Modal
         isOpen={modal}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
      >
        <button className="close"onClick={toggleModal}>CLOSE</button>
        <div>please download the resume here <button type="button"  className="download" onClick={Resume}>DOWNLOAD</button> </div>
        
      </Modal>
        </li>
       
          <div className="name">
            <h7>
          Anu Mariam Skariah</h7>
          </div>
        
      
      </ul>
      <Section/>
    </nav>
    
  );
};

export default Navbar;
