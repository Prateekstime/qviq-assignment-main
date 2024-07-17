import React, { useRef } from 'react';

const ImageWithContent = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      imageRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }
  };

  return (
    <div className="flex p-8 bg-gray-100 dark:bg-gray-800" onMouseMove={handleMouseMove}>
      <img ref={imageRef} src="../assets/hero-img.jpeg" alt="description" className="w-1/3"/>
      <div className="ml-8">
        <h2 className="text-2xl font-bold">Content Title</h2>
        <p>Some interesting content goes here.</p>
      </div>
    </div>
  );
};

export default ImageWithContent;
