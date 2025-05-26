import './gallery.css';

const Gallery = () => {
  const items = [
    { title: 'RESIDENCIAL', image: '/imagens/fachada.jpg' },
    { title: 'INTERIORES', image: '/imagens/IMG-20250521-WA0061.jpg' },
    { title: 'COMERCIAL', image: '/imagens/IMG-20250521-WA0104.jpg' },
  ];

  return (
    <div className="gallery">
      {items.map((item, index) => (
        <div className="gallery-item" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="overlay">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;