import { FC, ReactNode } from "react";
import Header2 from "../../features/Header2/Header2";

type TestLayout1Props = {
  children: ReactNode;
};

const TestLayout1: FC<TestLayout1Props> = ({ children }) => {
  return (
    <div>
      <Header2 />
      <main>{children}</main>
    </div>
  );
};

export default TestLayout1;
