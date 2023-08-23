import React from 'react';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1 className="about-title">About Writer-Assist</h1>
      
      <div className="section">
      <h2 className="title-section">Our Mission</h2>
        <div className="image-text">
          <img className="about-image" src={`${process.env.PUBLIC_URL}/AboutPage-mission.png`} alt="Our Mission" />
          <p>Writer-Assist is dedicated to supporting writers at every stage of their journey. Our mission is to provide comprehensive tools and services that empower authors to create, publish, and promote their work. We believe in nurturing creativity and strive to make writing accessible to all, regardless of experience or background.</p>
        </div>
      </div>

      <div className="section">
      <h2 className="title-section">Our Platform</h2>
        <div className="image-text">
          <img className="about-image" src={`${process.env.PUBLIC_URL}/AboutPage-platform.png`} alt="Our Platform" />
          <p>Our platform offers innovative tools, resources, and AI-powered features tailored to the needs of writers. From idea generation to publishing and marketing, we provide end-to-end solutions that simplify the writing process. Our goal is to create a collaborative environment where authors can thrive and achieve their writing dreams.</p>
        </div>
      </div>

      <div className="section">
      <h2 className="title-section">The Team</h2>
        <div className="image-text">
          <img className="about-image" src={`${process.env.PUBLIC_URL}/AboutPage-team.png`} alt="Our Team" />
          <p>Meet the passionate team behind Writer-Assist. Comprised of writers, developers, and industry experts, we are united by a shared vision to support authors. Our diverse backgrounds and expertise enable us to provide unique insights and innovative solutions that cater to the evolving needs of the writing community.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
