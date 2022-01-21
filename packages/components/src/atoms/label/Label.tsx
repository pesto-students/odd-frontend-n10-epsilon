import React from "react";

import classNames from "classnames";

interface IProps {
  title: string;
  block?: boolean;
  primary?: boolean;
  secondary?: boolean;
  medium?: boolean;
  regular?: boolean;
  light?: boolean;
  gray?: boolean;
  className?: any;
  required?:boolean;
  style?: React.CSSProperties;
}

const Label: React.FC<IProps> = (props: IProps & any) => {
  const {
    title,
    block,
    primary,
    required,
    secondary,
    medium,
    regular,
    light,
    gray,
    className,
    style,
    ...rest
  } = props;

  const classnames = classNames(
    block && "block",
    primary && "text-primary",
    secondary && "text-typo",
    medium && "font-medium",
    regular && "font-normal",
    light && "font-light",
    gray && "text-gray",
    className
  );

  return (
    <label className={classnames} style={style} {...rest}>
      {required && <span className="text-primary">*</span>}
      {title}
    </label>
  );
};

export default Label;
