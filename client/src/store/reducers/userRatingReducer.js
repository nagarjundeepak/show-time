const initState = {
  userRating: [],
};

const Ratings = (state = initState, action) => {
  switch (action.type) {
    case 'PUT_RATING':
      console.log (action.data);
      return {...state, userRating: [...state.userRating, action.data]};
    default:
      return state;
  }
};

export default Ratings;
