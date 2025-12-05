import { useState, useEffect, useRef } from "react";
import type { OptionsInterface } from "../../../../types/dropDownTypes";
import { DropdownList } from "./DropdownList";
import { DropdownButtonNavbar } from "./DropdownButtonNavbar";

export const DropdownNavbar = ({
  textButton,
  icon,
  list,
}: {
  textButton: string;
  icon: string;
  list: OptionsInterface[];
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <div className="relative inline-block w-full" ref={dropdownRef}>
        <DropdownButtonNavbar open={isOpen} icon={icon} toggle={handleClickToggle}>
          {textButton}
        </DropdownButtonNavbar>
        <DropdownList open={isOpen} list={list} toggle={handleClickToggle} />
      </div>
    </>
  );
};
