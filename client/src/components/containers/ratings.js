import React, {useState} from 'react';

function Ratings (props) {
  const [rating, setRating] = useState (null);
  const hanldeChange = i => {
    setRating (i);
  };
  let stars = [];
  let j = 1;
  for (let i = 10; i > 0; i = i - 0.5) {
    let classes = j % 2 !== 0 ? 'full' : 'half';
    stars.push (
      <React.Fragment key={i}>
        <input
          type="radio"
          id={`star${i}`}
          name="rating"
          value={i}
          onChange={() => hanldeChange (i)}
          onClick={() => {
            props.onRating (i);
          }}
        />
        <label className={classes} htmlFor={`star${i}`} title="rating" />
      </React.Fragment>
    );
    j++;
  }

  return (
    <div
      className="container mt-3"
      style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
    >
      <div className="row mt-1">
        <fieldset className="rating">
          {stars.map ((star, i) => {
            return star;
          })}
        </fieldset>
      </div>
      <div className="row text-warning mt-3">
        {rating === null
          ? <b>You haven't rated the movie yet</b>
          : <span>
              You have rated this movie <b>{rating}</b> out of 10.
            </span>}
      </div>
    </div>
  );
}

export default Ratings;
