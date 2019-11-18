import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {IMG_PATH} from '../../store/utils/keys';
import {currentMovie} from '../../store/actions/currentMovieActions';

function MovieCard({data, setCurrent, ratingList}) {
  // getting ratings
  let alreadyRated = helper (ratingList, data.id);
  let tid = alreadyRated.tid;

  const handleClick = () => {
    setCurrent (data);
  };
  let myRating = tid === data.id ? alreadyRated.res : 'N/A';

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
          <div>Your Rating: {myRating}</div>
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
  let tid = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].movie.id === id) {
      res = arr[i].rating;
      tid = arr[i].movie.id;
      return {res, tid};
    }
  }
  return {res, tid};
}
