import { useRouteError } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <MainLayout>
      <div
        id="error-page"
        className="flex w-full h-screen justify-center items-center text-white"
      >
        <div>
          <h1 className="text-6xl mb-4">Oops!</h1>
          <p>Página no encontrada.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
