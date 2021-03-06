import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle, signUpWithEmail } from '../services/firebase';
import '../styles/auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isDisabled = name === '' || email === '' || password === '';

  useEffect(() => {
    document.title = 'Sign Up — TooDo';
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    //TODO: check if user is already registered in db.

    try {
      await signUpWithEmail(name, email, password);
    } catch (error) {
      setPassword('');
      setError(error.message);
    }
  };

  return (
    <div className='sign-up-page'>
      {error && (
        <div className='error-group'>
          <FontAwesomeIcon icon={faCircleExclamation} />
          <p className='error-message'>{error}</p>
        </div>
      )}

      <form onSubmit={handleSignUp} method='POST' className='auth'>
        <div className='control-group'>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            id='name'
          />
          <label htmlFor='name'>Name:</label>
        </div>
        <div className='control-group'>
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id='email'
          />
          <label htmlFor='email'>Email Address:</label>
        </div>
        <div className='control-group'>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id='password'
          />
          <label htmlFor='password'>Password:</label>
        </div>

        <button
          disabled={isDisabled}
          type='submit'
          className='form-btn'
          style={{ opacity: isDisabled ? '0.5' : '1' }}
        >
          Sign Up
        </button>
      </form>

      <div className='btn-switch'>
        <Link to='/'>Login</Link>
      </div>

      <div className='btn-social' onClick={signInWithGoogle}>
        Sign In with Google
      </div>
    </div>
  );
};

export default SignUpPage;
