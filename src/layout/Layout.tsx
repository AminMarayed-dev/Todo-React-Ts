import { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = {
  children?: ReactNode;
  onAddTask: (task: {
    id: number;
    title: string;
    priority: string;
    bgPriority: string;
  }) => void;
};

function Layout({ children, onAddTask }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-24 gap-4  p-16 rounded-lg bg-white shadow-4 z-10 relative">
        <Header />
        {children}
        <Footer onAddTask={onAddTask} />
      </div>
      <div className="bg-[#2968eb] fixed left-1/5 top-[10%]  w-[480px] h-[47%] rounded-2xl -rotate-6"></div>
    </div>
  );
}

export default Layout;
