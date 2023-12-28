import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../commponents/join";
import SignUpStep1 from "../commponents/join/sign-up-step1";
import SignUpStep2 from "../commponents/join/sign-up-step2";
import SignUpStep3 from "../commponents/join/sign-up-step3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
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
]);
