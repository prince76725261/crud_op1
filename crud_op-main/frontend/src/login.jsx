// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Make API call to backend for user login
//       const response = await axios.post('/api/login', { email, password });

//       // Assuming your backend returns a token on successful login
//       const token = response.data.token;

//       // Store the token in local storage or state for future requests
//       localStorage.setItem('token', token);

//       // Redirect or perform any other actions on successful login
//       // For example, you can use React Router to navigate to a different page
//       // history.push('/dashboard');
//     } catch (error) {
//       // Handle login error
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//       <label>Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//       <button type="submit">Login</button>

//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;
