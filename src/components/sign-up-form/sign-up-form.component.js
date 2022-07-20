import {
   useState, 
  //  useContext 
  } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;


  //removing because of authListener
  // const val = useContext(UserContext);

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    //prevent re-rendering
    event.preventDefault();

    //validate matching passwords
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    //try / catch request to firebase / google for credential auth 
    try {
      //destructure user from response with arguments
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      //set context user object to response.user
      // setCurrentUser(user);
        //create doc in db format to be stored
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use.");
      } else {
        console.log("email /password signup error: ", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't Have an Account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}

          // placeholder="Confirm Password"
        />{" "}
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
