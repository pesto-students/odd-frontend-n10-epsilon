import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
interface IProps {}

const Layout: React.FC<IProps> = () => {
 return<>
   <Outlet />
   <ToastContainer />
 </>;
};

export default Layout;
