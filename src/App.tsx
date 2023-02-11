import { Layout } from "antd";
import { FC, useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

const App: FC = () => {
  const { setAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <AppRouter />
    </Layout>
  );
};

export default App;
