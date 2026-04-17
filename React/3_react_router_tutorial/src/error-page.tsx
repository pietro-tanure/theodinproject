import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function getErrorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) return error.statusText;
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;

  console.error(error);
  return "Unknown Error";
}

export default function ErrorPage() {
  const error = useRouteError();
  const message = getErrorMessage(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
}