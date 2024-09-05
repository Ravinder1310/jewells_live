import React from 'react';
import './ShippingPolicy.css'; // Import the CSS file

function ShippingPolicy() {
  return (
    <div className="shipping-container">
      <h1 className="shipping-header">Shipping Policy</h1>

      <p className="shipping-intro">
        At House of Sadgi, we want to make sure you receive your order as quickly and conveniently as possible. Here's what you need to know about our shipping policy:
      </p>

      <div className="shipping-section">
        <h2 className="shipping-title">Shipping Methods</h2>
        <p className="shipping-text">
          We offer <strong>free shipping</strong> all over India.
        </p>
      </div>

      <div className="shipping-section">
        <h2 className="shipping-title">Shipping Times</h2>
        <p className="shipping-text">
          We strive to process and ship all orders as quickly as possible. In-stock items are usually processed and shipped within <strong>1-2 business days</strong>. Delivery times may vary depending on the shipping method selected and the destination. Please note that delivery times may be longer during holidays or other peak periods.
        </p>
      </div>

      <div className="shipping-section">
        <h2 className="shipping-title">Tracking Your Order</h2>
        <p className="shipping-text">
          Once your order is shipped, you will receive a confirmation email with tracking information. You can track your order by clicking on the tracking link in the email or by logging in to your account on our website.
        </p>
      </div>

      <div className="shipping-section">
        <h2 className="shipping-title">Shipping Restrictions</h2>
        <p className="shipping-text">
          We currently only ship to cities in India. Some products may have additional shipping restrictions due to size, weight, or other factors. We reserve the right to refuse shipping to any address for any reason.
        </p>
      </div>

      <div className="shipping-section">
        <h2 className="shipping-title">Shipping Address</h2>
        <p className="shipping-text">
          Please make sure to provide accurate and complete shipping information, including the recipient's name, address, and phone number. We are not responsible for any delays or additional shipping fees resulting from incorrect or incomplete shipping information.
        </p>
      </div>

      <div className="shipping-section">
        <h2 className="shipping-title">Shipping Damage or Loss</h2>
        <p className="shipping-text">
          If your order is damaged or lost during shipping, please contact our customer service team immediately. We will work with you to resolve the issue and provide a replacement or refund as necessary.
        </p>
      </div>

      <div className="shipping-section">
        <h2 className="shipping-title">Contact Us</h2>
        <p className="shipping-text">
          If you have any questions or concerns about our shipping policy, please don't hesitate to contact our customer service team via email.
        </p>
      </div>
    </div>
  );
}

export default ShippingPolicy;
