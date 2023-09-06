import { Link } from "react-router-dom";

function ItemListContainer() {
  return (
    <nav className="itemListContainer">
      <Link to="/category/dama">mujer</Link>
      <Link to="/category/caballero">hombre</Link>
      <Link to="/category/ninos">niños</Link>
    </nav>
  );
}

export default ItemListContainer;