import React, { useEffect } from 'react';
import Footer from './Footer';

const ServicesPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView();
    }
  }, []);

  return (
    <div className="services-page-container">
      <h1>Our Services</h1>
      <div className="section" id="create-my-story">
        <h2>Create My Story</h2>
        <div className="image-text">
          <img src={`${process.env.PUBLIC_URL}/HomePage-creating.png`} alt='Create Story' />
          <p>Unleash your creativity with our AI-powered writing tools. Whether you're crafting your first novel or your tenth, our AI assistant is here to guide you every step of the way. From generating ideas to refining your prose, our AI tools will transform your writing process. Let us help you turn your ideas into captivating stories that readers won't be able to put down. Experience a new level of creativity with AI-driven suggestions, idea generation, and creativity boosters that will take your writing to new heights.</p>
        </div>
      </div>
      <div className="section" id="publish-my-story">
        <h2>Publish My Story</h2>
        <div className="image-text">
          <img src={`${process.env.PUBLIC_URL}/HomePage-publishing.png`} alt='Publish Story' />
          <p>Step into the world of publishing with confidence and ease. Our platform provides comprehensive support to turn your manuscript into a professionally published book. With AI-driven layout and design tools, we'll help you create a book that's not just well-written but also visually stunning. Navigate the publishing process with our AI tools that simplify complex tasks and guide you towards success. From cover design to formatting, our AI-driven solutions ensure a seamless publishing experience.</p>
        </div>
      </div>
      <div className="section" id="promote-my-story">
        <h2>Promote My Story</h2>
        <div className="image-text">
          <img src={`${process.env.PUBLIC_URL}/HomePage-promotion.png`} alt='Promote Story' />
          <p>Let your story be heard far and wide. With our AI-driven marketing tools, you can reach your target audience and beyond. Our AI analyzes reader trends and preferences to create personalized marketing strategies. From social media promotion to email campaigns, we'll help you get your book in front of the people who are most likely to love it. Utilize AI-driven insights to craft effective promotional campaigns that resonate with your audience.</p>
        </div>
      </div>
      <div className="section" id="fund-my-story">
        <h2>Fund My Story</h2>
        <div className="image-text">
          <img src={`${process.env.PUBLIC_URL}/HomePage-funding.png`} alt='Fund Story' />
          <p>Don't let financial constraints hinder your dreams. Explore our crowdfunding options to gather the resources you need to bring your story to life. Our platform is equipped with AI insights on effective campaign strategies, helping you reach your funding goals faster. With our AI-guided support, you can focus on what you do best - writing. Leverage AI-driven predictions and insights to create compelling crowdfunding campaigns that resonate with potential backers.</p>
        </div>
      </div>
      <div className="section" id="review-my-story">
        <h2>Review My Story</h2>
        <div className="image-text">
          <img src={`${process.env.PUBLIC_URL}/HomePage-review.png`} alt='Review Story' />
          <p>Improve your craft with constructive feedback. Engage with our community of authors and readers, and receive AI-generated insights from your reviews and ratings. Our AI tools analyze feedback to provide you with actionable suggestions for improvement. Learn from your readers, refine your skills, and grow as a writer. Utilize AI-driven analysis to understand your readers' feedback and make informed improvements to your work.</p>
        </div>
      </div>
      <div className="section" id="sell-my-story">
        <h2>Sell My Story</h2>
        <div className="image-text">
          <img src={`${process.env.PUBLIC_URL}/HomePage-sell.png`} alt='Sell Story' />
          <p>Turn your passion into profit. Sell your books directly to readers on our platform. Our AI tools analyze market trends and reader preferences to help you set the optimal price and sales strategy. With our AI-powered platform, selling your book becomes less of a guessing game and more of a strategic decision. Leverage AI-driven insights to understand market dynamics and craft a sales strategy that maximizes your revenue potential.</p>
        </div>
      </div>
      <div className="section" id="ai-highlight">
        <h2>AI Highlight</h2>
        <div className="image-text">
          <img src={`${process.env.PUBLIC_URL}/Services Page-AI-image.png`} alt='AI Highlight' />
          <div>
            <p>Discover the power of AI in your writing journey...</p>
            <ul>
              <li><strong>AI-Powered Writing Tools:</strong> Enhance your creativity and refine your prose with intelligent suggestions, idea generation, and creativity boosters.</li>
              <li><strong>AI-Driven Layout and Design Tools:</strong> Create visually stunning books with AI-guided layout and design optimization.</li>
              <li><strong>AI-Analyzed Marketing Strategies:</strong> Reach your target audience with personalized marketing strategies based on AI analysis of reader trends and preferences.</li>
              <li><strong>AI Insights for Crowdfunding:</strong> Predict the success of your crowdfunding campaign and reach your funding goals faster with intelligent algorithms.</li>
              <li><strong>AI-Generated Review Insights:</strong> Understand and learn from your readers' feedback with in-depth analysis and actionable suggestions from our AI review system.</li>
              <li><strong>AI-Optimized Pricing and Sales Strategy:</strong> Analyze market trends and reader preferences to set the optimal price and sales strategy for your books.</li>
              <li><strong>AI-Enhanced Community Engagement:</strong> Engage with a community of authors and readers, leveraging AI to provide personalized recommendations and connections.</li>
              <li><strong>AI-Supported Promotion Tools:</strong> Utilize AI-driven social media promotion, email campaigns, and targeted advertising to get your book in front of potential readers.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
