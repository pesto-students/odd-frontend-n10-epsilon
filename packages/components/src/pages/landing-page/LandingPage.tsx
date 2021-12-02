import { NavLink } from "react-router-dom";
import { BackgroundLayout, Button, Label, LabeledIcon } from "../..";
import { Footer, Navbar } from "./components";

interface IProps {
  signButton?(): void;
}

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

const onActive: React.CSSProperties = {
  color: "#00DEDE",
};

const onInActive: React.CSSProperties = {
  color: "#000000",
};

const actionsLeft = [
  <div className="flex h-full justify-center">
    {/*
    <NavLink
      key={0}
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="#"
      className="py-4 px-7"
    >
      Home
    </NavLink>

    <NavLink
      key={0}
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="/About"
      className="py-4 px-7"
    >
      About Us
    </NavLink>

    <NavLink
      key={0}
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="/Contact"
      className="py-4 px-7"
    >
      Contact
    </NavLink>
    */}
  </div>,
];

const actionsRight = [
  <div className="flex row h-full justify-center items-center">
    <div className="mr-24">
      <LabeledIcon
        title="Proudly Indian"
        iconName="icn-india"
        iconSize={24}
        reverse
      />
    </div>

    <Button
      onClick={() => {
        console.log("On Sign In Click");
      }}
      outlined
      className="px-8 h-11"
    >
      <Label title="Sign In" />
    </Button>
  </div>,
];

const LandingPage: React.FC<IProps> = () => {
  return (
    <div className="flex flex-col">
      <Navbar actionLeft={actionsLeft} actionRight={actionsRight} />
      <div
        className="h-screen pt-16 mb-16"
        style={{ backgroundColor: "#E6FCFC" }}
      >
        <div className="grid grid-cols-5 px-20 justify-center items-center h-full">
          <div className="col-span-3 flex flex-col">
            <div className="text-6xl font-semibold">
              <span>Easily connect with a</span>
              <br />
              <span>delivery driver whenever</span>
              <br />
              <span>you need</span>
            </div>
            <div className="mt-8 font-medium text-base opacity-50 w-2/4">
              <span>We provide you deliveries of your couriers inside</span>
              <br />
              <span> Your city from one place to another. We make it</span>
              <br />
              <span> easy for you by accepting parcels of Every Size.</span>
            </div>
            <div className="mt-9">
              <Button
                onClick={() => {
                  console.log("On Send Package Click");
                }}
                primary
                className="h-10 w-32"
              >
                <Label title="Send Package" />
              </Button>
            </div>
          </div>
          <div className="col-span-2 flex">
            <img
              src={require("../../assets/svgs/img-landingpage-01.svg").default}
              alt="landing-page"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-white justify-center items-center gap-8 my-16">
        {cardsData.map((cardData) => {
          return (
            <div className="flex flex-col max-h-80 h-96 w-64 p-6 items-center justify-center rounded shadow-xl border-b-4 border-primary">
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
      <div className="relative grid grid-cols-2 justify-center items-center gap-8 my-16 overflow-hidden">
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
        <img
          src={
            require("../../assets/svgs/img-landingpage-03-injection-bkg.svg")
              .default
          }
          alt="landing-page"
          className="absolute z-20 -right-2 -top-2 -bottom-2 h-full"
        />
        <div className="col-span-1 z-30">
          <div className="flex flex-col  pl-28 py-4">
            <div className="text-5xl font-semibold">Fully Vaccinated</div>
            <div className="mt-8 font-normal text-4xl w-2/4">
              Our drivers are fully vaccinated &amp; sanitated, so Corona or
              not, you can send or recieve parcels without worrying.
            </div>
            <div className="mt-8">
              <Button
                onClick={() => {
                  console.log("On Book Driver Click");
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
        className="relative flex flex-col justify-center items-center gap-8 my-16 bg-gray"
        style={{ backgroundColor: "#D3D3D3", height: 644 }}
      >
        <div className="absolute right-0 bottom-0 left-0 flex justify-between items-baseline  mt-10 pt-10">
          <div className="flex flex-row items-baseline max-h-96 space-x-6">
            <img
              src={
                require("../../assets/svgs/img-landingpage-auto.svg").default
              }
              alt="bike"
              className="max-h-80"
            />
            <img
              src={
                require("../../assets/svgs/img-landingpage-bike.svg").default
              }
              alt="bike"
              className="h-52 w-52 max-h-52"
            />
          </div>
          <div className="flex flex-row max-h-96 items-baseline">
            <img
              src={
                require("../../assets/svgs/img-landingpage-truck.svg").default
              }
              alt="bike"
              className="max-h-96"
            />
          </div>
        </div>
        <div className="flex flex-col mx-auto text-center z-30 w-full h-full">
          <div className="mt-14 text-5xl font-semibold">You Choose</div>
          <div className="mx-auto mt-16 font-normal text-4xl w-1/3">
            We have a wide variety of vehicles. Whether you want to send a key
            or you want to shift your house. We have got you covered.
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-3 justify-center items-center gap-8 my-16 py-4 bg-primary overflow-hidden">
        <img
          src={
            require("../../assets/svgs/img-landingpage-05-driver-bkg.svg")
              .default
          }
          alt="landing-page"
          className="absolute z-20 -left-2 -top-2 -bottom-2"
        />
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center mx-auto">
            <div className="flex flex-col z-30 h-full w-full pl-10 mx-auto ml-16">
              <p className="mt-14 font-semibold text-5xl">Verified Drivers</p>
              <p className="mt-8 font-normal text-4xl opacity-50 w-2/4">
                Our Delivery Partners are very well verified by us, so you can
                relax after handing over your parcels to us.
              </p>
              <div className="mt-8 flex-1 justify-start">
                <Button
                  onClick={() => {
                    console.log("On Book Driver Click");
                  }}
                  primary
                  className=" h-10 w-32"
                >
                  <Label title="Book Driver" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src={require("../../assets/svgs/img-landingpage-04.svg").default}
            alt="landing-page"
            className="z-10"
          />
        </div>
      </div>
      <div className="flex bg-gray h-28 my-16 text-center items-center">
        <div className="text-6xl font-semibold mx-auto">
          For Delivery Partner
        </div>
      </div>
      <div className="relative h-screen flex flex-col">
        <img
          src={require("../../assets/background.svg").default}
          alt="background"
          className="absolute bottom-0 right-0 left-0 items-center justify-center content-center mx-auto z-0"
        />
        <div className="flex my-auto h-full">
          <div className="my-8 z-20">
            <div className="flex flex-col z-30 h-full w-full pl-10 mx-auto ml-16">
              <p className="font-semibold text-6xl">Connect With Us</p>
              <p className="mt-4 font-medium text-base opacity-50 w-2/4">
                Connect with us as delivery partner and add additional income
                into your pocket
              </p>
              <div className="mt-8 flex-1 justify-start">
                <Button
                  onClick={() => {
                    console.log("On Book Driver Click");
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
        <div className="absolute right-0 bottom-0 left-0 flex justify-between items-baseline">
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
    </div>
  );
};

export default LandingPage;
