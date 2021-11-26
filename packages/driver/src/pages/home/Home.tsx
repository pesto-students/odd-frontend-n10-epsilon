// import { LabeledIcon, Label } from "@odd/components";
import { OrderScreen } from "../../organisms/order";

interface IProps {}

const Home: React.FC<IProps> = () => {
  return <OrderScreen />;
  // return <NoRequestScreen />;
};

// const NoRequestScreen = () => {
//   return (
//     <div className="relative flex-1 mt-16 mx-48">
//       <div className="absolute mt-12 flex">
//         <LabeledIcon
//           title="No Incoming Trip Request"
//           iconName="icn-order-history"
//         />
//       </div>

//       <div className="flex w-full h-full">
//         <div className="flex flex-col w-full justify-center items-center gap-3 z-10">
//           <img
//             src={require("../../assets/icn-no-requests.svg").default}
//             alt="no-requests"
//           />
//           <Label
//             title="No requests found"
//             secondary
//             medium
//             className="text-4xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
