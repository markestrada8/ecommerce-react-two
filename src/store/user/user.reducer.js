import { USER_ACTION_TYPES } from "./user.types"

// SET INITIAL STATE
const INITIAL_STATE = {
  currentUser: null
}

// DEFINE REDUX / REDUCER (IN-APP API TO HANDLE DATA, RE-DUCE or RE-FORM)
// FOR RE-RENDER: STATE HAS INITIAL VALUE AND PASSES BACK BY DEFAULT
// TO INDICATE NO CHANGE
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      return state
  }
}