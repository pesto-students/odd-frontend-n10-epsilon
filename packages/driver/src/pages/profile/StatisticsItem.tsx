import { Icon, Label } from "@odd/components";

interface IProps {
  iconName: string;
  value: string;
  label: string;
}

const StatisticsItem: React.FC<IProps> = ({
  iconName,
  value,
  label,
}: IProps) => {
  return (
    <div className="flex flex-col bg-white shadow-2xl rounded-2xl space-y-2 px-4 py-8 w-52 items-center justify-center">
      <Icon iconName={iconName} className="w-11 h-11" />
      <Label title={value} className="flex text-2xl font-medium" />
      <Label title={label} className="text-base font-normal opacity-70" />
    </div>
  );
};

export default StatisticsItem;
