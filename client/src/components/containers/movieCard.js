import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {IMG_PATH} from '../../store/utils/keys';
import {currentMovie} from '../../store/actions/currentMovieActions';

function MovieCard({data, setCurrent, ratingList}) {
  if (data.id === 82856) {
    console.log (ratingList);
  }
  // console.log(ratingList);
  let alreadyRated = helper (ratingList, data.id);
  if (alreadyRated !== 0) {
    console.log (alreadyRated);
  }
  const handleClick = () => {
    setCurrent (data);
  };
  return (
    <Link to="/details">
      <div className="movieCard" onClick={handleClick}>
        <div className="movieCard__front">
          <img
            alt={data.original_title}
            src={`${IMG_PATH}${data.poster_path}`}
            style={{width: 'inherit'}}
          />
        </div>
        <div className="movieCard__back">
          <div>
            <h5>
              {data.original_title ? data.original_title : data.original_name}
            </h5>
          </div>
          <div>{data.release_date}</div>
          <div>{data.media_type}</div>
          <div>{`IMDB Rating: ${data.vote_average}`}</div>
          <div>Users Rating: {}</div>
          <div>Your Rating: </div>
        </div>
      </div>
    </Link>
  );
}

const mapStateToProps = (state, ownProps) => {
  const data = ownProps.data;
  const ratingList = state.Ratings.userRating;
  return {data, ratingList};
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrent: data => {
      dispatch (currentMovie (data));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (MovieCard);

function helper (arr, id) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log (arr[i]);
    if (arr[i].id === id) {
      res = arr[i];
    }
  }
  return res;
}
