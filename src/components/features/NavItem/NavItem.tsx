import { FC } from "react";
import { NavItemType } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import style from "./NavItem.module.scss";

type NavItemProps = {
  item: NavItemType;
};

const NavItem: FC<NavItemProps> = ({ item }) => {
  return (
    <li className={style["nav-item"]} key={item.id}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  );
};

export default NavItem;
