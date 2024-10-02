import "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>© 2024 Airbnb, Inc.</div>
      <div className="socialMedia">
      
        <FontAwesomeIcon style={{marginLeft:"10px"}} icon={faFacebook} />
        <FontAwesomeIcon style={{marginLeft:"10px"}} icon={faTwitter} />
          <FontAwesomeIcon  style={{marginLeft:"10px"}} icon={faSquareInstagram} />
     
      </div>
    </footer>
  );
};

export default Footer;