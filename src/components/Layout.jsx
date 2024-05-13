import { Outlet, Link } from "react-router-dom";
import './Styles.css'; 

// Define the Layout component
function Layout() {
  return (
    // Main container with minimum height to fill the viewport and flex layout
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold nav-link" to="/">React Routing Demo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
        
      <div className="container-fluid flex-grow-1">
        <Outlet />
      </div>

       
      <footer className="footer py-3">
        <div className="container text-center">
          <p className="footer-text">Gem Michael</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
