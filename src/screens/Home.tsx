import mercuryLogo from "../assets/images/logo.svg";
import Form from "../components/Form/Form";

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
