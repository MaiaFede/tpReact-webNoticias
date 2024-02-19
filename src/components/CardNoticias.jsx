import React from 'react';

const CardNoticias = ({ noticiaProps }) => {
 
  return (
    <div className="card">
      <img src={noticiaProps.urlToImage} alt={noticiaProps.title} />
      <h2>{noticiaProps.title}</h2>
      <p>{noticiaProps.description}</p>
      <a href={noticiaProps.url} className='btn btn-primary'>Mas informacion</a>
    </div>
  );
};

export default CardNoticias;

