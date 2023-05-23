function Card ({ r, add, mod, remove }){
    return(
        <div className="card">
      <img src={r.slika} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{r.naziv}</h5>
        <p className="card-text">
          {r.opis} <br /> First published: {r.godina}
        </p>
        {mod === 1 ? (
          <button className="add" onClick={() => add(r.id)}>
            Add to wishlist
          </button>
        ) : (
          <button className="remove" onClick={() => remove(r.id)}>
            Remove from wishlist
          </button>
        )}
      </div>
    </div>
    );
}

export default Card;