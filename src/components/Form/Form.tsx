import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Form.css";

import { login } from "../../api/index";
import { joinClassNames } from "../../utils/joinClassNames";

import log from "../../assets/images/in.svg";
import close from "../../assets/images/close.svg";
import loader from "../../assets/images/loader.svg";

type Person = {
  email: string;
  password: string;
};

const Form = () => {
  const [userData, setUserData] = useState("init");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Person>();

  const handleChange = () => {
    setUserData("init");
  };

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    login({ email: data.email, password: data.password })
      .then((res: any) => {
        if (res.data) {
          setUserData(res.data);
          setLoading(false);
          sessionStorage.setItem("name", res.data.name);
          sessionStorage.setItem("avatar", res.data.avatar);
          navigate("/access");
        } else {
          console.log(res.error);
          setUserData("");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="form-main">
      <form onSubmit={onSubmit} className="form">
        <div className="form-container">
          <div className="form-info">
            <p id="title">Welcome, Stranger</p>
            <p id="subtitle">
              Please log in to this form if you wish to pass the exam.
            </p>
          </div>

          <div className="input-container">
            <label htmlFor="email"></label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^@\s]+@[^@\s]+$/,
              })}
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              className={errors.email || !userData ? "input-error" : "input"}
              onChange={handleChange}
            />
            {errors.email || !userData ? (
              <img id="close" src={close} alt="close" />
            ) : null}
            {errors.email?.type === "required" && (
              <p className="errors">Email is required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="errors">Incorret email</p>
            )}
          </div>

          <div className="input-container">
            <label htmlFor="password"></label>
            <input
              {...register("password", { required: true })}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className={errors.password || !userData ? "input-error" : "input"}
              onChange={handleChange}
            />
            {errors.password || !userData ? (
              <img id="close" src={close} alt="close" />
            ) : null}
            {errors.password?.type === "required" && (
              <p className="errors">Password is required</p>
            )}
          </div>

          {/* Join classes test */}

          <button
            id={!loading ? "button" : "button-without-shadow"}
            type="submit"
            className={joinClassNames(["button-part1", "button-part2"])}
          >
            {!loading ? (
              <div className="button-content">
                <p>Login </p>
                <img src={log} alt="login" id="in" />
              </div>
            ) : (
              <div className="spinner-container">
                <img src={loader} alt="loader" />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
