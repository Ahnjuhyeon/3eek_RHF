import { createBrowserRouter } from "react-router-dom";

import SignUpStep1 from "../pages/commponents/join/sign-up-step1";
import SignUpStep2 from "../pages/commponents/join/sign-up-step2";
import SignUpStep3 from "../pages/commponents/join/sign-up-step3";
import ToTal from "../pages";
import SignUpPageC from "../pages/contcommonents/join";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <SignUpPage />,
    element: <ToTal />,
  },
  {
    path: "/signup1",
    element: <SignUpStep1 />,
  },
  {
    path: "/signup2",
    element: <SignUpStep2 />,
  },
  {
    path: "/signup3",
    element: <SignUpStep3 />,
  },
  //C
  {
    path: "/signupC",
    element: <SignUpPageC />,
  },

  //
]);
