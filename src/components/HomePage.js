import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div style={{ textAlign: 'center' }}> {/* Add this div to center the text */}
        <h1 style={{ fontSize: '26px', fontFamily: 'Arial, sans-serif', marginBottom: '0px' }}>Welcome to Writer-Assist</h1>
        <p style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>Your one-stop platform for all your writing needs.</p>
      </div>
      <div style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/HomePage-Welcome.png)`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '100%', 
        height: '250px' 
      }} />
  
     
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%' }}>
        {/* Create My Story */}
        <div style={{ flex: '1 0 20%', margin: '10px', textAlign: 'center' }}>
          <h2>Create My Story</h2>
          <img src={`${process.env.PUBLIC_URL}/HomePage-creating.png`} alt='Create Story' style={{ height: "auto", width: "70%" }} />
          <p style={{ fontSize: '0.8rem' }}>Unleash your creativity with our AI-powered writing tools...</p>
          <Link to='/services#create-my-story'>Learn More</Link>
        </div>

        {/* Publish My Story */}
        <div style={{ flex: '1 0 20%', margin: '10px', textAlign: 'center' }}>
          <h2>Publish My Story</h2>
          <img src={`${process.env.PUBLIC_URL}/HomePage-publishing.png`} alt='Publish Story' style={{ height: "auto", width: "70%" }} />
          <p style={{ fontSize: '0.8rem' }}>Step into the world of publishing with confidence and ease...</p>
          <Link to='/services#publish-my-story'>Learn More</Link>
        </div>

        {/* Promote My Story */}
        <div style={{ flex: '1 0 20%', margin: '10px', textAlign: 'center' }}>
          <h2>Promote My Story</h2>
          <img src={`${process.env.PUBLIC_URL}/HomePage-promotion.png`} alt='Promote Story' style={{ height: "auto", width: "70%" }} />
          <p style={{ fontSize: '0.8rem' }}>Let your story be heard far and wide...</p>
          <Link to='/services#promote-my-story'>Learn More</Link>
        </div>

        {/* Fund My Story */}
        <div style={{ flex: '1 0 20%', margin: '10px', textAlign: 'center' }}>
          <h2>Fund My Story</h2>
          <img src={`${process.env.PUBLIC_URL}/HomePage-funding.png`} alt='Fund Story' style={{ height: "auto", width: "70%" }} />
          <p style={{ fontSize: '0.8rem' }}>Don't let financial constraints hinder your dreams...</p>
          <Link to='/services#fund-my-story'>Learn More</Link>
        </div>

        {/* Review My Story */}
        <div style={{ flex: '1 0 20%', margin: '10px', textAlign: 'center' }}>
          <h2>Review My Story</h2>
          <img src={`${process.env.PUBLIC_URL}/HomePage-review.png`} alt='Review Story' style={{ height: "auto", width: "35%" }} />
          <p style={{ fontSize: '0.8rem' }}>Improve your craft with constructive feedback...</p>
          <Link to='/services#review-my-story'>Learn More</Link>
        </div>

        {/* Sell My Story */}
        <div style={{ flex: '1 0 20%', margin: '10px', textAlign: 'center' }}>
          <h2>Sell My Story</h2>
          <img src={`${process.env.PUBLIC_URL}/HomePage-sell.png`} alt='Sell Story' style={{ height: "auto", width: "35%" }} />
          <p style={{ fontSize: '0.8rem' }}>Turn your passion into profit...</p>
          <Link to='/services#sell-my-story'>Learn More</Link>
        </div>
      </div>

      <Footer homePage={true} />



    </div>
  );
};

export default HomePage;
