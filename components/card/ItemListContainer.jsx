import { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    fetch('../src/api/data.json')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error al cargar el archivo JSON:', error);
      });
  }, []);

  const filteredItems = category ? items.filter((item) => item.categorys === category) : items;

  return (
    <section className="card-catalog">
      <h2>Lista de productos</h2>
      {filteredItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
}

export default ItemListContainer;