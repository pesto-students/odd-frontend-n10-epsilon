interface IProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
const CardLayout: React.FC<IProps> = ({ title, icon, children }) => {
  return (
    <div className="relative m-auto w-11/12 lg:w-9/12 xl:w-7/12 max-w-4xl h-auto overflow-y-scroll">
      <div className="flex flex-row text-2xl font-semibold space-x-2">
        <h1>{title}</h1>
        {icon}
      </div>
      <div className="rounded lg:rounded-2xl mt-3 mb-5 bg-white shadow-2xl px-4 lg:px-8 pb-8">
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
