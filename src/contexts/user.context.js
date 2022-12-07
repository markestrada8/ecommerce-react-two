// import { createContext, useEffect, useReducer } from "react"
// import { createAction } from "../utilities/reducer/reducer.utils";

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from "../utilities/firebase/firebase.utils"

// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });



// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
//   const { currentUser } = state

//   console.log('current user: ', currentUser)



//   const value = {
//     currentUser: currentUser,
//     setCurrentUser: setCurrentUser
//   }



//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

// }
