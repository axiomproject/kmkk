import React from "react";
import PathConstants from "./pathConstants";
import Life from "../pages/Life";
import Help from "../pages/Help";
import Story from "../pages/sub/Story";
import Graduates from "../pages/sub/Graduates"
import Community from "../pages/sub/Community"
import Partner from "../pages/sub/Partner"
import Team from "../pages/sub/Team"
import Contact from "../pages/sub/Contact"



const Home = React.lazy(() => import("../pages/Home"));
const GRAD = React.lazy(() => import("../pages/sub/Graduates"));
const LIFE = React.lazy(() => import("../pages/Life"));
const HELP = React.lazy(() => import("../pages/Help"));
const STORY = React.lazy(() => import("../pages/sub/Story"));



const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.GRAD, element: <Graduates /> },
  { path: PathConstants.LIFE, element: <Life /> },
  { path: PathConstants.HELP, element: <Help /> },
  { path: PathConstants.STORY, element: <Story /> },
  { path: PathConstants.COMMUNITY, element: <Community /> },
  { path: PathConstants.PARTNER, element: <Partner /> },
  { path: PathConstants.TEAM, element: <Team /> },
  { path: PathConstants.CONTACT, element: <Contact /> },



];
export default routes;
