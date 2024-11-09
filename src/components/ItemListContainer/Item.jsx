import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.img} className="img-item" alt={product.name} width={100} />
      <p className="text-item">{product.name}</p>
      <p className="text-item">${product.price}</p>
      <Link to={`/detail/${product.id}`} className="button-detail">Ver detalles</Link> {/* Cambié la ruta aquí */}
    </div>
  );
};

export default Item;
