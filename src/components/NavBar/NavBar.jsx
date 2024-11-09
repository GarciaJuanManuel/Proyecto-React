import { Link } from "react-router-dom";
import { BsHouse } from 'react-icons/bs'; // Importa el ícono de la casa
import CartWidget from './CartWidget';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="categories">
        <li className="category">
          <Link to="/category/Nike" className="text-link">Nike</Link>
        </li>
        <li className="category">
          <Link to="/category/Adidas" className="text-link">Adidas</Link>
        </li>
        <li className="category">
          <Link to="/category/Puma" className="text-link">Puma</Link>
        </li>
      </ul>

      <Link to="/" className="brand primary-font-color">
        <p className="title-brand">Jota Tienda</p>
      </Link>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
