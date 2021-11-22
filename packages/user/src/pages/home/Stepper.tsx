import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

interface IProps {
  stepper: { title: string; active: Boolean; completed: Boolean }[];
}
const Stepper: React.FC<IProps> = ({ stepper }) => {
  return (
    <div className="flex xs:text-sm sm:text-base  items-center text-gray">
      {stepper.map((x, i) => (
        <React.Fragment key={i}>
          <button
            className={`${
              x.completed ? "text-primary font-semibold" : "font-medium"
            } `}
          >
            {x.title}
          </button>
          {stepper.length - 1 !== i && (
            <MdOutlineDoubleArrow className="md:mx lg:mx-7 sm:mx-2 xs:mx md:mx" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
