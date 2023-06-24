function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="contact">
          <h3>Gic Bonus</h3>
          <p>
            A108 Adam Street <br />
            New York, NY 535022
            <br />
            United States <br />
            <br />
            <strong>Phone:</strong> +237 6 94 57 93 15
            <br />
            <strong>Email:</strong> info@example.com
            <br />
          </p>
        </div>

        <div className="links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h4>Our Social Networks</h4>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="social-links">
            <a href="#" className="twitter">
              <img src="./Icon/twitter.png" alt="twitter" />
            </a>
            <a href="#" className="facebook">
              <img src="./Icon/Facebook.png" alt="facebook" />
            </a>
            <a href="#" className="instagram">
              <img src="./Icon/instagram.png" alt="instagram" />
            </a>
            <a href="#" className="google-plus">
              <img src="./Icon/google.png" alt="google" />
            </a>
            <a href="#" className="linkedin">
              <img src="./Icon/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className="container bottom">
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span> Gic Bonus</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="/">dimysenpai</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
