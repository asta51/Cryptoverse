import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';
import AuthImage from '../assets/aa.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Add this import

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const location = useLocation();
  const { email: emailFromState } = location.state || {};
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (emailFromState) {
      setEmail(emailFromState);
    }
  }, [emailFromState]);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => password.length >= 6;
  const isValidDateOfBirth = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  };

  const registerUser = async (user) => {
    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const result = await response.json();
      return result.message || 'Registeration Successful';
    } catch (error) {
      console.error('There was an error!', error);
      return 'Error registering user';
    }
  };

  const loginUser = async (user) => {
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const result = await response.text();
      return result;
    } catch (error) {
      console.error('There was an error!', error);
      return 'Error logging in user';
    }
  };

  const loginAdmin = async (admin) => {
    try {
      const response = await fetch('http://localhost:8080/api/admins/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admin),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const result = await response.text();
      return result;
    } catch (error) {
      console.error('There was an error!', error);
      return 'Error logging in admin';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert('Invalid email');
      return;
    }
    if (!isValidPassword(password)) {
      alert('Password must be at least 6 characters long');
      return;
    }
    if (isRegistering) {
      if (!isValidDateOfBirth(dateOfBirth)) {
        alert('You must be at least 18 years old to register');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      const response = await registerUser({ email, password, name, dateOfBirth });
      alert(response);
    } else if (isAdminLogin) {
      const response = await loginAdmin({ email, password });
      if (response === 'Admin login successful!') {
        login(true);
        navigate('/admin');
      } else {
        alert(response);
      }
    } else {
      const response = await loginUser({ email, password });
      if (response === 'Login successful!') {
        login(false);
        navigate('/home');
      } else {
        alert(response);
      }
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className='auth'>
      <div className='container'>
        <div className='form-wrapper'>
          {!isRegistering && !isAdminLogin && (
            <div className='form-section login'>
              <h1>Log<span className='primary'>in</span></h1>
              <form onSubmit={handleSubmit}>
                <div className='input-container'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='input-container password-container'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  
                </div>
                <button type='submit' className='btn'>Login</button>
                <p className='switch-form'>
                  Don't have an account? <span onClick={() => setIsRegistering(true)}>Register</span>
                </p>
                <p className='switch-form'>
                  Are you an admin? <span onClick={() => setIsAdminLogin(true)}>Admin Login</span>
                </p>
              </form>
            </div>
          )}

          {!isRegistering && isAdminLogin && (
            <div className='form-section admin-login'>
              <h1>Adm<span className='primary'>in</span> Log<span className='primary'>in</span></h1>
              <form onSubmit={handleSubmit}>
                <div className='input-container'>
                  <label htmlFor='email'>Admin Email</label>
                  <input
                    type='email'
                    id='email'
                    placeholder='Enter your admin email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='input-container password-container'>
                  <label htmlFor='password'>Admin Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    placeholder='Enter your admin password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  
                </div>
                <button type='submit' className='btn'>Login</button>
                <p className='switch-form'>
                  Not an admin? <span onClick={() => setIsAdminLogin(false)}>User Login</span>
                </p>
              </form>
            </div>
          )}

          {isRegistering && (
            <div className='form-section register'>
              <h1>Regi<span className='primary'>ster</span></h1>
              <form onSubmit={handleSubmit}>
                <div className='input-container'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className='input-container'>
                  <label htmlFor='dateOfBirth'>Date of Birth</label>
                  <input
                    type='date'
                    id='dateOfBirth'
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                  />
                </div>
                <div className='input-container'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='input-container password-container'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  
                </div>
                <div className='input-container password-container'>
                  <div className='eye-icon'></div>
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id='confirmPassword'
                    placeholder='Confirm your password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  
                </div>
                <button type='submit' className='btn'>Register</button>
                <p className='switch-form'>
                  Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span>
                </p>
              </form>
            </div>
          )}
        </div>
        <div className='img-container'>
          <img src={AuthImage} alt='Authentication' />
        </div>
      </div>
    </div>
  );
};

export default Auth;