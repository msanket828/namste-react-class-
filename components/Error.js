import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <h1>Oops! something went wrong</h1>
      <h2>
        status: {error.status} and message: {error.statusText}
      </h2>
    </div>
  );
};

export default Error;
