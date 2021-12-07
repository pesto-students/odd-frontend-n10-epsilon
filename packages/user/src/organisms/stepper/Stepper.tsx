import { Icon } from "@odd/components";
import React from "react";

interface IProps {
  stepper: { title: string; active: Boolean; completed: Boolean }[];
  setOn(step: number): void;
}

const Stepper: React.FC<IProps> = ({ stepper, setOn }) => {
  return (
    <div className="flex text-xs md:text-base items-center text-gray">
      {stepper.map((x, i) => (
        <React.Fragment key={i}>
          <button
            onClick={() => {
              setOn(i);
            }}
            className={`${
              x.active ? "text-primary font-semibold" : "font-medium"
            } `}
          >
            {x.title}
          </button>
          {stepper.length - 1 !== i && (
            <Icon
              iconName="icn-step-arrow-right"
              className="md:mx lg:mx-7 sm:mx-2 xs:mx md:mx"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
