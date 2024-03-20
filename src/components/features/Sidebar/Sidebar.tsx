import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Sidebar.module.scss";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isOpen, toggle }) => {
  const classname = `${style["sidebar"]} ${
    isOpen ? style["sidebar--open"] : ""
  }`;

  return (
    <div className={classname}>
      <button className={style["sidebar__button"]} onClick={toggle}>
        X
      </button>
      <Navbar />
    </div>
  );
};

export default Sidebar;
