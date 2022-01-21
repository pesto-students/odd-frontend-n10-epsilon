import { Label, LabeledIcon } from "@odd/components";

const NoRequestScreen = () => {
  return (
    <div className="relative flex-1 mt-2 lg:mt-16 mx-4 sm:mx-12 lg:mx-48">
      <div className="absolute mt-12 flex w-full justify-center md:justify-start">
        <LabeledIcon
          title="No Incoming Trip Request"
          iconName="icn-order-history"
        />
      </div>

      <div className="flex w-full h-full">
        <div className="flex flex-col w-full justify-center items-center gap-1 lg:gap-3 z-10">
          <img
            src={require("../../assets/icn-no-requests.svg").default}
            alt="no-requests"
            className="w-16 h-12 sm:w-24 sm:h-16 lg:w-32 lg:h-24 object-contain"
          />
          <Label
            title="No requests found"
            secondary
            medium
            className="text-base sm:text-2xl lg:text-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NoRequestScreen;
