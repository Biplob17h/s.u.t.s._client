import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "./pages/Shared/css/style.css";
import UserContext from "./pages/contextApi/UserContext";


function App() {
  return (
    <div className="max-w-sm  overflow-hidden mx-auto lg:max-w-7xl">
      <UserContext>
        
          <RouterProvider router={routes}></RouterProvider>
        
      </UserContext>
    </div>
  );
}

export default App;
