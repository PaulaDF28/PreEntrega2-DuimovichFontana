import ButtonDetails from "./ButtonDetails";

function Card({item}) {
  return (
    <article key={item.id}>
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>Categoría: {item.category}</p>
        <p>Precio: ${item.price}</p>
        <p>{item.description}</p>
        
        <ButtonDetails 
          item={item}
        />
      </div>
    </article>
  );
}

export default Card;