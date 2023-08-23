import React from 'react';
import Footer from './Footer';

const ResourcesPage = () => {
  // Sample resources data
  const resources = [
    {
      title: 'Writing Guide',
      description: 'A comprehensive guide designed to assist authors in crafting compelling narratives. Whether you are a seasoned author or just starting your writing journey, our Writing Guide offers valuable insights into character development, plot structure, dialogue, and more. Explore interactive tutorials, templates, and AI-powered writing prompts that ignite creativity and enhance your storytelling skills. Let our Writing Guide be your trusted companion in turning your ideas into captivating stories.',
      thumbnail: `${process.env.PUBLIC_URL}/ResourcesPage-WritingGuide.png`,
    },
    {
      title: 'Publishing Toolkit',
      description: 'Embark on the publishing journey with confidence using our Publishing Toolkit. Tailored to meet the needs of both traditional and self-publishing authors, this toolkit provides step-by-step guidance on manuscript preparation, layout design, cover creation, and more. Utilize AI-driven design tools that bring your book to life, and access professional templates that simplify complex tasks. From editing to distribution, our Publishing Toolkit ensures a seamless transition from manuscript to a professionally published book.',
      thumbnail: `${process.env.PUBLIC_URL}/ResourcesPage-PublishingToolkit.png`,
    },
    {
      title: 'Marketing Strategies',
      description: 'Promote your book with success using our Marketing Strategies resource. Designed specifically for authors, this comprehensive guide offers effective marketing techniques that resonate with readers. Learn how to leverage social media, create engaging content, and build a loyal readership with our AI-powered analytics and personalized strategies. Whether you are launching your debut novel or promoting a best-seller, our Marketing Strategies resource empowers you to reach your target audience and boost your book visibility.',
      thumbnail: `${process.env.PUBLIC_URL}/ResourcesPage-MarketingStrategies.png`,
    },
    // Add more resources as needed
  ];

  return (
    <div className="resources-page-container">
      <h1 className="resources-title">Resources</h1>
      <p className="resources-intro">Explore a wide range of resources designed to support authors at every stage of their writing journey. From crafting your story to marketing your book, our platform offers valuable insights, tools, and guidance. Discover the resources that resonate with your needs and let us empower your creative process.</p>
      <img src={`${process.env.PUBLIC_URL}/ResourcesPage-Hero.png`} alt='Resources Hero' className="resources-hero-image" />

      <div className="resources-section">
        {resources.map((resource, index) => (
          <div key={index} className="resource-item">
            <h3 className="resource-title">{resource.title}</h3>
            <img src={resource.thumbnail} alt={resource.title} className="resource-thumbnail" />
            <p className="resource-description">{resource.description}</p>
          </div>
        ))}
      </div>
      <div className="ai-highlight-section">
        <h2 className="ai-highlight-title">AI Highlight</h2>
        <img src={`${process.env.PUBLIC_URL}/ResourcesPage-AI.png`} alt='AI Highlight' className="ai-highlight-image" />
        <p className="ai-highlight-description">Our AI-powered Resource Finder is here to guide you to the resources that match your specific needs and interests. By understanding your writing style, genre preferences, and current project stage, our AI crafts personalized recommendations. Explore resources with confidence, knowing that our intelligent system is here to connect you with the tools that will truly make a difference in your writing journey.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;