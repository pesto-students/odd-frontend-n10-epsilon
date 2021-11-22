import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Button from "../button/Button";
import Icon from "../icon/Icons";
import Input from "../input/Input";
import Otp from "../otpInput/OtpInput";

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    borderRadius: 10,
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: 1,
    background: "#fff",
    boxShadow: "1px 1px 1px #9E9E9E",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "black",
    zIndex: 9999,

    border: 0,
  },
};
interface IProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  leading?: React.ReactNode;
  textType?: string;
  trailing?: React.ReactNode;
  secure?: boolean;
  className?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  onFocus?(): void;
}

const AppModal: React.FC<IProps> = (props: IProps & any) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
      </Modal>
    </div>
  );
};

export default AppModal;
