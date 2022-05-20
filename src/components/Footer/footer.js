import './footer.css';

function Footer() {
  return (
    <div className="footer">
    <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic">About us</div>
              <p>Surya nagar road no-3 Bijulia talab road ward no -8 
                   Ramgarh canttRamgarh Jharkhand 829122 
          India..</p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone">
                <a href="#"><i className="fas fa-phone-volume" />+0123456789</a>
              </div>
              <div className="email">
                <a href="#"><i className="fas fa-envelope" />abc@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">Search</div>
            <div><a href="#">Home</a></div>
            <div><a href="#">About</a></div>
            <div><a href="#">Services</a></div>
            <div><a href="#">Terms of Service</a></div>
            <div><a href="#">Refund Policy</a></div>
            <div><a href="#">Privacy Policy</a></div>
            <div><a href="#">Help</a></div>
            <div><a href="#">Helpline number</a></div>
          </div>
          <div className="right box">
            <div className="topic">Join Our Newsletter</div>
            <form action="#">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name defaultValue="Send" />
              <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2022 <a href="#">VisudhAjivam</a> All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
