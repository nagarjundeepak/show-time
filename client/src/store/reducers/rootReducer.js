import {combineReducers} from 'redux';

import authReducer from './authReducer';
import Genres from './genreReducer';
import Ratings from './userRatingReducer';
import CurrentMovie from './currentMovieReducer';
import {AddingToUser} from './addToUserReducer';

const RootReducer = combineReducers ({
  auth: authReducer,
  Genres,
  Ratings,
  CurrentMovie,
  AddingToUser,
});

export default RootReducer;
