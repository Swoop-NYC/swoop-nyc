import React from "react";

const Signup = () => {
  const [signinMessage, setSigninMessage] = useState([]);

  //async function that will check to see if the user exists
  const createUser = async () => {
    //grab the form fields and build an object
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const user = {username: username.value, password: password.value}
    //checks to make sure form fields are not empty
    for (const key in user) {
      if (key === '') {
        setSigninMessage([<p>Please input a valid username or password.</p>])
        return;
      }
    }
    //checks to make sure password does not have any special characters defined in the regex expression. 
      if (password.value.matches('^(?=*[@$%*#&])$')) {
        setSigninMessage([<p>Cannot use any of the following special characters in your password: @, $, %, *, #, &.</p>])
        return;
      }
      //construct the object I am going to POST to the server 
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({user: user}),
      };
    try {
      const serverReponse = await fetch('http://localhost:3000/sign/', options);
    }
    catch (err) {
      //if the login fails, throw this error below the login button
      setSigninMessage([<p id='error'>Unable to create account. Please try again.</p>])
    }
  }
return (
  <div id='login'>
    <label>User Name:</label>
    <input type='text' id='username'></input>
    <label>Password:</label>
    <input type='password' id='passwordww'></input>
    <button onClick={createUser}>Login</button>
    {loginMessage}
  </div>
)
}

export default Signup;