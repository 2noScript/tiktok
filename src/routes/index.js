//pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

import routesConfig from '~/configs/routes'

//layout

import { DefaultLayout } from "~/components/Layouts";
import { Fragment } from "react";

const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: DefaultLayout },
  { path: routesConfig.following, component: Following, layout: DefaultLayout },
  { path: routesConfig.profile, component: Profile, layout: DefaultLayout },
  { path: routesConfig.upload, component: Upload, layout: Fragment },
  { path: routesConfig.search, component: Upload, layout: DefaultLayout },

];
const privateRoutes = {};
export { publicRoutes, privateRoutes };
