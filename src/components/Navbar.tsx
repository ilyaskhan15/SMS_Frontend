const Navbar = () => (
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
      <ul className="nav">
        <li className="nav-item"><a className="nav-link text-dark" href="#">Home</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">Features</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">Login</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">Register</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;