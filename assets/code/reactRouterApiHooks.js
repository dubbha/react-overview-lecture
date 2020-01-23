import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

const FarFromRouter = () => {
  const match = useRouteMatch();
  const location = useLocation();
  const params = useParams();

  return (
    <>
      <div>match.path: {match.path}</div>
      <div>location.pathname: {location.pathname}</div>
      <div>params.answer: {params.answer}</div>
    </>
  );
};