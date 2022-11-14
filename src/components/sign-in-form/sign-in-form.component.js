import {
  useState,
  // useContext
} from "react"
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  // createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

import {
  SignInContainer,
  ButtonsContainer
} from "./sign-in-form.styles"

// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  //destructure setter from imported context
  //removing because of authListener
  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      //set context with imported context setter (response.user)
      //access from navigation

      //removing because of authListener
      // setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      }
      if (error.code === "auth/user-not-found") {
        alert("Email not found. Please sign up.");
      }
      console.log("email /password sign-in error: ", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const signInWithGoogle = async () => {
    //popup google login, return user auth object, destructure to user

    //changing because of autObserver ... handled now on firebase side?
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
