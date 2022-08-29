import Home from "../pages/Home";
import Nominations from "../pages/Nominations";
import Detail from "../pages/Detail";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    title: "Home",
    isHeaderElement: true,
  },
  {
    path: "/movies/:id",
    exact: false,
    component: <Detail />,
    title: "Detail",
    isHeaderElement: false,
  },
  {
    path: "/nominations",
    exact: false,
    component: <Nominations />,
    title: "Nominations",
    isHeaderElement: true,
  },
];
