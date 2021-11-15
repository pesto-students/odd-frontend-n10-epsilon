import React from "react";

//Components
import { Label } from "..";

interface IProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  secure?: boolean;
  style?: React.CSSProperties;
}

const Input: React.FC<IProps> = (props: IProps & any) => {
  const {
    name,
    label,
    placeholder,
    error,
    leadingIcon,
    trailingIcon,
    secure = false,
    style,
  } = props;

  return (
    <div className="flex gap-2 flex-col" style={style}>
      {label && (
        <Label block secondary title={label} medium style={{ fontSize: 11 }} />
      )}
      <div className="relative flex">
        {leadingIcon && <Icon icon={leadingIcon} leading={true} />}
        <input
          className={`border border-gray rounded w-full h-9 py-2 leading-tight focus:border-primary focus:ring-0 active:border-primary active:ring-0 
            ${leadingIcon && " pl-8 "} ${trailingIcon && " pr-8 "}`}
          placeholder={placeholder}
          id={name}
          type={secure ? "password" : "text"}
        />
        {trailingIcon && <Icon icon={trailingIcon} leading={false} />}
      </div>
      {error && (
        <p className="text-xs italic" style={{ color: "#FF0000" }}>
          {error}
        </p>
      )}
    </div>
  );
};

const Icon: React.FC<any> = ({ icon, leading = true }) => {
  return (
    <img
      className={`absolute pointer-events-none w-2.5 h-2.5 top-1/2 transform -translate-y-1/2 my-auto ${
        leading ? " left-3 " : " right-3 "
      }`}
      src={icon}
    />
  );
};

export default Input;
