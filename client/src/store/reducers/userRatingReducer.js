const initState = {
  userRating: [],
};

const Ratings = (state = initState, action) => {
  switch (action.type) {
    case 'PUT_RATING':
      console.log (action.data);
      let updatedRatints = [state.userRating, ...action.data];
      return state;
    default:
      return state;
  }
};

export default Ratings;
