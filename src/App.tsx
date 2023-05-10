import 'rsuite/dist/rsuite.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./routes/Layout.tsx";
import BrandSearch from "./routes/BrandSearch.tsx";
import ProcessFollowUp from "./routes/ProcessFollowUp.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        element: <BrandSearch />,
      },
      {
        path: "acompanhamento-de-processos",
        element: <ProcessFollowUp />,
      },
      ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  )
}

export function Fallback() {
  return <p>Performing initial data load</p>;
}
