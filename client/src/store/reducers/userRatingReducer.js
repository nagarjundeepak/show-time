const initState = {
  userRating: [],
};

const Ratings = (state = initState, action) => {
  switch (action.type) {
    case 'PUT_RATING':
      return {...state, userRating: [...state.userRating, action.data]};
    default:
      return state;
  }
};

export default Ratings;
