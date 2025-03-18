import { RouterProvider } from "react-router-dom";
import AppRoutes from "./router/routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main>
      <RouterProvider router={AppRoutes} />
      <Toaster/>
    </main>
  );
};

export default App;
