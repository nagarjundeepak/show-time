const initState = {
  current: [],
};

const CurrentMovie = (state = initState, action) => {
  switch (action.type) {
    case 'CURRENT_MOVIE':
      return {current: action.data};
    case 'DESTROY_CURRENT':
      return (state = {current: []});
    default:
      return state;
  }
};

export default CurrentMovie;
