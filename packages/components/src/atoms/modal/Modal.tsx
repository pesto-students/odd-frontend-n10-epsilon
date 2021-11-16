import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Button from "../button/Button";
import Icon from "../icons/Icons";
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
<<<<<<< HEAD
    background: "#000000",
=======
    background: "black",
>>>>>>> 64b4259 (adduser login)
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

  const login = (
    <p className="mt-8">
      By signing up, you accept our <a className="text-primary">Terms of use</a>{" "}
      and{" "}
      <a href="#" className="text-primary">
        Privacy Policy
      </a>
    </p>
  );

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
        <button onClick={closeModal} className="float-right mb-3">
          <Icon iconName="close" className="text-midGray" size="24" />
        </button>
        <div className="p-3">
          <h2 className="text-center text-2xl p-3 ">Login / Signup</h2>
          <Input
            labelClassName="mb-1 text-midGray"
            label="Enter your phone number"
            className="mt-3"
            placeholder="Enter your mobile number"
            leading={<label className="whitespace-nowrap"> +91 |</label>}
          />
<<<<<<< HEAD
          {/* <p className="mt-6 mb-3 text-midGray">
=======
          <p className="mt-6 mb-3 text-midGray">
>>>>>>> 64b4259 (adduser login)
            Enter the OTP sent to your Number
          </p>
          <Otp />
          <p className="text-primary mt-2 ">
            {" "}
            <a>Resend Otp</a>
<<<<<<< HEAD
          </p> */}
          {login}
=======
          </p>
>>>>>>> 64b4259 (adduser login)

          <Button
            primary
            className="block w-full py-2 mt-8 text-2xl"
            onClick={() => {}}
          >
            Send OTP
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AppModal;
