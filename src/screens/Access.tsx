import mercuryLogo from "../assets/logo.svg";
import Modal from "../components/Modal";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Access = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.length === 0 && navigate("/");
  }, []);

  return (
    <>
      <div className="home-container">
        <div>
          <img src={mercuryLogo} id="logo" alt="Mercury Logo" />
        </div>
        <Modal />
      </div>
    </>
  );
};

export default Access;
