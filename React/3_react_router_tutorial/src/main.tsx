import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import { loader as rootLoader, action as rootAction } from "./routes/rootHandlers"
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import { loader as contactLoader, action as contactAction } from "./routes/contactHandlers";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";


import { createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route errorElement={<div>Oops! There was an error</div>}
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           { index: true, element: <Index /> },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction,
//           },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction,
//           },
//           {
//             path: "contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: contactLoader,
//             action: editAction,
//           },
//           {
//             path: "contacts/:contactId/destroy",
//             action: destroyAction,
//             errorElement: <div>Oops! There was an error</div>
//           }
//         ],
//       },
//     ],
//   },
// ]);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure there is a <div id='root'></div> in your index.html.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
