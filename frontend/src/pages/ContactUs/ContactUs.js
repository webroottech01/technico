import React, { useState } from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        try {
          const jsonData = JSON.parse(data);
          console.log(jsonData);

          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });

          setIsSubmitted(true);
        } catch (e) {
          console.error("Error parsing JSON:", e);
          console.error("Response data:", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="contactpage">
      <section className="Contact-us container-max">
        <div className="contact-us-container">
          <div className="top-head">
            <h2 className="text-uppercase fw-semibold">Fill the form</h2>
            <h3 className="text-uppercase fw-semibold">
              to <span>contact us.</span>
            </h3>
          </div>

          <div className="container-max fle">
            <div className="form-container row justify-content-between">
              <div className="user-form col-md-8 form-section">
                {isSubmitted ? (
                  <div className="thank-you-message">
                    <h2>Thank You!</h2>
                    <p>Your message has been successfully sent. We will contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 justify-content-between">
                      <div className="col-md-5 mt-0">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom"
                          id="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-5 mt-0">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom"
                          id="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-0">
                      <input
                        type="email"
                        className="form-control border-0 border-bottom"
                        id="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mt-0">
                      <textarea
                        className="form-control border-0 border-bottom"
                        id="message"
                        placeholder="Enter your message here"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                )}
              </div>

              <div className="help-text col-md-4 text-section">
                <div className="content-box">
                  <h6 className="right-head">• NEED SPECIFIC HELP?</h6>
                  <p className="light-paragraph">
                    Connect with us today to take the first step toward excellence in potato farming and processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
