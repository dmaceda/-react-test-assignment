import mercuryLogo from "../assets/images/logo.svg";
import Modal from "../components/Modal/Modal";
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
