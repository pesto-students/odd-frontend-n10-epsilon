import React, { useEffect, useState } from "react";

import { Label } from "..";

interface IProps {
  defaultOptions: Array<string>;
  onSelectionChange(value: string): void;
  label?: string;
  className?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  required?: boolean;
  outline?: boolean;
}

export interface IOption {
  selected: boolean;
  value: string;
  id: string;
}

const Select: React.FC<IProps> = (props: IProps) => {
  const {
    defaultOptions,
    onSelectionChange,
    label,
    className,
    labelClassName,
    style,
    required,
    outline = true,
  } = props;

  const [options, setOptions] = useState<Array<IOption>>([]);
  const [selectedValue, setSelectedValue] = useState(" ");
  const [focused, setFocus] = useState(false);

  const set_focus = () => setFocus(true);
  const set_blur = () => setFocus(false);

  useEffect(() => {
    console.log(selectedValue);
    onSelectionChange(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    const optionValues: Array<IOption> = [
      ...defaultOptions?.map((x) => {
        return {
          id: x,
          value: x,
          selected: false,
        };
      }),
    ];
    setOptions(optionValues);
  }, []);

  return (
    <div className={`block gap-2 ${className}`} style={style}>
      {label && (
        <Label
          className={labelClassName}
          block
          secondary
          required={required}
          title={label}
          medium
          style={{
            fontSize: 11,
          }}
        />
      )}
      <select
        className={`w-full max-h-9 py-2 my-auto rounded h-full flex items-center ring-0 hover:ring-0 focus:ring-0 ${
          outline
            ? focused
              ? "border-primary hover:border-primary focus:border-primary"
              : "border-gray"
            : "text-sm font-medium opacity-80 ring-0 hover:ring-0 focus:ring-0 outline-none hover:outline-none focus:outline-none border-0 hover:border-0 focus:border-0 text-midGray"
        }`}
        value={selectedValue}
        onChange={(event) => {
          const value = event.target.value;
          setSelectedValue(value);
        }}
        onFocus={set_focus}
        onBlur={set_blur}
      >
        {options.map((x: IOption) => {
          return (
            <option key={x.value} value={x.value}>
              {x.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
