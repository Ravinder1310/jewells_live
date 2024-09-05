import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file

function Privacy_Policy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-header">Privacy Policy</h1>
      <p className="privacy-intro">
        This privacy policy explains how we collect, use, and protect your personal information when you use our website.
      </p>

      <div className="privacy-section">
        <h2 className="privacy-title">1. Information We Collect</h2>
        <p className="privacy-text">
          We may collect various types of personal information from you when you use our website, including but not limited to:
        </p>
        <ul className="privacy-list">
          <li>Name, email address, phone number, and shipping/billing address</li>
          <li>Payment information (such as credit card details)</li>
          <li>Information about your purchase history and preferences</li>
          <li>Demographic information (such as age, gender, and interests)</li>
          <li>Information about your device and internet usage (such as IP address, browser type, and operating system)</li>
        </ul>
        <p className="privacy-text">
          We may collect this information directly from you or from third-party sources, such as social media platforms or analytics providers.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-title">2. How We Use Your Information</h2>
        <p className="privacy-text">
          We may use your personal information for various purposes, including but not limited to:
        </p>
        <ul className="privacy-list">
          <li>Processing and fulfilling your orders</li>
          <li>Communicating with you about your orders, promotions, and other updates</li>
          <li>Personalizing your shopping experience and recommending products</li>
          <li>Improving our website, products, and services</li>
          <li>Preventing fraud and unauthorized transactions</li>
          <li>Complying with legal requirements and protecting our rights</li>
        </ul>
        <p className="privacy-text">
          We will only use your personal information for the purposes for which it was collected, unless we obtain your consent for other uses.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-title">3. How We Share Your Information</h2>
        <p className="privacy-text">
          We may share your personal information with third parties for various purposes, including but not limited to:
        </p>
        <ul className="privacy-list">
          <li>Shipping carriers and fulfillment providers</li>
          <li>Payment processors and fraud prevention services</li>
          <li>Marketing and advertising partners</li>
          <li>Analytics and website hosting providers</li>
          <li>Legal and regulatory authorities</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-title">4. How We Protect Your Information</h2>
        <p className="privacy-text">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security technologies and procedures to safeguard your information.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-title">5. Your Rights and Choices</h2>
        <p className="privacy-text">
          You have certain rights and choices regarding your personal information, including but not limited to:
        </p>
        <ul className="privacy-list">
          <li>Accessing and updating your personal information</li>
          <li>Opting out of marketing communications</li>
          <li>Deleting your personal information</li>
          <li>Objecting to certain uses of your personal information</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-title">6. Children's Privacy</h2>
        <p className="privacy-text">
          Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-title">7. Changes to this Privacy Policy</h2>
        <p className="privacy-text">
          We may update this privacy policy from time to time. If we make any material changes, we will notify you.
        </p>
      </div>

      {/* <p className="privacy-gst">GST: 24CVTPM2374M1ZV (Owned by - D4 FASHION)</p> */}
      <p className="privacy-footer">
        Note: Each party irrevocably agrees that the courts of Surat shall have exclusive jurisdiction to settle any dispute or claim.
      </p>
    </div>
  );
}

export default Privacy_Policy;
