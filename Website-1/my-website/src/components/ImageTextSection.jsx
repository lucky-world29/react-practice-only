import React from "react";

const ImageTextSection = () => {
  return (
    <section style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
      <img src="https://images.unsplash.com/photo-1470239313878-0d1de9d85508?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8" alt="Section" style={{ flex: 1 }} />
      <div style={{ flex: 1 }}>
        <h2>Your Title Here</h2>
        <p>Add a detailed description here for this section.</p>
      </div>
    </section>
  );
};

export default ImageTextSection;
