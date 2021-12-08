import React from "react";

//Components
import { LabeledIcon } from "../index";

//icons
import { Icon } from "../..";
import { useNavigate } from "react-router-dom";

interface IProps {
  title: string;
  completed?: boolean;
  path: string;
}

const DocUploadListItem: React.FC<IProps> = (props: IProps & any) => {
  const navigate = useNavigate();
  const { title, path, completed = false } = props;

  return (
    <div
      className="flex justify-between pr-1 items-center place-items-center h-12 border-b-2 border-gray"
      onClick={() => navigate(path)}
    >
      <div className="flex gap-3 justify-center items-center">
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
