
import {Link} from 'react-router-dom'
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">E-Commerce</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id='navbarNav'>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">Login </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Customer">Customers</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Product">Products</Link>
      </li>
      </ul>
  </div>
  
</nav>
 </div>
   );
}

export default Navbar;
