import React from 'react';

const Card = ({title, descrip, place}) => {
    return (
        <article className="card">
            <h5>{title}</h5>
            <p>{descrip}</p> <br/>
            <p>{place}</p>
      </article>
    );
}
 
export default Card;