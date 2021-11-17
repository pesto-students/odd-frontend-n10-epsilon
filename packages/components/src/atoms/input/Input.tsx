import React, { InputHTMLAttributes } from "react";
import { useState } from "react";

//Components
import { Label } from "..";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
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

const Input: React.FC<IProps> = (props: IProps & any) => {
  const {
    name,
    label,
    placeholder,
    textType,
    error,
    leading,
    labelClassName,
    trailing,
    secure = false,
    style,
    className,
  } = props;

  const [focused, setFocus] = useState(false);

  const set_focus = () => setFocus(true);
  const set_blur = () => setFocus(false);

  return (
    <div className={` block gap-2  ${className}`} style={style}>
      {label && (
        <Label
          className={labelClassName}
          block
          secondary
          title={label}
          medium
        />
      )}
      <div
        className={`flex border  rounded w-full  py-2  
        ${focused ? "border-primary" : "border-gray"}
       
           `}
      >
        {leading && <div className="mx-2 flex-initial ">{leading}</div>}
        <input
          placeholder={placeholder}
          id={name}
          className="w-full px-2 focus:border-0 focus:ring-0 active:border-0 active:ring-0 focus:outline-none"
          onFocus={set_focus}
          onBlur={set_blur}
          type={textType}
        />
        {trailing && <div className="mx-2">{trailing}</div>}
      </div>
      {error && (
        <p className="text-xs italic" style={{ color: "#FF0000" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
