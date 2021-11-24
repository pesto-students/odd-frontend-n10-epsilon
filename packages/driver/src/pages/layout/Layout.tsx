import { Outlet } from "react-router";

interface IProps {}

const Layout: React.FC<IProps> = () => {
  return <Outlet />;
};

export default Layout;
