import App from './App.tsx';
import Profile from './Profile.tsx';
import ErrorPage from './ErrorPage.tsx';
import Dynamic from './Dynamic.tsx';
import DefaultProfile from './DefaultProfile.tsx';
import Popeye from './Popeye.tsx';
import Spinach from './Spinach.tsx';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
      { index: true, element: <DefaultProfile /> },
    ],
  },
  {
    path: "dynamic/:name",
    element: <Dynamic />,
  }
]

export default routes;