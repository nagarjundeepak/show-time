import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {IMG_COVER_PATH} from '../../store/utils/keys';
import {putRating} from '../../store/actions/userRatingActions';
import {deleteCurrent} from '../../store/actions/currentMovieActions';
import Ratings from '../containers/ratings';

function MovieDetails (props) {
  // console.log(props.CurrentMovie.current);
  if (props.CurrentMovie.current.length === 0) {
    props.history.push ('/');
  }

  // unmount stage
  /* useEffect(() => {
    return () => {
      props.removeCurrent();
    };
  }, []); */

  // getting current data from store
  const data = props.CurrentMovie.current;
  // chceking for genres
  let gArr = finder (data.genre_ids, props.Genres.genres);

  // getting rating

  const handleRating = val => {
    console.log (val);
    props.setRating (val, data);
  };

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
