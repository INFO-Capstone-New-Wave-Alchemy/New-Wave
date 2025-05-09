import React from "react";
import '../index.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Have a Question?</h2>
        <p className="contact-subtitle">Contact us:</p>
        <p className="contact-info">
          <strong>Email:</strong>{' '}
          <a href="mailto:www.thenewwaveventure.io">www.thenewwaveventure.io</a>
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> +1 (719) 565-9196
        </p>
      </div>
      {/* Right content - Image placeholder */}
      <div className="image-placeholder">
          <img
            src="../img/NWV_LinkedIn_PFP_v01.png"
            alt="Dashboard Preview"
            className="dashboard-image"
          />
        </div>
    </div>
  );
}

export default Contact;
