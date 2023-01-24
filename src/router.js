import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Grants from "./pages/Grants";
import CreateGrant from "./pages/CreateGrant";
import Proposals from "./pages/Proposals";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/grants",
        element: <Grants />,
      },
      {
        path: "/create-grant",
        element: <CreateGrant />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/proposals",
        element: <Proposals />,
      },
    ],
  },
]);

export default router;
