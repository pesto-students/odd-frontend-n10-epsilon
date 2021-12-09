import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface IProps {
  open: boolean;
  children: React.ReactNode;
}

const AppModal: React.FC<IProps> = (props: IProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-10"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <div className="flex w-full items-center md:items-end justify-center min-h-screen p-0 md:pt-4 md:px-4 md:pb-20 text-center sm:block">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {props.children}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AppModal;
