import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Speakers from "../pages/Speakers";
import Speaker_single from "../pages/Speake_single";
import NoPage from "../pages/Nopage";
import Blog from "../pages/blog";
import Blog_single from "../pages/Blog_single";
import Contact from "../pages/contact";
import Supports from "../pages/Supports";
import Tiket from "../pages/Tiket";
import Schedule from "../pages/Schedule";

import Admin_index2 from "../admin/Admin_index2";
import Schedule_list from "../admin/Schedule_list";
import Schedule_add from "../admin/Schedule_add";
import LoginPage from "../pages/LoginPage";
import Regstration from "../pages/Regstration";
import Headeredit from "../admin/Headeredit";
import Footeredit from "../admin/Footeredit";
import Catagorylist from "../admin/Catagorylist";
import CatagoryAdd from "../admin/CatagoryAdd";


const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/speakers", element: <Speakers /> },
  { path: "/speake_single", element: <Speaker_single /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/supports", element: <Supports /> },
  { path: "/tickets", element: <Tiket /> },
  { path: "/Blog_single", element: <Blog_single /> },
  { path: "/loginpage", element: <LoginPage /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/regstration", element: <Regstration /> },




  { path: "*", element: <NoPage /> },
  { path: "/admin", element: <Admin_index2 /> },
  { path: "/admin/schedule", element: <Schedule_list /> },
  { path: "/admin/schedule/add", element: <Schedule_add /> },
  { path: "/admin/headeredit", element: <Headeredit /> },
  { path: "/admin/footeredit", element: <Footeredit /> },
  { path: "/admin/catagorylist", element: <Catagorylist /> },
  { path: "/admin/add_category", element: <CatagoryAdd /> },


]);
export default routes;
