import { Icon } from "../..";
interface IProps {
  name?: string;
  fare?: number;
  image?: string;
}
const FareTile: React.FC<IProps> = ({ name, fare, image }) => {
  return (
    <>
      <img src={image} alt="img" />
      <div className="ml-4">
        <h2 className="text-xl font-semibold uppercase">{name}</h2>
        <div className="flex items-center mt-1">
          <Icon iconName="icn-rupee" size="22" />
          <span className="ml-1 text-primary font-medium text-xl">
            {fare} Rs.
          </span>
        </div>
      </div>
    </>
  );
};

export default FareTile;
