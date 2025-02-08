import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className={clsx("max-w-[1206px] mx-auto p-6", className)}>
      {children}
    </section>
  );
};

export default Container;
