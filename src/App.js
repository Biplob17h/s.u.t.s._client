import {  RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="max-w-xs  overflow-hidden mx-auto lg:max-w-7xl">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
