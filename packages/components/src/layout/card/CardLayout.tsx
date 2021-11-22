interface IProps {
  title: string;
  icon?:React.ReactNode;
  children: React.ReactNode;
}
const CardLayout: React.FC<IProps> = ({ title, icon, children }) => {
  return (
    <div className="relative m-auto  top-10 md:w-7/12 xs:w-11/12">
      <div className="flex text-2xl font-semibold ">
        <h1>{title} </h1>
        {icon}
      </div>
      <div className="rounded-2xl mt-3 mb-5 xs:p-4 md:p-10  bg-white shadow-2xl ">{children}</div>
    </div>
  );
};

export default CardLayout;
