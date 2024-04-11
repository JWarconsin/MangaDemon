/* fichier root.jsx */
import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Accueil";
import ForYou from "../pages/ForYou";
import Historical from "../pages/Historical";
import Search from "../pages/Search";
import Settings from "../pages/Settings";
import Suggestions from "../pages/Suggestions";

import ErrorPage from "../pages/404";
import App from "../App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Accueil />
        },
        {
          path: "/Suggestions",
          element: <Suggestions />
        },
        {
          path: "/Settings",
          element: <Settings />
        },
        {
          path: "/ForYou",
          element: <ForYou />
        },
        {
            path: "/Historical",
            element: <Historical />
        },
        {
            path: "/Search",
            element: <Search />
        }
      ]
    }
  ]);

export default router;
            