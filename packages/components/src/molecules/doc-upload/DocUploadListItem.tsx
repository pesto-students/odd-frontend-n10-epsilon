import React from "react";

//Components
import { LabeledIcon } from "../index";

//icons
import IconFile from "../../assets/svgs/icn-doc.svg";
import IconCheckMark from "../../assets/svgs/icn-checked.svg";
import IconArrow from "../../assets/svgs/icn-chevron-right.svg";

interface IProps {
  title: string;
  completed?: boolean;
}

const DocUploadListItem: React.FC<IProps> = (props: IProps & any) => {
  const { title, completed = false } = props;
  return (
    <div className="flex justify-between pr-1 items-center place-items-center">
      <div className="flex gap-3">
        <LabeledIcon title={title} icon={IconFile} reverse fontSize={18} />
        {completed && <img src={IconCheckMark} />}
      </div>
      <div>
        <img src={IconArrow} />
      </div>
    </div>
  );
};

export default DocUploadListItem;
