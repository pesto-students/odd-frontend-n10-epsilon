import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Button, Icon, Label } from "../..";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface IProps {
  label?: string;
  onSignOut?: () => void;
}

const LogoutMenu: React.FC<IProps> = (props: IProps) => {
  return (
    <Menu as="div" className="py-4 px-7 relative">
      <div>
        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <Icon iconName="icn-person-pin" size="24" className="mr-1" />
          <span>{props.label}</span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <div>
                <Button onClick={props.onSignOut}>
                  <Label
                    title="Sign out"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  />
                </Button>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LogoutMenu;
