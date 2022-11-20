import mercuryLogo from "../assets/images/logo.svg";
import Form from "../components/Form/Form";
import { motion } from "framer-motion";

const Home = () => {
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
        <Form />
      </div>
    </motion.div>
  );
};

export default Home;
