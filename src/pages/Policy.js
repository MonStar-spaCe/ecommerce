import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
At our Ecommerce App, your privacy and security are our top priorities. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our ecommerce app. By accessing or using our app, you consent to the practices described in this policy.
Personal information such as your name, email address, phone number, and shipping address.
We do not sell or rent your personal information to third parties. However, we may share your information with:
We do not knowingly collect or store personal information from children under 13 without parental consent.
Thank you for trusting us with your information. Your privacy is essential to us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;