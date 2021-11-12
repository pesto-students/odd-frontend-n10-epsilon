import React, { ReactElement } from "react";

import classNames from "classnames";

interface IProps {
  onClick(): void;
  children: any;
  primary?: boolean;
  secondary?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  className?: any;
  style?: React.CSSProperties;
}

function Button(props: IProps & any): ReactElement {
  const {
    onClick,
    children,
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
    className,
    outlined && "tw-border-primary tw-text-primary tw-border-2",
    shadow && "tw-shadow-largest tw-rounded-xl",
    rounded && !shadow && "tw-rounded-md",
    primary && "tw-bg-primary tw-text-white",
    secondary && "tw-bg-orange tw-text-midGray",
    disabled && "tw-bg-gray tw-text-darkGray"
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
}

export default Button;
