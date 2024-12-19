import "./Query.scss";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import React, { useState } from "react";

const Query = ({ setIsSubmit, formErrors, setFormErrors }) => {
  const initialValues = {
    username: "",
    email: "",
    Phone_Number: "",
    subject: "",
    query: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues({
      username: "",
      email: "",
      Phone_Number: "",
      subject: "",
      query: "",
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.Phone_Number) {
      errors.Phone_Number = "Phone_Number is required";
    } else if (values.Phone_Number.length < 10) {
      errors.Phone_Number = "Phone_Number must be more than 4 characters";
    } else if (values.Phone_Number.length > 10) {
      errors.Phone_Number =
        "Phone_Number cannot exceed more than 10 characters";
    }
    if (!values.subject) {
      errors.subject = "subject is required!";
    }
    if (!values.query) {
      errors.query = "Message is required!";
    }
    return errors;
  };

  return (
    <>
      <section class="query_section">
        <form class="query_form" onSubmit={handleSubmit}>
          <div class="query_div segment">
            <h1>INQUIRIES</h1>
          </div>

          <label class="query_label">
            <p>{formErrors.username}</p>
            <input
              class="query_input"
              type="name"
              name="username"
              placeholder="Enter your Name"
              value={formValues.username}
              onChange={handleChange}
            />
          </label>

          <label class="query_label">
            <p>{formErrors.email}</p>
            <input
              class="query_input"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>

          <label class="query_label">
            <p>{formErrors.Phone_Number}</p>
            <input
              class="query_input"
              type="tel"
              placeholder="Phone Number"
              name="Phone_Number"
              value={formValues.Phone_Number}
              onChange={handleChange}
            />
          </label>
          <p>{formErrors.subject}</p>
          <label class="query_label">
            <input
              class="query_input"
              type="text"
              placeholder="Subject of query"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
            />
          </label>
          <p>{formErrors.query}</p>
          <label class="query_label">
            <textarea
              class="input_tag_query"
              placeholder="type your message here"
              name="query"
              value={formValues.query}
              onChange={handleChange}
            ></textarea>
          </label>
          <button class="query_button red" type="submit">
            <i className="icon ion-md-lock"></i> Submit
          </button>

          <div className="query_div segment">
            <button class="query_button unit" type="button">
              <a
                class="query_button unit"
                href="https://www.instagram.com/dhakadengg/?hl=en"
                target="_blank"
              >
                {" "}
                <BsInstagram />
              </a>
            </button>
            <button class="query_button unit" type="button">
              <a
                class="query_button unit"
                href="https://www.facebook.com/profile.php?id=100064159980141&mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
            </button>
            <button class="query_button unit" type="button">
              <a
                class="query_button unit"
                href="https://www.youtube.com/@dhakadengineeringservices5207"
                target="_blank"
              >
                <IoLogoYoutube />
              </a>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Query;
