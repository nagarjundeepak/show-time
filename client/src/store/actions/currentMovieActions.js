export const currentMovie = data => {
  return {
    type: 'CURRENT_MOVIE',
    data,
  };
};

export const deleteCurrent = () => {
  return {
    type: 'DESTROY_CURRENT',
  };
};
