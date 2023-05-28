import { Home } from './pages';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/sign-in'
import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
    element: <LandingPage />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
];

export default routes;
