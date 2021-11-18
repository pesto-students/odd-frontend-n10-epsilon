import React from "react";

import classNames from "classnames";

interface IProps {
  onClick?(): void;
  children: any;
  block?: boolean;
  primary?: boolean;
  secondary?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  className?: any;
  style?: React.CSSProperties;
}

const Button: React.FC<IProps> = (props: IProps & any) => {
  const {
    onClick,
    children,
    block,
    primary = false,
    secondary = false,
    outlined = false,
    rounded = true,
    shadow = false,
    disabled = false,
    className,
    style,
    ...rest
  } = props;

  const classnames = classNames(
    block && "w-full block py-2 mt-8 text-2xl",
    "py-1 px-2 focus:opacity-70 hover:opacity-70",
    outlined && "border-primary text-primary border-2",
    shadow && "shadow-largest rounded-xl",
    rounded && !shadow && "rounded-md",
    primary && "bg-primary text-white",
    secondary && "bg-orange text-midGray",
    disabled && "bg-gray text-darkGray",
    className
  );

  return (
    <button
      style={style}
      className={classnames}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          console.log("clicked");
          onClick();
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
