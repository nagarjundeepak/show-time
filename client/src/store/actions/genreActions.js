export const getGenre = gid => {
  return {
    type: 'GET_GENRE',
    gid,
  };
};
