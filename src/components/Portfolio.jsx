import React from "react";

const portfolioImages = Array.from({ length: 10 }, (_, i) => `/assets/images/portfolio${i + 1}.jpg`);

function Portfolio() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-red-400">作品集</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {portfolioImages.map((image, index) => (
          <img key={index} src={image} alt={`作品 ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
