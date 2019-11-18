import {combineReducers} from 'redux';

import Genres from './genreReducer';
import Ratings from './userRatingReducer';
import CurrentMovie from './currentMovieReducer';

const RootReducer = combineReducers ({Genres, Ratings, CurrentMovie});

export default RootReducer;
