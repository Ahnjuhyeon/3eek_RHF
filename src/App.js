import { RouterProvider } from "react-router-dom";
import "./App.css";
// import SignUpPage from "./pages/commponents/join";
import { router } from "./router/router";
import ToTal from "./pages";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <ToTal />
      </RouterProvider>
    </>
  );
}

export default App;
