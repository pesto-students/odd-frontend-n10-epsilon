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
    <div className="flex flex-col space-y-2 items-center justify-center">
      <Icon iconName={iconName} className="w-6 h-6" />
      <Label
        title={value}
        className="flex text-base font-medium text-midGray"
      />
      <Label title={label} className="text-sm text-primary" />
    </div>
  );
};

export default StatisticsItem;
