//components
import { Switch as HeroSwitch } from "@headlessui/react";
//svg-icons
const IconOff = require("../../assets/svgs/icn-switch-off.svg").default;
const IconOn = require("../../assets/svgs/icn-switch-on.svg").default;

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
  return (
    <HeroSwitch
      checked={defaultState}
      onChange={(value) => {
        onChange(value);
      }}
    >
      <div
        className={`${
          defaultState ? "bg-primary" : "bg-gray"
        } relative  w-28 h-9 rounded-full shadow-inner-largest items-center justify-center align-middle innerShadow`}
      >
        <div
          className={`${
            defaultState ? "translate-x-20" : "translate-x-2"
          } absolute top-1.5 left-0 w-6 h-6 transform bg-white rounded-full self-auto items-center circleShadow`}
        >
          <img
            alt="switch"
            className="mx-auto object-center w-5 h-5 mt-0.5"
            src={defaultState ? IconOn : IconOff}
          />
        </div>
        <div
          className={`${
            defaultState ? "left-3" : "right-3"
          } text-white align-middle absolute top-1.5 `}
        >
          {defaultState ? labelOn : labelOff}
        </div>
      </div>
    </HeroSwitch>
  );
};

export default Switch;
