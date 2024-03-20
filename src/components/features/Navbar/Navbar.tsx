import { FC } from "react";
import NavItem from "../NavItem/NavItem";
import style from "./Navbar.module.scss";

export interface NavItemType {
  id: number;
  name: string;
  path: string;
}

const navItems: NavItemType[] = [
  // { id: 1, name: "Home", path: "/home" },
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Board", path: "/board" },
];

const Navbar: FC = () => {
  return (
    <nav className={style["navbar"]}>
      {navItems.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </nav>
  );
};

export default Navbar;
