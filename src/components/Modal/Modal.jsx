import { useEffect, useState } from "react";
import Backdrop from "../Backdrop/Backdrop";


const Modal = ({ setShowModal }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const closeModal = () => {
    setShowContent(false);
    setTimeout (() => {
    setShowModal(false);
  }, 500);
}
  return (
    <>
      <Backdrop showBackdrop={showContent} closeModal={closeModal} />
      <div className="modal showModal">
        <div onClick={closeModal} className="closeBtn">
          <span>&times;</span>
        </div>
        <div className="modalHeader">
          <h3>HELLO TEACHER</h3>
        </div>
        <div className="modalBody"><h2>SORRY FOR THE SHORTCOMINGS</h2>
        <button onClick={closeModal}>EXIT</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
