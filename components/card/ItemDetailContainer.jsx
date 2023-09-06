import { useParams } from "react-router-dom";
import data from "../../api/data.json";

function ItemDetailContainer() {
  const { id } = useParams();
  const item = data.find((item) => item.id === Number(id));

  return(
    <div className="details">
      <div className="details-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="details-info">
        <h4>Descripción</h4>
        <p>{item.descriptionDetails}</p>
        <h4>Categoría</h4>
        <p>{item.categorys}</p>
      </div>
    </div>
  )
}

export default ItemDetailContainer;