import React from 'react';
import Footer from './Footer';

const ContactPage = () => {
  // Sample FAQ data
  const faqs = [
    {
      question: 'How do I submit my manuscript?',
      image: `${process.env.PUBLIC_URL}/ContactPage-FAQ2.png`,
      answer: 'You can submit your manuscript through our online submission portal. Make sure to follow the guidelines provided for formatting and content.',
    },
    {
      question: 'Can I track my book sales on the platform?',
      image: `${process.env.PUBLIC_URL}/ContactPage-FAQ1.png`,
      answer: 'Yes, authors can track their book sales and earnings through our user-friendly dashboard. Real-time updates and detailed reports are available.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="contact-page-container">
      <h1>Contact Us</h1>
      <img src={`${process.env.PUBLIC_URL}/ContactPage-Hero.png`} alt='Contact Hero' className="contact-hero-image" />
      <p className="contact-intro">We're here to help! Whether you have questions about our services, need assistance with your account, or want to provide feedback, our team is ready to assist you. Explore our FAQs or reach out to us directly. Your success is our priority.</p>

      <div className="faqs-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <img src={faq.image} alt={faq.question} className="faq-image" />
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="contact-form-container">
  <h2>Contact Form</h2>
  <div className="form-fields">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Message"></textarea>
  </div>
  <button>Submit</button>
</div>

      <div className="ai-highlight">
        <h2>AI Highlight</h2>
        <img src={`${process.env.PUBLIC_URL}/ContactPage-AI.png`} alt='Contact AI Highlight' className="ai-highlight-image" />
        <p className="ai-highlight-text">Need immediate assistance? Our AI Chatbot is here to help! Whether you have a quick question or need detailed support, our intelligent assistant can guide you. Powered by cutting-edge AI technology, our chatbot provides accurate and timely responses to make your experience seamless and efficient.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;