import { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = {
  children?: ReactNode;
  onAddTask: (task: {
    id:number,
    title: string;
    priority: string;
    bgPriority: string;
  }) => void;
};

function Layout({ children, onAddTask }: Props) {
  return (
    <div className="grid place-items-center mt-8 gap-3">
      <Header />
      {children}
      <Footer onAddTask={onAddTask} />
    </div>
  );
}

export default Layout;
