export const putRating = (val, movie) => {
  return {
    type: 'PUT_RATING',
    data: {rating: val, movie},
  };
};
