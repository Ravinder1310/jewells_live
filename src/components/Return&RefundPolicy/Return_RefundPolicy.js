import React from 'react';
import './ReturnRefundPolicy.css'; // Import the CSS file

function Return_RefundPolicy() {
  return (
    <div className="refund-container">
      <h1 className="refund-header">Return & Refund Policy</h1>
      <p className="refund-intro">
        At House of Sadgi, we want you to be completely satisfied with your purchase. If you're not satisfied with your purchase, we accept returns within <strong>7 days</strong> of the purchase date. To be eligible for a return, the item must be in its original condition, unused, and in its original packaging.
      </p>

      <div className="refund-section">
        <h2 className="refund-title">How to Initiate a Return</h2>
        <p className="refund-text">
          To initiate a return, please contact our customer service team via email with your order number and reason for return. Our team will provide you with a return authorization number and instructions on how to send the item back to us. First, you have to send the parcel to our mentioned address.
        </p>
      </div>

      <div className="refund-section">
        <h2 className="refund-title">Return Shipping Costs</h2>
        <p className="refund-text">
          Please note that the customer is responsible for the cost of return shipping. We will deduct:
        </p>
        <ul className="refund-list">
          <li>100 RS for maintenance (includes GST, Payment Gateway Charges, Order Processing Charges)</li>
          <li>200 RS for courier charges (includes return & reverse pickup)</li>
        </ul>
        <p className="refund-text">
          We recommend using a shipping method with tracking and insurance, as we are not responsible for lost or damaged items during the return shipping process.
        </p>
      </div>

      <div className="refund-section">
        <h2 className="refund-title">Refund Process</h2>
        <p className="refund-text">
          Once we receive your returned item and verify that it is in its original condition, we will issue a refund to your original payment method or provide you with store credit for the purchase price of the item. Once the refund is processed, it will take <strong>5 to 12 business working days</strong> to reflect in your account.
        </p>
      </div>

      <div className="refund-section">
        <h2 className="refund-title">Payment Methods for Refund</h2>
        <p className="refund-text">
          Payment refunds are available via Google Pay, Paytm, Phone Pay, & Bank Transfer. <strong>We do not offer cash back.</strong>
        </p>
      </div>

      <div className="refund-section">
        <h2 className="refund-title">Contact Us</h2>
        <p className="refund-text">
          If you have any questions or concerns about our return policy, please don't hesitate to contact our customer service team.
        </p>
      </div>
    </div>
  );
}

export default Return_RefundPolicy;
