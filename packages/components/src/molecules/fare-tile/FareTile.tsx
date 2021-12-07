import { Icon } from "../..";
interface IProps {
  name?: string;
  fare?: number | string;
  image?: string;
}
const FareTile: React.FC<IProps> = ({ name, fare, image }) => {
  return (
    <div className="flex">
      <img src={image} alt="img" />
      <div className="ml-2 lg:ml-4">
        <h2 className="text-xl font-semibold uppercase">{name}</h2>
        <div className="flex items-center mt-1">
          <Icon iconName="icn-rupee" size="22" />
          <span className="ml-1 text-primary font-medium text-xl">
            {fare} Rs.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FareTile;
