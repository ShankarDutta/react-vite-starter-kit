import Header from "@/components/Headers/Header";
import Provider from "@/components/Providers/Provider";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <Provider>
      <Header />

      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootLayout;
