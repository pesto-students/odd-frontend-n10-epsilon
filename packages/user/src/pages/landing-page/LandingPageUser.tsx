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
          setOpen(true);
        }}
        onDriverLoginClick={() => {
          window.location.assign(
            "http://driver-app-odd.s3-website.ap-south-1.amazonaws.com"
          );
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
