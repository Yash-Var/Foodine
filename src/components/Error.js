import { useRouteError } from "react-router-dom";

const Error = () => {
  const Er = useRouteError();
  console.log();
  return <h1>{Er.status + " Page  " + Er.statusText}</h1>;
};
export default Error;
