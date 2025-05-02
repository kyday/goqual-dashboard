import Content from "@/components/common/Content/Content";
import { Header } from "@/components/common/Header/Header";
import { Sidebar } from "@/components/common/Nav/Nav";

const DefaultLayout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full wrapper">
        <Header />
        <div className="body flex-grow-1">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
