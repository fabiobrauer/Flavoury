import React from 'react';

export default function FerienwohnungCustomImageList() {
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
    img: 'Ferienwohnung1.jpg',
    title: 'Ferienwohnung',
    featured: true
  },
  {
    img: 'Ferienwohnung2.jpg',
    title: 'Ferienwohnung',
    featured: true
  },
  {
    img: 'Ferienwohnung3.jpg',
    title: 'Ferienwohnung',
    featured: true
  },
  {
    img: 'Ferienwohnung4.jpg',
    title: 'Ferienwohnung',
    featured: true
  },
];
