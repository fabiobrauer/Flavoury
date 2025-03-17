import React from 'react';

export default function ImageList() {
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
    img: 'wohngebäude3.jpeg',
    title: 'Vorderseite',
  },
  {
    img: 'Wohngebäude4.jpeg',
    title: 'Hofperspektive',
  },
  {
    img: 'Wohngebäude1.jpeg',
    title: 'Mehrfamilienhaus',
    Architekt: 'Axel Brauer',
  },
  {
    img: 'Bauernhaus3.jpeg',
    title: 'Bauernhaus',
  },
  {
    img: 'beiNacht.jpg',
    title: 'bei Nacht',
    featured: true
  },
];
