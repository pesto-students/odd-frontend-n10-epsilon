import React from "react";

//Components
import { LabeledIcon } from "../index";

//icons
import { Icon } from "../..";

interface IProps {
  title: string;
  completed?: boolean;
}

const DocUploadListItem: React.FC<IProps> = (props: IProps & any) => {
  const { title, completed = false } = props;
  return (
    <div className="flex justify-between pr-1 items-center place-items-center">
      <div className="flex gap-3">
        <LabeledIcon title={title} iconName="file" reverse fontSize={18} />
        {completed && <Icon iconName="check-mark" />}
      </div>
      <div>
        <Icon iconName="arrow" />
      </div>
    </div>
  );
};

export default DocUploadListItem;
