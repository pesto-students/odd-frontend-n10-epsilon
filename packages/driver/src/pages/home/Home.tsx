import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NoRequestScreen } from "../../organisms";
import { OrderScreen } from "../../organisms/order";
import { fetchCurrentOrder } from "../../redux/slices/order";

interface IProps {}

const Home: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.order);

  useEffect(() => {
    document.title = "Home - Driver App";
  }, []);

  useEffect(() => {
    dispatch(fetchCurrentOrder());
  }, [dispatch]);

  console.log(state);

  return state.haveCurrent ? <OrderScreen /> : <NoRequestScreen />;
};

export default Home;
