import { useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utilities/firebase/firebase.utils"
import { useDispatch } from 'react-redux'
import { setCurrentUser } from "./store/user/user.action"


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      //set to user value, either null or userData object
      if (user) {
        createUserDocumentFromAuth(user)
      }
      //generate user action object, dispatch with hook
      dispatch(setCurrentUser(user))
    });
    return unsubscribe;
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
