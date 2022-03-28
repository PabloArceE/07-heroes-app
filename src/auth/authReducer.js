// const state = {
//     name: 'Pablo',
//     logged: true,
// }

// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'Pablo',
//         email: 'asdasd@gmail.com',
//     }
// }

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
