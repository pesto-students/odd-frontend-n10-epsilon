import { useEffect, useState } from "react";
import { LandingPage } from "@odd/components";
import { LoginPage } from "..";

const LandingPageUser: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "User App";
  }, []);

  return (
    <div className="relative flex">
      <LandingPage
        isUser={true}
        onUserLoginClick={() => {
          console.log("User login...");
          setOpen(true);
        }}
        onDriverLoginClick={() => {
          console.log("Driver login...");
          window.location.assign("https://odd-driver.netlify.app");
        }}
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

export default LandingPageUser;
