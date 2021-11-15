import { useState } from "react";

//svg-icons
import IconOff from "../../assets/svgs/icn-switch-off.svg";
import IconOn from "../../assets/svgs/icn-switch-on.svg";

//components
import { Switch as HeroSwitch } from "@headlessui/react";

interface IProps {
  onChange(value: boolean): void;
  defaultState?: boolean;
  labelOn?: string;
  labelOff?: string;
}

const Switch: React.FC<IProps> = ({
  onChange,
  labelOn = "Online",
  labelOff = "Offline",
  defaultState = true,
}) => {
  const [enabled, setEnabled] = useState(defaultState);

  return (
    <HeroSwitch
      checked={enabled}
      onChange={(value) => {
        setEnabled(value);
        onChange(value);
      }}
    >
      <div
        className={`${
          enabled ? "bg-primary" : "bg-gray"
        } relative  w-28 h-9 rounded-full shadow-inner-largest items-center justify-center align-middle innerShadow`}
      >
        <div
          className={`${
            enabled ? "translate-x-20" : "translate-x-2"
          } absolute top-1.5 left-0 w-6 h-6 transform bg-white rounded-full self-auto items-center circleShadow`}
        >
          <img
            className="mx-auto object-center w-5 h-5 mt-0.5"
            src={enabled ? IconOn : IconOff}
          />
        </div>
        <div
          className={`${
            enabled ? "left-3" : "right-3"
          } text-white align-middle absolute top-1.5 `}
        >
          {enabled ? labelOn : labelOff}
        </div>
      </div>
    </HeroSwitch>
  );
};

export default Switch;
