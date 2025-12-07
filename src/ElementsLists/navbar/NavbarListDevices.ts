//icons
import mouseIcon from "../../assets/icons/navbar-icons//devices/mouse-icon.svg";
import keyboardIcon from "../../assets/icons/navbar-icons//devices/keyboard-icon.svg";
import headphone from "../../assets/icons/navbar-icons//devices/headphones-icon.svg";
import mousePad from "../../assets/icons/navbar-icons//devices/mouse-pad-icon.svg";
import allDevices from "../../assets/icons/navbar-icons//devices/devices-all-icon.svg";

//types
import type { OptionsInterface } from "../../types/dropDownTypes";

export const optionsDevices: OptionsInterface[] = [
  { name: "mouses", icon: mouseIcon, link: "/mouses" },
  { name: "keyboards", icon: keyboardIcon, link: "/keyboards" },
  { name: "headphones", icon: headphone, link: "/headphones" },
  { name: "mouse pads", icon: mousePad, link: "/mouse-pads" },
  { name: "view all", icon: allDevices, link: "/all-devices" },
];
