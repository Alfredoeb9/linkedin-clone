import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/counter/userSlice"
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  // Gives us the tools to dispatch values into redux
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      // Use the login state from userSlice(redux)
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName
        })
      )
    }).catch(error => console.log(error))

  };

  const register = () => {
    if (!name) {
      return alert('Please enter a full name!')
    }
    // use the firebase to create user with email and password and push into database
    // this returns a userAuth which we can then update the new profile with displayName
    // and photoURL
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      // Push user into the redux store
      .then(() => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic
        }))
      })
    }).catch(error => console.log(error.message))
  };

  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0VKs" alt="LinkedIn Logo" />

      <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />

        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member? {" "}
        <span className="login__register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
};

export default Login;