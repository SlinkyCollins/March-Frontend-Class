import { useParams } from "react-router-dom";

const Details = () => {
    const { user, id } = useParams();
  return <div>Details : {user} id : { id }</div>;
}

export default Details;