import main from "../assets/images/undraw_job_hunt_re_q203.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        {/* info */}
        <div className="info">
          <img src={logo} alt="logo" width={80} />
          <h1>
            Career <span>Snap</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
