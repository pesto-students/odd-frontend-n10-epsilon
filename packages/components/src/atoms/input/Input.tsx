import React, { InputHTMLAttributes } from "react";
import { useState } from "react";

//Components
import { Label } from "..";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  textType?: string;
  error?: string;
  leading?: React.ReactNode;
  fieldStyle?: "standard" | "legacy";
  trailing?: React.ReactNode;
  secure?: boolean;
  className?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  onFocus?(): void;
}

const Input: React.FC<IProps> = (props: IProps & any) => {
  const {
    label,
    placeholder,
    fieldStyle,
    error,
    leading,
    labelClassName,
    trailing,
    // secure = false,
    style,
    className,
    ...rest
  } = props;

  const [focused, setFocus] = useState(false);

  const set_focus = () => setFocus(true);
  const set_blur = () => setFocus(false);

  const standard = (
    <div className={` block gap-2  ${className}`} style={style}>
      {label && (
        <Label
          className={focused ? "text-primary" : "text-gray"}
          block
          title={label}
          medium
        />
      )}
      <div
        className={`flex border-b   w-full  py-2  
        ${focused ? "border-primary" : "border-gray"}
       
           `}
      >
        {leading && <div className="mx-2 flex-initial ">{leading}</div>}
        <input
          placeholder={placeholder}
          className="w-full px-2 focus:border-0 focus:ring-0 active:border-0 active:ring-0 focus:outline-none"
          onFocus={set_focus}
          onBlur={set_blur}
          {...rest}
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
  const legacy = (
    <div className={` block gap-2  ${className}`} style={style}>
      {label && (
        <Label
          className={focused ? "text-primary" : "text-gray"}
          block
          title={label}
          medium
        />
      )}
      <div
        className={`flex border-b   w-full  py-2  
        ${focused ? "border-primary" : "border-gray"}
       
           `}
      >
        {leading && <div className="mx-2 flex-initial ">{leading}</div>}
        <input
          placeholder={placeholder}
          className="w-full px-2 focus:border-0 focus:ring-0 active:border-0 active:ring-0 focus:outline-none"
          onFocus={set_focus}
          onBlur={set_blur}
          {...rest}
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
  switch (fieldStyle) {
    case "standard":
      return standard;
    case "legacy":
      return legacy;

    default:
      return standard;
  }
};

export default Input;
