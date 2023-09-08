/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const PrivacyDetails = ({ theme }) => {
    const messageRef = React.useRef(null);
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

    return (
        <section className="blog-pg single section-padding-b pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="post">
                            <div className="content pt-60">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="cont">
                                            <h4 className="extra-title">
                                                Effective Date: August 27th, 2023
                                            </h4>
                                            <div className="spacial">
                                                <p>Welcome to Fan Fusion (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you interact with our website and services. By accessing or using Fan Fusion, you agree to the terms outlined in this Privacy Policy.</p>

                                                <h2>1. Information We Collect</h2>
                                                <p>We may collect various types of information, including:</p>
                                                <ul>
                                                    <li>Personal Information: When you create an account, sign up for our services, or communicate with us, we may collect information such as your name, email address, payment information, and other relevant details.</li>
                                                    <li>Usage Information: We may collect information about how you use our website and services, including your interactions, preferences, and browsing history.</li>
                                                    <li>Cookies and Tracking Technologies: We use cookies and similar technologies to enhance your experience on our platform and gather information about your usage patterns.</li>
                                                </ul>

                                                <h2>2. How We Use Your Information</h2>
                                                <p>We may use your information for various purposes, including:</p>
                                                <ul>
                                                    <li>Providing and Improving Services: To deliver and enhance our services, develop new features, and personalize your experience.</li>
                                                    <li>Communication: To respond to your inquiries, send you updates, and provide important information.</li>
                                                    <li>Marketing: We may send you promotional content about our services, but you can opt out of these communications.</li>
                                                    <li>Legal and Security: To comply with legal obligations, protect our rights and interests, and prevent fraudulent or malicious activities.</li>
                                                </ul>

                                                <p>By using Fan Fusion, you agree to the terms of this Privacy Policy. Please review this policy regularly to stay informed about our data practices.</p>

                                                <h2>3. Information Sharing and Disclosure</h2>
                                                <p>We may share your information with third parties in the following cases:</p>
                                                <ul>
                                                    <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in delivering our services.</li>
                                                    <li><strong>Legal Requirements:</strong> We may disclose your information to comply with legal obligations, respond to lawful requests, and protect our rights.</li>
                                                </ul>

                                                <h2>4. Your Choices</h2>
                                                <p>You have certain rights and choices regarding your information:</p>
                                                <ul>
                                                    <li><strong>Access and Correction:</strong> You can access and update your personal information through your account settings.</li>
                                                    <li><strong>Opt-Out:</strong> You can opt out of receiving promotional communications from us by following the instructions provided in the communication.</li>
                                                    <li><strong>Cookies:</strong> You can manage your cookie preferences through your browser settings.</li>
                                                </ul>

                                                <h2>5. Security</h2>
                                                <p>We take reasonable measures to protect your information from unauthorized access, disclosure, or alteration. However, no method of data transmission is entirely secure.</p>

                                                <h2>6. Children&apos;s Privacy</h2>
                                                <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect or solicit personal information from minors.</p>

                                                <h2>7. Changes to this Policy</h2>
                                                <p>We may update this Privacy Policy from time to time to reflect changes in our practices. We will notify you of any significant changes.</p>

                                                <h2>8. Contact Us</h2>
                                                <p>If you have any questions or concerns about this Privacy Policy, please contact us at hello@fanfusion.net</p>

                                                <p>By using Fan Fusion, you agree to the terms of this Privacy Policy. Please review this policy regularly to stay informed about our data practices.</p>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyDetails;
