import { useEffect, useState } from "react";
import { LandingPage } from "@odd/components";
import { LoginPage } from "..";

const LandingPageDriver: React.FC = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.title = "Driver App";
  }, []);

  return (
    <div className="relative flex">
      <LandingPage
        isUser={false}
        onUserLoginClick={() => {
          console.log("Driver login...");
          setOpen(true);
        }}
        onDriverLoginClick={() => {}}
      />
      <div className="absolute bg-white z-50">
        <LoginPage
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default LandingPageDriver;
