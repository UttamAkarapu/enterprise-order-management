  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../app/hooks';
import { loginSuccess } from '../features/auth/authSlice';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Temporary mock authentication
    const user = {
      id: '1',
      name: 'John Admin',
      email,
      role: 'admin' as const,
    };

    const token = 'mock-jwt-token';

    dispatch(
      loginSuccess({
        user,
        token,
      })
    );

    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter password"
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;