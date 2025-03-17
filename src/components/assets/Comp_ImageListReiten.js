import React from 'react';

export default function ReitenCustomImageList() {
  return (
    <div className="image-list">
      {itemData.map((item) => (
        <div key={item.img} className={`image-item ${item.featured ? 'featured' : ''}`}>
          <img src={item.img} alt={item.title} loading="lazy" />
          <div className="image-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
}

const itemData = [
  {
    img: 'Reint5.jpeg',
    title: 'Ponie Reiten',
  },
  {
    img: 'Pferd.jpeg',
    title: 'Pferd',
  },
  {
    img: 'Adessa.jpeg',
    title: 'Fohlen',
  },
  {
    img: 'reiten3 1.png',
    title: 'Kind mit Ponie',
  },
  {
    img: 'folen.png',
    title: 'Kind mit Ponie',
    featured: true
  },
];
