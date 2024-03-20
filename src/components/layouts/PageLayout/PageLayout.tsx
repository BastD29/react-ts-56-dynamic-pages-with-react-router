import { Outlet } from "react-router-dom";
import style from "./PageLayout.module.scss";

export default function PageLayout() {
  return (
    <div className={style["page-layout"]}>
      <h1>Page Layout</h1>
      <Outlet />
    </div>
  );
}
