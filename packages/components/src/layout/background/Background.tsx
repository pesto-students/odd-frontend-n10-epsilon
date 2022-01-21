const BackgroundLayout = (props: any) => {
  return (
    <div className="relative h-screen">
      <img
        src={require("../../assets/background.svg").default}
        alt="background"
        className="fixed bottom-0 right-0 left-0 object-contain bg-no-repeat items-center justify-center content-center mx-auto z-0"
      />
      <div className="flex my-auto h-full pt-16">{props.children}</div>
    </div>
  );
};

export default BackgroundLayout;
