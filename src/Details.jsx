import { useParams } from "react-router-dom";

const Details = () => {
  // id is coming from the url: /details/:id
  const { id } = useParams()
  return <h2>hi! {id}</h2>;
};

export default Details;