import { useState } from "react";

//icons
import listPartsIcon from "../../../assets/icons/navbar-icons/list-parts-icon.svg";
import comboIcon from "../../../assets/icons/navbar-icons/combo-icon.svg";
import videogameIcon from "../../../assets/icons/navbar-icons/videogame-icon.svg";
import devicesIcon from "../../../assets/icons/navbar-icons/devices-icon.svg";
import windowsIcon from "../../../assets/icons/navbar-icons/window-icon.svg";
import chairIcon from "../../../assets/icons/navbar-icons/chair-icon.svg";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

//lists
import { DropdownNavbar } from "../dropdowns/navbar/DropdownNavbar";
import { Link } from "react-router";
import { optionsParts } from "../../../ElementsLists/navbar/NavbarListParts";
import { optionsDevices } from "../../../ElementsLists/navbar/NavbarListDevices";

export const HamburgerNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //hook to remove the scrollbar in axe y, when user open the sidebar

  const handleClickIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button onClick={handleClickIsOpen}>
        <IoMenu className="cursor-pointer xl:hidden" size={30} />
      </button>

      {/* principal options */}
      {isOpen && (
        <div className="fixed h-full top-0 bottom-0 left-0 w-full sm:w-0">
          <div
            className="fixed bg-black top-0 bottom-0 left-0 right-0 opacity-35 z-10"
            onClick={handleClickIsOpen}
          ></div>
          <div
            className="bg-[#200d30] h-full overflow-auto scrollbar-hidden sm:w-60 z-20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="p-5">
              {/* select for diferents parts of pc */}
              <li className="flex items-center justify-between">
                <button className="capitalize cursor-pointer bg-[#3bff29] hover:bg-[#17a2ff] ease-in transition px-5 py-2 rounded-sm">
                  login / register
                </button>
                <button onClick={handleClickIsOpen}>
                  <IoIosClose size={30} />
                </button>
              </li>
              <div>
                <ul className="flex flex-col gap-7 mt-5 justify-between items-center sm:items-start">
                  <li className="flex gap-2">
                    <DropdownNavbar
                      textButton="List Parts"
                      icon={listPartsIcon}
                      list={optionsParts}
                    />
                  </li>

                  {/* select for diferents parts of devices */}
                  <li className="flex gap-2">
                    <DropdownNavbar
                      textButton="Devices"
                      icon={devicesIcon}
                      list={optionsDevices}
                    />
                  </li>

                  {/* other options */}
                  <li className="flex items-center gap-2 hover:text-[#df19df] ease-in transition">
                    <img
                      className="w-7 h-7 object-contain"
                      src={comboIcon}
                      alt=""
                    />
                    <Link to="/">pc combos</Link>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#df19df] ease-in transition">
                    <img
                      className="w-7 h-7 object-contain"
                      src={windowsIcon}
                      alt=""
                    />
                    <Link to="/">windows</Link>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#df19df] ease-in transition">
                    <img
                      className="w-7 h-7 object-contain"
                      src={videogameIcon}
                      alt=""
                    />
                    <Link to="/">consoles</Link>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#df19df] ease-in transition">
                    <img
                      className="w-7 h-7 object-contain"
                      src={chairIcon}
                      alt=""
                    />
                    <Link to="/">chairs</Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
