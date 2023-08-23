import React from 'react';
import Footer from './Footer';

const MarketplacePage = () => {
  // Sample book ideas data
  const bookIdeas = [
    {
      title: 'Journey Through Time',
      description: 'A thrilling science fiction novel that takes readers on a roller-coaster ride through different eras. With AI-generated characters and plot twists, this book offers a unique reading experience that challenges the boundaries of time and reality.',
      image: `${process.env.PUBLIC_URL}/MarketplacePage-Journey Through Time.png`,
    },
    {
      title: 'Battle of the Bots',
      description: 'An action-packed adventure that explores the future of AI-driven warfare. Readers will be immersed in a world where technology and humanity collide, raising ethical questions and offering a gripping tale of survival.',
      image: `${process.env.PUBLIC_URL}/MarketplacePage-Battle of the Bots.png`,
    },
    {
      title: 'The Garden of Dreams',
      description: 'A heartwarming romance novel set in a magical garden where dreams come true. With the help of AI-powered imagery, readers are transported to a world filled with love, hope, and enchantment.',
      image: `${process.env.PUBLIC_URL}/MarketplacePage-The Garden of Dreams.png`,
    },
    {
      title: 'Secrets of the Mind',
      description: 'A psychological thriller that delves into the human psyche. Using AI-driven analysis of human behavior, the story unravels a mysterious crime through unexpected twists and turns. A must-read for those who love suspense and intrigue.',
      image: `${process.env.PUBLIC_URL}/MarketplacePage-Secrets of the Mind.png`,
    },
    {
      title: 'Web Of Intrigue: The Espionage Escalation',
      description: 'The plot twists on the murder of CIA officers in Russia, as well as the mysterious poisonings of a CIA agent in Washington, who is investigating a secret spy network in the secret department of the Department of Defense.',
      image: `${process.env.PUBLIC_URL}/MarketplacePage-The Espionage Escalation.png`,
    },
    {
      title: 'Web Of Intrigue: The Espionage Revelation',
      description: 'The American capital morphs into a battlefield as highly skilled and relentless enemy agents infiltrate the city, aiming to deliver a crippling blow to the country security system.',
      image: `${process.env.PUBLIC_URL}/MarketplacePage-The Espionage Revelation.png`,
    }
  ];


  return (
    <div className="marketplace-page-container">
      <h1>Marketplace</h1>
      <p className="intro-text">Explore a diverse collection of book ideas crafted by authors from around the globe. Whether you're looking to buy a fresh concept or sell your own unique story, our marketplace is the perfect platform. With an AI-Powered Recommendation Engine, we personalize your browsing experience, connecting you with ideas that align with your interests and style. Dive into a world of creativity and find the next big hit! Experience a new way of discovering stories that resonate with your taste, all curated by our intelligent AI algorithms.   </p>
      <img src={`${process.env.PUBLIC_URL}/MarketplacePage-Hero image.png`} alt='Marketplace Hero' className="hero-image" />

      <div className="book-ideas">
        {bookIdeas.map((book, index) => (
          <div key={index} className="book-idea">
            <h3>{book.title}</h3>
            <img src={book.image} alt={book.title} className="book-image" />
            <p>{book.description}</p>
          </div>
        ))}
      </div>
      <div className="ai-highlight">
        <h2>AI Highlight</h2>
        <img src={`${process.env.PUBLIC_URL}/MarketplacePage-AI Highlights.png`} alt='AI Highlight' className="ai-highlight-image" />
        <p> Our AI-Powered Recommendation Engine is at the heart of our marketplace, providing a tailored experience for every user. By analyzing your preferences, reading history, and feedback, our AI crafts a personalized list of book ideas that resonate with your taste. Whether you're a fan of thrilling mysteries, heartwarming romances, or thought-provoking sci-fi, our AI ensures that you discover stories that captivate your imagination. Experience the future of browsing with our intelligent recommendations, and let us guide you to your next favorite book idea. Explore the endless possibilities of storytelling, all powered by cutting-edge AI technology.</p>
      </div>
      <Footer />
    </div>
  );
};

export default MarketplacePage;
