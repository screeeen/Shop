import React from 'react'

function ItemCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.img} alt={props.title}/>
        <span className="card-title">{props.title}</span>
        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="materlia-icons">add</i></span>
        </div>
    </div>
  )
}


export default ItemCard;