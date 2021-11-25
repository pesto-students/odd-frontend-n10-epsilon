import {
  Button,
  Icon,
  IconColorType,
  OtpInput,
  AppModal,
} from "@odd/components";

import { useState } from "react";

interface IProps {
  title: string;
  description: string;
  onSubmit?(): void;
}

const OtpConfirmDialog: React.FC<IProps> = ({
  title,
  description,
  onSubmit,
}: IProps) => {
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(true);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // let formData = new FormData(event.currentTarget);

    if (onSubmit) {
      onSubmit();
    }

    //close dialog if verify successfully
    setOpen(false);
  }

  return (
    <AppModal open={open}>
      <div className="inline-block align-bottom bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all sm:align-middle sm:max-w-sm sm:w-full">
        <Button
          onClick={() => {
            setOpen(false);
          }}
          className="relative float-right mr-2.5 mt-2.5"
        >
          <Icon
            iconName="close"
            iconColorType={IconColorType.gray}
            size="24"
            className="absolute top-2 right-2"
          />
        </Button>
        <div className="px-6">
          <h2 className="text-center text-xl font-semibold p-3">{title}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <p className="mt-6 mb-5 text-gray font-medium text-xs text-left">
                {description}
              </p>
              <OtpInput
                onChange={(value) => {
                  console.log(`OTP Change to ${value}`);
                  setOtp(value);
                }}
              />
            </div>
            <div className="my-10">
              <Button
                primary
                className="block w-full py-2 text-base font-semibold mx-auto rounded-lg"
                onClick={() => {}}
                disabled={otp.length !== 4}
              >
                {"Verify"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AppModal>
  );
};

export default OtpConfirmDialog;
