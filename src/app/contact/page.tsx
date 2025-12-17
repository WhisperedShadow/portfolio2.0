"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./page.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Head from "next/head";

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    inquiryType: "Collaboration Opportunities",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
      } else {
        setResponseMessage(`Failed to send message: ${result.message}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        inquiryType: "Collaboration Opportunities",
        message: "",
      });

      setTimeout(() => setResponseMessage(""), 5000);
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:youremail@example.com",
      label: "Email",
    },
    {
      icon: <FaFacebook />,
      url: "mailto:youremail@example.com",
      label: "Facebook",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Me | Let&apos;s Create Together</title>
        <meta
          name="description"
          content="Get in touch for collaboration opportunities, freelance services, or just to say hello!"
        />
      </Head>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Let&apos;s Create Something Amazing Together!
            </h1>
            <p className={styles.subtitle}>
              Have an idea, a question, or just want to say hi? Drop a message
              below, and I&apos;ll get back to you as soon as possible!
            </p>
          </div>

          <div className={styles.content}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={styles.input}
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={styles.input}
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="inquiry-type" className={styles.label}>
                  Subject
                </label>
                <select
                  name="inquiryType"
                  id="inquiry-type"
                  className={styles.select}
                  value={formData.inquiryType}
                  onChange={handleChange}
                >
                  <option value="Collaboration Opportunities">
                    Collaboration Opportunities
                  </option>
                  <option value="Freelance/Consulting Services">
                    Freelance/Consulting Services
                  </option>
                  <option value="Technical Guidance">Technical Guidance</option>
                  <option value="General Questions or Chat">
                    General Questions or Chat
                  </option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={styles.textarea}
                  placeholder="Type your message here..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`${styles.submitButton} ${
                  isSubmitting ? styles.loading : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {responseMessage && (
                <div
                  className={`${styles.responseMessage} ${
                    responseMessage.includes("successfully")
                      ? styles.success
                      : styles.error
                  }`}
                >
                  {responseMessage}
                </div>
              )}
            </form>

            <div className={styles.sidebar}>
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Connect with me</h3>
                <p className={styles.socialDescription}>
                  Feel free to reach out through any of these platforms
                </p>

                <div className={styles.socialIcons}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={styles.socialIcon}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                      <span className={styles.socialLabel}>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.contactInfo}>
                <h3 className={styles.infoTitle}>Contact Information</h3>
                <div className={styles.infoItem}>
                  <FaEnvelope className={styles.infoIcon} />
                  <div>
                    <h4>Email</h4>
                    <p>youremail@example.com</p>
                  </div>
                </div>
                <div className={styles.infoNote}>
                  <p>I typically respond within 24-48 hours.</p>
                  <p>Looking forward to connecting with you!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
