import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header2 from "../../features/Header2/Header2";

type TestLayout2Props = {};

const TestLayout2: FC<TestLayout2Props> = ({}) => {
  return (
    <div>
      <Header2 />
      <Outlet />
    </div>
  );
};

export default TestLayout2;
