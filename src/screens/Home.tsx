import mercuryLogo from "../assets/logo.svg";
import Form from "../components/Form";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <img src={mercuryLogo} id="logo" alt="Mercury Logo" />
      </div>
      <Form />
    </div>
  );
};

export default Home;
