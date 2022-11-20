import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import mercuryLogo from "../assets/images/logo.svg";
import Modal from "../components/Modal/Modal";
import { motion } from "framer-motion";

const Access = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.length === 0 && navigate("/");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="home-container">
        <div>
          <img src={mercuryLogo} id="logo" alt="Mercury Logo" />
        </div>
        <Modal />
      </div>
    </motion.div>
  );
};

export default Access;
