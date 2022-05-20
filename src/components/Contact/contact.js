import './contact.css';

function Contact() {
  return (
    <div className="contactStart">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.497910051433!2d85.51364171426258!3d23.622333299575054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4f3f40cf7d403%3A0x202fc2a1824945ec!2sRd%20Number%203%2C%20Ramgarh%20Cantonment%2C%20Jharkhand%20829122!5e0!3m2!1sen!2sin!4v1652883752836!5m2!1sen!2sin" width="100%" height="500" style={{border: 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>CONTACT</h2>
            <div className="links">
              <div className="link">
                <a><img src="https://cdn-icons-png.flaticon.com/128/1384/1384072.png" alt="linkedin" /></a>
              </div>
              <div className="link">
                <a><img src="https://cdn-icons-png.flaticon.com/128/747/747543.png" alt="facebook" /></a>
              </div>
              <div className="link">
                <a><img src="https://cdn-icons-png.flaticon.com/128/1177/1177585.png" alt="instagram" /></a>
              </div>
              <div className="link">
                <a><img src="https://cdn-icons.flaticon.com/png/128/3059/premium/3059989.png?token=exp=1652971880~hmac=1792443e1c0e4f9a4f8cd56b49c9b22e" alt="email" /></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea className name="message" required defaultValue={""} />
                <label>Message:</label>
              </div>
              <button className="submit-btn">Send</button>  
            </form>
          </div>
        </div>
      </section>
      </div>
        );
    }
    
    export default Contact;