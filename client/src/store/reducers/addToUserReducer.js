import axios from 'axios';
const initState = {
  userData: [],
};

export const AddingToUser = (state = initState, action) => {
  switch (action.type) {
    case 'SEND_DATA':
      axios
        .post ('/api/users/movies', action.data)
        .then (res => console.log (res))
        .catch (err => {
          console.error (err);
        });
      return state;
    default:
      return state;
  }
};
