import { RouterProvider } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/commponents/join";
import { router } from "./pages/router/router";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <SignUpPage />
      </RouterProvider>
    </>
  );
}

export default App;
