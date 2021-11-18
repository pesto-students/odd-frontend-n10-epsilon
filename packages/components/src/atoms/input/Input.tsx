import React, { useState, InputHTMLAttributes } from "react";

//Components
import { Label } from "..";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  placeholder?: string;
  textType?: string;
  error?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  onFocus?(): void;
  defaultValue?: string;
}

const Input: React.FC<IProps> = (props: IProps & any) => {
  const {
    name,
    label,
    placeholder,
    textType,
    error,
    leading,
    trailing,
    className,
    labelClassName,
    style,
    defaultValue,
    onChange,
  } = props;

  const [focused, setFocus] = useState(false);

  const set_focus = () => setFocus(true);
  const set_blur = () => setFocus(false);
  const [value, setValue] = useState(defaultValue);

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
          className="w-full px-2 focus:border-0 focus:ring-0 active:border-0 active:ring-0 focus:outline-none"
          onFocus={set_focus}
          onBlur={set_blur}
          type={textType}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            if (onChange) {
              onChange(e);
            }
          }}
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
