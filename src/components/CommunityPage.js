import React from 'react';
import Footer from './Footer';

const CommunityPage = () => {
  // Sample forum discussions data
  const discussions = [
    {
      title: 'Writing Tips for Beginners',
      image: `${process.env.PUBLIC_URL}/CommunityPage-Forum.png`,
      description: 'Join this discussion to share and learn writing tips and techniques that can help beginners start their writing journey.',
    },
    {
      title: 'Self-Publishing Experiences',
      image: `${process.env.PUBLIC_URL}/CommunityPage-Forum2.png`,
      description: 'A community-driven conversation about the experiences, challenges, and successes of self-publishing. Share your story or learn from others.',
    },
    // Add more discussions as needed
  ];

  return (
    <div className="community-page-container">
      <h1 className="community-title">Community</h1>
      <img src={`${process.env.PUBLIC_URL}/CommunityPage-Hero.png`} alt='Community Hero' className="community-hero-image" />
      <p className="community-intro">Connect with fellow authors, readers, and industry experts in our vibrant community. Engage in meaningful discussions, share your experiences, and learn from others. Whether you're a seasoned author or just starting out, our community is here to support and inspire you.</p>

      <div className="discussions-section">
        {discussions.map((discussion, index) => (
          <div key={index} className="discussion-item">
            <h3 className="discussion-title">{discussion.title}</h3>
            <img src={discussion.image} alt={discussion.title} className="discussion-image" />
            <p className="discussion-description">{discussion.description}</p>
          </div>
        ))}
      </div>

      <div className="ai-highlight-section">
        <h2 className="ai-highlight-title">AI Highlight</h2>
        <img src={`${process.env.PUBLIC_URL}/CommunityPage-AI.png`} alt='Community AI Highlight' className="ai-highlight-image" />
        <p className="ai-highlight-description">Explore discussions tailored to your interests with our AI-powered recommendation engine. By analyzing your engagement and preferences, our AI suggests discussions and topics that resonate with you. Dive into conversations that inspire and challenge you, and connect with like-minded individuals in our community.</p>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;