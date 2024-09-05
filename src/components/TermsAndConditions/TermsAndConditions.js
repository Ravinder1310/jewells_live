import React from 'react';
import './TermsAndConditions.css'; // Import the CSS file

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-header">Terms & Conditions</h1>

      <p className="terms-intro">
        Welcome to House of Sadgi, the online store where you can find a wide variety of products. By accessing or using our website, you agree to be bound by these terms and conditions. Please read them carefully before using our website.
      </p>

      <div className="terms-section">
        <h2 className="terms-title">1. Use of the Website</h2>
        <p className="terms-text">
          You may use our website only for lawful purposes and in accordance with these terms and conditions. You must not use our website in any way that violates any applicable federal, state, local, or international law or regulation.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">2. Intellectual Property Rights</h2>
        <p className="terms-text">
          The content of this website, including but not limited to text, graphics, logos, images, and software, is the property of House of Sadgi or its suppliers and is protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, or modify any part of this website without our prior written consent.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">3. Product Information and Pricing</h2>
        <p className="terms-text">
          We strive to provide accurate product descriptions and pricing information on our website. However, we do not guarantee that all product descriptions, pricing, or other content on the website is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">4. Payment and Shipping</h2>
        <p className="terms-text">
          We accept various payment methods on our website, and shipping options may vary depending on the product and location. Please review our payment and shipping policies for more information.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">5. Returns and Refunds</h2>
        <p className="terms-text">
          We accept returns and offer refunds for eligible items as outlined in our return and refund policies. Please review these policies carefully before making a purchase.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">6. User Content</h2>
        <p className="terms-text">
          You may have the opportunity to submit or post reviews, comments, or other content on our website. By submitting such content, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">7. Disclaimer of Warranties</h2>
        <p className="terms-text">
          We make no warranties or representations about the accuracy or completeness of the content on this website or the products sold on this website. We do not guarantee that the website will be free of viruses or other harmful components. You use the website and products at your own risk.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">8. Limitation of Liability</h2>
        <p className="terms-text">
          In no event shall House of Sadgi be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or the products sold on this website, whether based on contract, tort, strict liability, or other theory of liability.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">9. Governing Law</h2>
        <p className="terms-text">
          These terms and conditions shall be governed by and construed in accordance with the laws of India, without giving effect to any choice of law or conflict of law provisions.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-title">10. Changes to Terms and Conditions</h2>
        <p className="terms-text">
          We reserve the right to change or modify these terms and conditions at any time without prior notice. Your continued use of the website after any changes or modifications constitutes your acceptance of the revised terms and conditions.
        </p>
      </div>

      {/* <div className="terms-section">
        <h2 className="terms-title">GST: 24CVTPM2374M1ZV (OWN BY - D4 FASHION)</h2>
      </div> */}

      <div className="terms-section">
        <h2 className="terms-title">Contact Us</h2>
        <p className="terms-text">
          If you have any questions or concerns about these terms and conditions, please contact us via email.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
