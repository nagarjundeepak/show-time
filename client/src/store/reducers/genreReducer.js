import axios from 'axios';
import {URL, API_KEY} from '../utils/keys';
const initState = {
  genres: [],
};

const fetchData = async () => {
  let result = await axios.get (
    `${URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  initState.genres = result.data.genres;
};
fetchData ();
const Genres = (state = initState, action) => {
  switch (action.type) {
    case 'GET_GENRE':
      return state;
    default:
      return state;
  }
};

export default Genres;
