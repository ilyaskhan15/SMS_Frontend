interface NavbarProps {
  onRegisterClick?: () => void;
  onLoginClick?: () => void; // <-- Add this line
}

const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onLoginClick }) => (
  <nav className="navbar navbar-light bg-white py-3">
    <div className="container d-flex justify-content-between align-items-center">
      <a className="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2" href="#">
        <img
          src="/src/assets/Lyceum.jpeg"
          alt="LyceumSchool Logo"
          style={{ height: "40px" }}
        />
        <span>LyceumSchool</span>
      </a>
      <ul className="nav align-items-center">
        <li className="nav-item"><a className="nav-link text-dark" href="#">Home</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">Features</a></li>
        <li className="nav-item">
          <button
            className="nav-link btn btn-link text-dark align-self-center"
            style={{ textDecoration: "none" }}
            onClick={onLoginClick}
          >
            Login
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link btn btn-link text-dark align-self-center"
            style={{ textDecoration: "none" }}
            onClick={onRegisterClick}
          >
            Register
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;