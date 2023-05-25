import { Home } from './pages';
import SignIn from './pages/sign-in'
import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
];

export default routes;
