import spfLogo from "../assets/spf-logo.png";
import swastiLogo from "../assets/swasti-logo.svg"
import Image from "react-bootstrap/Image";

function Logos() {
  return (
    <div className="d-flex flex-column align-items-center gap-4 w-100">
      <Image
        src={spfLogo}
        alt="SPF Logo"
        style={{
          width: "20rem",
          maxWidth: "80%",
          marginLeft: "12rem",
          marginRight: "auto",
        }}
      />
      <Image
        src={swastiLogo}
        alt="Swasti Logo"
        style={{
          width: "18rem",
          maxWidth: "70%",
          marginLeft: "12rem",
          marginRight: "auto",
          marginTop: "3rem",
        }}
      />
    </div>
  );
}

export default Logos;