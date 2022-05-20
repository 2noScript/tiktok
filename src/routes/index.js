//pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

//layout

import { DefaultLayout } from "~/components/Layouts";
import { Fragment } from "react";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/following", component: Following, layout: DefaultLayout },
  { path: "/profile", component: Profile, layout: Fragment },
  { path: "/upload", component: Upload, layout: Fragment },
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };
