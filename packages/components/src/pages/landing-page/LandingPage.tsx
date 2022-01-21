import { Button, Label, LabeledIcon } from "../..";
import { Footer, Navbar } from "./components";

interface IProps {
  isUser: boolean;
  onUserLoginClick: () => void;
  onDriverLoginClick: () => void;
}

const LandingPage: React.FC<IProps> = (props: IProps) => {
  const cardsData = [
    {
      icon: require("../../assets/svgs/icn-lp-choose-vehicle.svg").default,
      title: "Choose Vehicle",
      desc: "We provide multiple vehicle option",
    },
    {
      icon: require("../../assets/svgs/icn-lp-easy-ship.svg").default,
      title: "Easy to use App",
      desc: "Our App is easy to use for you to navigate and place orders. Everyone can use our app ODD",
    },
    {
      icon: require("../../assets/svgs/icn-lp-fast-delivery.svg").default,
      title: "Faster deliveries",
      desc: "We Deliver your Product in speed. Once you have created your order it will be delivered in no time",
    },
  ];

  const actionsLeft = [<div className="flex h-full justify-center" />];

  const actionsRight = [
    <div className="flex row h-full justify-center items-center">
      <div className="hidden lg:flex mr-24">
        <LabeledIcon
          title="Proudly Indian"
          iconName="icn-india"
          iconSize={24}
          reverse
        />
      </div>

      <Button
        onClick={() => {
          props.onUserLoginClick();
        }}
        outlined
        className="px-8 h-11"
      >
        <Label title="Sign In" />
      </Button>
    </div>,
  ];

  return (
    <div className="flex flex-col w-full h-auto">
      <Navbar actionLeft={actionsLeft} actionRight={actionsRight} />
      <div
        className={`${props.isUser
          ? "h-auto lg:h-screen py-8 lg:pt-16 lg:mb-16"
          : "h-screen"
          }`}
        style={{ backgroundColor: "#E6FCFC" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 px-2 lg:px-20 justify-center items-center h-full">
          <div className="lg:col-span-3 flex flex-col">
            {props.isUser ? (
              <>
                <div className="text-2xl lg:text-4xl 2xl:text-6xl font-semibold">
                  <span>Easily connect with a delivery driver whenever you need</span>
                </div>
                <div className="mt-4 lg:mt-8 font-medium text-base opacity-50 w-full lg:w-2/4">
                  <span>We deliver your courier from place to another within your city. We make it easy for you by accepting parcels of every size.</span>
                </div>
                <div className="mt-9">
                  <Button
                    onClick={() => {
                      props.onUserLoginClick();
                    }}
                    primary
                    className="h-10 w-32"
                  >
                    <Label title="Send Package" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="text-2xl lg:text-4xl 2xl:text-6xl font-semibold">
                  <span>Connect with us</span>
                </div>
                <div className="mt-4 lg:mt-8 font-medium text-base opacity-50 w-full lg:w-2/4">
                  <span>
                    Connect with us as delivery partner and add additional
                    income into your pocket
                  </span>
                </div>
                <div className="mt-9">
                  <Button
                    onClick={() => {
                      props.onUserLoginClick();
                    }}
                    primary
                    className="h-10 w-32"
                  >
                    <Label title="Register" />
                  </Button>
                </div>
              </>
            )}
          </div>
          <div className="hidden lg:flex lg:col-span-2">
            <img
              src={require("../../assets/svgs/img-landingpage-01.svg").default}
              alt="landing-page"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {props.isUser && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:w-4/5 mx-auto bg-white justify-center items-center gap-2 lg:gap-8 my-4 lg:my-16">
            {cardsData.map((cardData) => {
              return (
                <div className="flex flex-col mx-auto max-h-64 h-96 w-64 max-w-64 p-6 items-center justify-center rounded shadow-xl border-b-4 border-primary">
                  <div className="flex-1 items-center">
                    <img
                      src={cardData.icon}
                      alt={cardData.title}
                      className="h-20 w-20"
                    />
                  </div>
                  <div className="flex-1 flex-col w-full mx-auto px-2">
                    <Label
                      title={cardData.title}
                      className="text-2xl font-semibold text-center flex mx-auto"
                    />
                    <div className="text-center mt-3">
                      <Label
                        title={cardData.desc}
                        className="text-base font-normal"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 my-4 lg:my-16 overflow-hidden">
            <div className="col-span-1">
              <img
                src={
                  require("../../assets/svgs/img-landingpage-02-injection.svg")
                    .default
                }
                alt="landing-page"
                className="z-10 top-0 left-0 bottom-0 right-0 h-auto "
              />
            </div>
            {/* <img
              src={
                require("../../assets/svgs/img-landingpage-03-injection-bkg.svg")
                  .default
              }
              alt="landing-page"
              className="hidden lg:flex absolute z-20 -right-2 -top-2 -bottom-2 h-full"
            /> */}
            <div className="flex z-30">
              <div className="flex flex-col pl-4 pr-4 lg:pl-28 py-4">
                <div className="text-2xl lg:text-5xl font-semibold">
                  Fully Vaccinated
                </div>
                <div className="mt-4 lg:mt-8 font-normal text-2xl lg:text-4xl w-full lg:w-2/4">
                  Our drivers are fully vaccinated &amp; sanitated, so Corona or
                  not, you can send or recieve parcels without worrying.
                </div>
                <div className="mt-4 lg:mt-8">
                  <Button
                    onClick={() => {
                      props.onUserLoginClick();
                    }}
                    primary
                    className="h-10 w-32"
                  >
                    <Label title="Book Driver" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col justify-center items-center gap-8 mt-16 bg-gray"
            style={{ backgroundColor: "#D3D3D3" }}
          >
            <div className="absolute right-0 bottom-0 left-0 flex justify-between items-baseline  mt-10 pt-10">
              <div className="hidden lg:flex flex-row items-baseline max-h-96 space-x-6">
                <img
                  src={
                    require("../../assets/svgs/img-landingpage-auto.svg")
                      .default
                  }
                  alt="bike"
                  className="max-h-80"
                />
                {/* <img
                  src={
                    require("../../assets/svgs/img-landingpage-bike.svg")
                      .default
                  }
                  alt="bike"
                  className="h-52 w-52 max-h-52 hidden xl:flex"
                /> */}
              </div>
              <div className="hidden lg:flex flex-row max-h-96 items-baseline">
                <img
                  src={
                    require("../../assets/svgs/img-landingpage-truck.svg")
                      .default
                  }
                  alt="bike"
                  className="max-h-96"
                />
              </div>
            </div>
            <div className="flex flex-col mx-auto text-center z-30 w-full h-full">
              <div className="py-8 lg:py-14 text-xl lg:text-5xl font-semibold">
                You Choose
              </div>
              <div className="mx-auto py-8 lg:py-16 font-normal text-xl lg:text-4xl w-full lg:w-1/3">
                We have a wide variety of vehicles. Whether you want to send a
                key or you want to shift your house. We have got you covered.
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8 mt-16 py-4 bg-primary overflow-hidden">
            <img
              src={
                require("../../assets/svgs/img-landingpage-05-driver-bkg.svg")
                  .default
              }
              alt="landing-page"
              className="hidden absolute z-20 -left-2 -top-2 -bottom-2"
            />
            <div className="col-span-1 lg:col-span-2">
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="flex flex-col z-30 h-full w-full pl-2 lg:pl-10 mx-auto ml-2 lg:ml-16">
                  <p className="mt-6 lg:mt-14 font-semibold text-2xl lg:text-5xl text-white ">
                    Verified Drivers
                  </p>
                  <p className="mt-4 lg:mt-8 font-normal text-2xl lg:text-4xl text-white w-full lg:w-2/4">
                    Our Delivery Partners are very well verified by us, so you
                    can relax after handing over your parcels to us.
                  </p>
                  <div className="mt-4 lg:mt-8 flex-1 justify-start">
                    <Button
                      onClick={() => {
                        props.onUserLoginClick();
                      }}
                      className="h-10 w-32 bg-white"
                    >
                      <Label title="Book Driver" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex col-span-1">
              <img
                src={
                  require("../../assets/svgs/img-landingpage-04.svg").default
                }
                alt="landing-page"
                className="z-10"
              />
            </div>
          </div>
          <div className="flex bg-gray h-28 mt-16 text-center items-center">
            <div className="text-2xl lg:text-6xl font-semibold mx-auto">
              For Delivery Partner
            </div>
          </div>
          <div className="relative h-auto lg:h-screen flex flex-col">
            <img
              src={require("../../assets/background.svg").default}
              alt="background"
              className="hidden lg:flex absolute bottom-0 right-0 left-0 items-center justify-center content-center mx-auto z-0"
            />
            <div className="flex my-auto h-full">
              <div className="mt-8 z-20">
                <div className="flex flex-col z-30 h-full w-full pl-2 lg:pl-10 mx-auto ml-4 lg:ml-16">
                  <p className="font-semibold text-2xl lg:text-6xl">
                    Connect With Us
                  </p>
                  <p className="mt-4 font-medium text-base opacity-50 w-full lg:w-2/4">
                    Connect with us as delivery partner and add additional
                    income into your pocket
                  </p>
                  <div className="mt-8 flex-1 justify-start">
                    <Button
                      onClick={() => {
                        props.onDriverLoginClick();
                      }}
                      primary
                      className="h-10 w-32"
                    >
                      <Label title="Register" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden absolute right-0 bottom-0 left-0 lg:flex justify-between items-baseline">
              <div className="flex items-baseline max-h-96 w-full justify-center space-x-8">
                <img
                  src={
                    require("../../assets/svgs/img-landingpage-bike-full.svg")
                      .default
                  }
                  alt="bike"
                  className="h-52 w-52"
                />
                <img
                  src={
                    require("../../assets/svgs/img-landingpage-auto-full.svg")
                      .default
                  }
                  alt="bike"
                  className="max-h-80"
                />
                <img
                  src={
                    require("../../assets/svgs/img-landingpage-truck-full.svg")
                      .default
                  }
                  alt="bike"
                  className="max-h-96"
                />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default LandingPage;
