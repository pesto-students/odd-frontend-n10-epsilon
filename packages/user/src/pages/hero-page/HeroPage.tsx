import { LandingPage, AppModal } from "@odd/components";
import { useState } from "react";

const HeroPage = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default HeroPage;
