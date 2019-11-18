import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {IMG_COVER_PATH} from '../../store/utils/keys';
import {putRating} from '../../store/actions/userRatingActions';
import {addToUser} from '../../store/actions/addToUserActions';
import Ratings from '../containers/ratings';

function MovieDetails (props) {
  const [isRated, setIsRated] = useState (false);
  const [value, setValue] = useState (null);
  const {isAuthenticated, user} = props.auth;
  if (props.CurrentMovie.current.length === 0) {
    props.history.push ('/');
  }
  // getting current data from store
  const data = props.CurrentMovie.current;
  // getting rating
  const handleRating = val => {
    setValue (val);
    props.setRating (val, data);
    setIsRated (true);
  };
  // unmount stage
  useEffect (
    () => {
      if (isRated && isAuthenticated) {
        axios
          .post ('/api/movies', {movie: data, rating: value, userId: user.id})
          .then (res => console.log (res))
          .catch (err => {
            console.error (err);
          });
      }
    },
    [isRated, isAuthenticated, value, data, user.id]
  );

  // chceking for genres
  let gArr = finder (data.genre_ids, props.Genres.genres);

  return (
    <div className="container">
      <div className="container">
        <img
          alt={data.original_title}
          src={`${IMG_COVER_PATH}${data.backdrop_path}`}
          style={{width: 'inherit', height: '250px'}}
        />
      </div>
      <div className="container mt-3">
        <h4>
          {data.original_title ? data.original_title : data.original_name}
        </h4>
      </div>
      <div className="container mt-3">
        Genres:{' '}
        <span>
          {gArr.length === 0
            ? 'Unavaialable'
            : gArr.map ((g, i) => {
                return <span key={i}>{` ${g}`}</span>;
              })}
        </span>
      </div>
      <div className="container mt-3">{`IMDB Rating: ${data.vote_average}`}</div>
      <div className="container mt-3">{`Overview: ${data.overview}`}</div>
      <div className="container mt-3">
        <div>Have you watched it, put your rating</div>
        <Ratings onRating={handleRating} />
        <div />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    setRating: (val, data) => {
      dispatch (putRating (val, data));
    },
    onAddToUser: data => {
      dispatch (addToUser (data));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (MovieDetails);

const finder = (localGenre, globalGenre) => {
  let res = [];
  for (let i = 0; i < globalGenre.length; i++) {
    for (let j = 0; j < localGenre.length; j++) {
      if (globalGenre[i].id === localGenre[j]) {
        res.push (globalGenre[i].name);
      }
    }
  }
  return res;
};
