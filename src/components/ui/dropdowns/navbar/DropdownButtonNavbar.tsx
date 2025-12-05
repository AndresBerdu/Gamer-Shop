import type { ReactNode } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const DropdownButtonNavbar = ({
  children,
  icon,
  open,
  toggle,
}: {
  children: ReactNode;
  icon: string;
  open: boolean;
  toggle: () => void;
}) => {
  return (
    <div
      onClick={toggle}
      className={`capitalize flex gap-2 items-center xl:justify-center cursor-pointer hover:text-[#df19df] ease-in transition ${
        open ? `text-[#df19df]` : null
      }`}
    >
      <img className="w-7 h-7 object-contain" src={icon} alt="" />
      <button className="cursor-pointer">{children}</button>
      {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}
    </div>
  );
};
