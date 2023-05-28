import React, { useState } from "react";

const initValue = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const initState = { values: initValue };

const Contact = () => {
  const [state, setState] = useState(initState);
  const [disableBtn, setDisableBtn] = useState(true);
  const { values } = state;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const getIsFormValid = () => {
    const { name, email, phone, subject, message } = values;
    const isFormValid =
      name && validateEmail(email) && phone && subject && message;
    setDisableBtn(!isFormValid);
    return isFormValid;
  };

  // Reset Input Field handler
  const resetInputField = (event) => {
    setState(initState);
    setDisableBtn(true);
  };

  const changeHandler = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
    getIsFormValid();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
      alert("Message sent!"); // display success message
      resetInputField();
    }
  };
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form onSubmit={submitHandler}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              onChange={changeHandler}
              name="name"
              value={values.name}
            />
            <input
              type="mail"
              placeholder="Email"
              value={values.email}
              name="email"
              onChange={changeHandler}
            />
          </div>
          <div className="input-box">
            <input
              type="tel"
              placeholder="Mobile Number"
              value={values.phone}
              name="phone"
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Subject"
              value={values.subject}
              name="subject"
              onChange={changeHandler}
            />
          </div>
          <textarea
            cols="20"
            rows="5"
            placeholder="Your Message"
            value={values.message}
            name="message"
            onChange={changeHandler}
          />
          <button
            type="submit"
            value="Send Message"
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : "contact-button"}
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
