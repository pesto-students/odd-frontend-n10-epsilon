interface IProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
const CardLayout: React.FC<IProps> = ({ title, icon, children }) => {
  return (
    <div className="relative m-auto md:w-7/12 xs:w-11/12 max-w-4xl">
      <div className="flex text-2xl font-semibold ">
        <h1>{title} </h1>
        {icon}
      </div>
      <div className="rounded-2xl mt-3 mb-5 bg-white shadow-2xl px-8 pb-8">
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
