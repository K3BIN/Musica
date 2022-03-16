import React from 'react';

const Cards = (props) => {
    const{imagen, titulo, texto} = props;
    return(
        <div className="card h-100" style={{width:"15rem"}}>
            <img src={imagen} className="card-img-top img-thumbnail bg-dark" alt="..." />
            <div className="card-body bg-dark text-light">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
            </div>
        </div>
      );
}

export default Cards;