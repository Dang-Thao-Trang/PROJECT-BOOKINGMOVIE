import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import router from "./router/router";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
