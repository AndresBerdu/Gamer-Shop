//icons
import graphicIcon from "../../assets/icons/navbar-icons/parts-pc/graphic-icon.svg";
import processorIcon from "../../assets/icons/navbar-icons/parts-pc/processor-icon.svg";
import ramIcon from "../../assets/icons/navbar-icons/parts-pc/ram-icon.svg";
import storageIcon from "../../assets/icons/navbar-icons/parts-pc/storage-icon.svg";
import chassisIcon from "../../assets/icons/navbar-icons/parts-pc/chassis-icon.svg";
import porwerSourceIcon from "../../assets/icons/navbar-icons/parts-pc/power-source-icon.svg";
import coolingIcon from "../../assets/icons/navbar-icons/parts-pc/cooling-icon.svg";
import allIcon from "../../assets/icons/navbar-icons/parts-pc/all-icon.svg";


import type { OptionsInterface } from "../../types/dropDownTypes";

export const optionsParts: OptionsInterface[] = [
  { name: "graphics", icon: graphicIcon, link: "/graphic" },
  { name: "processors", icon: processorIcon, link: "/processors" },
  { name: "ram memory", icon: ramIcon, link: "/rams memories" },
  { name: "storage", icon: storageIcon, link: "/storages" },
  { name: "chassis", icon: chassisIcon, link: "/chassis" },
  { name: "power source", icon: porwerSourceIcon, link: "/power sources" },
  { name: "cooling", icon: coolingIcon, link: "/coolers" },
  { name: "view all", icon: allIcon, link: "/view-all" },
];
