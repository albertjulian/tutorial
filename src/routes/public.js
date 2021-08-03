import async from "../helpers/async";

const UserRegister = async(() => import("../pages/register"));
const UserHome = async(() => import("../pages/home"));

const publicRoutes = [
  {
    auth: false,
    path: "/register",
    key: "register",
    component: UserRegister,
    title: "User Register",
  },
  {
    auth: false,
    path: "/",
    key: "home",
    component: UserHome,
    title: "User Home",
  },
];

export default publicRoutes;
