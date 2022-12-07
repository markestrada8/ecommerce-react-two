import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utilities/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink

} from "./navigation.styles"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  //put firebase function in the button call back w/o proxy / wrapper
  // const signOutHandler = async () => {
  // await response
  //   await signOutUser();
  //function request does not return a response... reset context
  //   setCurrentUser(null);
  // };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
