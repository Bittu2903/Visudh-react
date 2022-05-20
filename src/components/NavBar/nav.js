import './nav.css';

function NavBar() {
  return (
    <div>
      {/* navbar */}
      <nav>
          <div className="logo">
            <img src="./visudh.png" alt="Logo Image" />
          </div>
          <div className="hamburger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#department">Deapartments</a></li>
            <button className="login-button" href="#">Login</button>
            <button className="join-button" href="#">Make an Appointment</button>
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;
