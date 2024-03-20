import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Header2.module.scss";

const Header2: FC = () => {
  return (
    <header className={style["header"]}>
      <h1>Header 2</h1>
      <Navbar />
    </header>
  );
};

export default Header2;
