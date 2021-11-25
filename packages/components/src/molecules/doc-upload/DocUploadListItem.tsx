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
    <div className="flex justify-between pr-1 items-center place-items-center h-12">
      <div className="flex gap-3 items-center">
        <LabeledIcon title={title} iconName="icn-doc" reverse fontSize={18} />
        {completed && (
          <Icon iconName="icn-check" style={{ color: "#0CEB6C" }} />
        )}
      </div>
      <div>
        <Icon iconName="icn-chevron-right" />
      </div>
    </div>
  );
};

export default DocUploadListItem;
