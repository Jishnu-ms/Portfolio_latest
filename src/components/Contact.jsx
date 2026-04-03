import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [resultMessage, setResultMessage] = useState("");

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info reveal">
            <h3>Let's talk about everything!</h3>
            <p>
              Feel free to reach out for collaborations, internship opportunities,
              or just a friendly hello. I'm currently looking for new opportunities
              and my inbox is always open.
            </p>

            <div className="info-items">
              <div className="info-item">
                <span className="info-icon"><FaEnvelope /></span>
                <span className="info-text">jishnums830@gmail.com</span>
              </div>

              <div className="info-item">
                <span className="info-icon"><FaMapMarkerAlt /></span>
                <span className="info-text">Available Worldwide</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/Jishnu-ms" className="social-circle" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/jishnums830/" className="social-circle" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper glass-effect reveal">
            {status === 'success' ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>

                <button
                  className="btn btn-secondary mt-4"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus("submitting");

                  const formData = new FormData(e.target);

                  // env key
                  formData.append(
                    "access_key",
                    import.meta.env.VITE_WEB3FORMS_KEY
                  );

                  // optional (recommended)
                  formData.append("subject", "Portfolio Contact");
                  formData.append("from_name", "Jishnu Portfolio");

                  try {
                    const response = await fetch(
                      "https://api.web3forms.com/submit",
                      {
                        method: "POST",
                        body: formData
                      }
                    );

                    const data = await response.json();

                    if (data.success) {
                      setStatus("success");
                      e.target.reset();
                    } else {
                      setStatus("error");
                      setResultMessage(
                        data.message || "Something went wrong. Please try again."
                      );
                    }
                  } catch (error) {
                    console.error(error);
                    setStatus("error");
                    setResultMessage("Error submitting the form.");
                  }
                }}
              >
                <div className="form-group border-gradient">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group border-gradient">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group border-gradient">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group border-gradient">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="error-message">{resultMessage}</p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting'
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;