import {  RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import './pages/Shared/css/style.css'

function App() {
  return (
    <div className="max-w-sm  overflow-hidden mx-auto lg:max-w-7xl">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
