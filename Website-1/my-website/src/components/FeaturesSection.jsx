import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    { id: 1, title: "Feature One", image: "https://images.unsplash.com/photo-1565104253590-27a9ef6580f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE91ciUyMEZlYXR1cmVzfGVufDB8fDB8fHww", description: "Description for feature one." },
    { id: 2, title: "Feature Two", image: "https://images.unsplash.com/photo-1565103830601-bb6d1a8653ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D", description: "Description for feature two." },
    { id: 3, title: "Feature Three", image: "https://images.unsplash.com/photo-1575950062242-0cc26098d7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8", description: "Description for feature three." },
  ];

  return (
    <section className="features" id="features">
      <h2>Our Features</h2>
      <div className="features-grid">
        {features.map(feature => (
          <div className="feature-card" key={feature.id}>
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
