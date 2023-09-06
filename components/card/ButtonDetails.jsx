import { Link } from "react-router-dom";

function ButtonDetails({item}) {
  return(
    <Link to={`/item/${item.id}`}>Ver detalles</Link>
  );
}

export default ButtonDetails;