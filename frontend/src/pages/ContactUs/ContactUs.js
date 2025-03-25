import React, { useState } from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  console.log("API URL:", process.env.REACT_APP_API_URL);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loader

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json();
      console.log("Success:", data);

      setFormData({
        first_name: "",
        last_name: "",
        company_name: "",
        email: "",
        message: "",
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loader
    }
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
                          id="first_name"
                          placeholder="First Name"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                          disabled={loading} // Disable input when loading
                        />
                      </div>
                      <div className="col-md-5 mt-0">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom"
                          id="last_name"
                          placeholder="Last Name"
                          value={formData.last_name}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="mt-0">
                      <input
                        type="text"
                        className="form-control border-0 border-bottom"
                        id="company_name"
                        placeholder="Company"
                        value={formData.company_name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
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
                        disabled={loading}
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
                        disabled={loading}
                      ></textarea>
                    </div>
                    
                    {/* Loader */}
                    {loading && <div className="loader">Sending...</div>}

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
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
