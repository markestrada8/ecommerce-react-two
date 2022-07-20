import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const {
    currentUser,
    // setCurrentUser
  } = useContext(UserContext);
  // console.log(currentUser);

  //put firebase function in the button call back w/o proxy / wrapper
  // const signOutHandler = async () => {
  // await response
  //   await signOutUser();
  //function request does not return a response... reset context
  //   setCurrentUser(null);
  // };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
