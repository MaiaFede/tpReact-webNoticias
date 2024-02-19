import React from 'react';

const CardNoticias = ({noticiaProps}) => {
    return (
        <>
            <div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">{noticiaProps.title}</h5>
    <p className="card-text">{noticiaProps.description}</p>
    <a href={noticiaProps.url} className="btn btn-primary">Más infromacion</a>
  </div>
</div>
</>
    );
};

export default CardNoticias;
