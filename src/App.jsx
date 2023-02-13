import { Outlet } from "react-router";
import { useContext } from "react";
import Home from "./pages/Home.pages";
import UseContext, { ProductContext } from "./utils/context";

const App = () => {
  const item = useContext(UseContext);
  console.log(item);

  return <Home />;
};

export default App;
